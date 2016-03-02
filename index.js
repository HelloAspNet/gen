/**
 * Created by wyd on 16/3/1.
 */
requirejs.config({
  baseUrl: './',
  paths: {
    mods: './mods',
    text: './libs/text/text',
    jquery: './libs/jquery/dist/jquery',
    template: './libs/artTemplate/dist/template'
  },
  shim: {}
});

function Mod(html, css, js) {
  this.html = html || '';
  this.css = css || '';
  this.js = js || '';
}
Mod.RE_NAME = /^mods\/[^/]+$/;
Mod.RE_HTML_JS_COMMENT = /<!--[\s\S]*?-->/gm;
Mod.RE_CSS_JS_COMMENT = /\/\*[\s\S]*?\*\//gm;
Mod.RE_JS_COMMENT = /\/\/.*/g;
Mod.RE_BLANK_LINE = /[\r\n]([\r\n\s]*)?[\r\n]/gm;
Mod.RE_CSS_MIN = /([{;])[\r\n\s]+|[\r\n\s]+([}])/g;
Mod.parse = function (obj) {
  return new Mod(obj.html, obj.css, obj.js);
};
/**
 *  mod植入，把modChild嵌入ModParent里。
 *  返回新的Mod实例
 */
Mod.implant = function (modParent, modChild) {
  var strValue = '/*${value}*/';
  var reValue = /\/\*\s*\$\{\s*value\s*}\s*\*\//g;
  var mod = {
    html: (modParent.html || strValue).replace(reValue, modChild.html),
    css: (modParent.css || strValue).replace(reValue, modChild.css),
    js: (modParent.js || strValue).replace(reValue, modChild.js)
  };
  return Mod.parse(mod);
};
Mod.prototype.getHtmlWithComment = function () {
  return this.html;
};
Mod.prototype.getCssWithComment = function () {
  return this.css;
};
Mod.prototype.getJsWithComment = function () {
  return this.js;
};
Mod.prototype.getCodeWithComment = function () {
  return [
    '<style>', this.css, '</style>',
    this.html,
    '<script>', '(function(){', this.js, '})();', '</script>'
  ].join('\n');
};
Mod.prototype.getHtml = function () {
  return this.getHtmlWithComment().replace(Mod.RE_HTML_JS_COMMENT, '');
};
Mod.prototype.getCss = function () {
  return this.getCssWithComment().replace(Mod.RE_CSS_JS_COMMENT, '');
};
Mod.prototype.getJs = function () {
  return this.getJsWithComment().replace(Mod.RE_HTML_JS_COMMENT, '').replace(Mod.RE_CSS_JS_COMMENT, '').replace(Mod.RE_JS_COMMENT, '');
};
Mod.prototype.getCode = function () {
  return this.getCodeWithComment.call({
    html: this.getHtml(),
    css: this.getCss(),
    js: this.getJs()
  }).replace(Mod.RE_BLANK_LINE, '\n');
};

requirejs(['jquery', 'template', 'text!index.json'], function ($, template, APP_CONFIG) {
  try {
    APP_CONFIG = Function('return ' + APP_CONFIG)();
  }
  catch (e) {
    return console.error('配置文件 index.json 出错');
  }

  // 重写定制require方法
  var require = function (deps, callback, errback, optional) {
    var depsNew = [].slice.call(deps);
    var len = depsNew.length;
    var map = {};

    // 筛选出自定义模块，并请求其对应资源
    while (len--) {
      var dep = depsNew[len];
      if (Mod.RE_NAME.test(dep)) {
        var promises = [];
        promises.push(req('text!' + dep + '/index.html'));
        promises.push(req('text!' + dep + '/index.css'));
        promises.push(req('text!' + dep + '/index.js'));
        map[dep] = promises;
        depsNew.splice(len, 1);
      }
    }

    function req(dep) {
      var defer = $.Deferred();
      requirejs([dep], function (text) {
        defer.resolve(text);
      }, function (err) {
        //var re = /mods\/([^/]+)\/index\.([^? ]+)/;
        //var match = re.exec(err);
        //console.error('加载 mods/' + match[1] + '/index.' + match[2] + ' 失败');
        defer.resolve();
      });
      return defer.promise();
    }

    // 最后请求非自定义模块
    return requirejs(depsNew, function () {
      var args = arguments;

      var promisesTemp = [];
      $.each(map, function (dep, promises) {
        var defer = $.Deferred();
        $.when.apply($, promises).then(function () {
          var args = arguments;
          var mod = {
            html: args[0],
            css: args[1],
            js: args[2]
          };
          map[dep] = Mod.parse(mod);
          defer.resolve();
        });
        promisesTemp.push(defer.promise());
      });

      $.when.apply($, promisesTemp).then(function () {
        var argsNew = [];

        $.each(depsNew, function (i, dep) {
          map[dep] = args[i];
        });

        // 按原有依赖顺序构造参数
        $.each(deps, function (i, dep) {
          argsNew[i] = map[dep];
        });

        callback.apply(null, argsNew);
      });
    }, errback, optional);
  };

  var CONTROLS_MAP = {};
  var MOD = null;

  // 装载配置
  loadConfig();

  $.each(APP_CONFIG.controls, function (i, control) {
    CONTROLS_MAP[control.id] = control;
    APP_CONFIG['is' + control.id] = !!control.isChecked;
  });


  var controlsFilter = APP_CONFIG.controls.filter(function (control) {
    return !!control.map;
  });

  var depsFormat = $.map(controlsFilter, function (control) {
    return 'mods/' + control.map;
  });
  require(depsFormat, function () {
    var args = arguments;
    $.each(controlsFilter, function (i, control) {
      CONTROLS_MAP[control.id].instance = args[i];
    });

    // 绑定事件
    $(document)
      .delegate('.mod', {
        'change': function () {
          var mods = [];
          $('.mod').each(function () {
            var $this = $(this);
            if ($this.is(':checked')) {
              mods.push('mods/' + $this.data('map'));
            }
          });
          require(mods, function () {

            var styles = [];
            var elements = [];
            var scripts = [];

            $.each(arguments, function (i, arg) {
              styles.push(arg.css);
              elements.push(arg.html);
              scripts.push(arg.js);
            });

            var mod = {
              html: elements.join('\n'),
              css: styles.join('\n'),
              js: scripts.join('\n')
            };

            MOD = Mod.implant(CONTROLS_MAP['Wrapper'].instance, mod);

            updateCode(APP_CONFIG);

          });
        }
      })
      .delegate('.control', {
        'click': function () {
          var $this = $(this);
          var id = $this.data('id');
          var group = $this.data('group');
          var isChecked = $this.is(':checked');

          // 取消同组的其它勾选项（同组只能同时选中一个）
          if (isChecked && group) {
            var $group = $('[data-group=' + group + ']');
            var $others = $group.not($this);
            $others.each(function (i, other) {
              var $this = $(this);
              var id = $this.data('id');
              $this.prop('checked', false);
              APP_CONFIG['is' + id] = false;
            })
          }

          APP_CONFIG['is' +id] = isChecked;
          updateCode(APP_CONFIG);
        }
      })
    ;


    // 更新代码视图
    function updateCode(config) {

      config = config || APP_CONFIG;

      var mod = MOD = MOD || Mod.implant(CONTROLS_MAP['Wrapper'].instance, new Mod);

      if (config.isACT) mod = Mod.implant(CONTROLS_MAP['ACT'].instance, mod);

      if (config.isB2C) mod = Mod.implant(CONTROLS_MAP['B2C'].instance, mod);

      if (config.isMin) {
        mod = Mod.parse(mod);
        mod.css = mod.getCssWithComment().replace(Mod.RE_CSS_MIN, '$1 $2');
      }

      var code = config.isComment ? mod.getCodeWithComment() : mod.getCode();


      $('.code-preview').html(code);
      $('.code-output').val(code);

    }
  });


  // 加载配置，并更新对应视图
  function loadConfig() {
    $('.controls').html(template('controls_tpl', APP_CONFIG));
    $('.mods').html(template('mods_tpl', APP_CONFIG));
  }

});

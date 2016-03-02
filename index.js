/**
 * Created by wyd on 16/3/1.
 */
requirejs.config({
  baseUrl: './',
  paths: {
    mods: './mods',
    text: './libs/text/text',
    jquery: './libs/jquery/dist/jquery'
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
Mod.implant = function(modParent, modChild){
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

requirejs(['jquery'], function ($) {

  // 重写定制require方法
  var require = function (deps, callback, errback, optional) {
    var depsNew = [].slice.call(deps);
    var len = depsNew.length;
    var map = {};
    while (len--) {
      var dep = depsNew[len];
      var promises = [];
      promises.push(req('text!' + dep + '/index.html'));
      promises.push(req('text!' + dep + '/index.css'));
      promises.push(req('text!' + dep + '/index.js'));
      map[dep] = promises;
      depsNew.splice(len, 1);
    }

    function req(dep) {
      var defer = $.Deferred();
      requirejs([dep], function (text) {
        defer.resolve(text);
      }, function (err) {
        var re = /mods\/([^/]+)\/index\.([^? ]+)/;
        var match = re.exec(err);
        console.error('加载 mods/' + match[1] + '/index.' + match[2] + ' 失败');
        defer.resolve();
      });
      return defer.promise();
    }

    return requirejs(depsNew, function () {
      var args = arguments;
      depsNew.forEach(function (dep, i) {
        map[dep] = args[i];
      });

      var temp = [];
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
        temp.push(defer.promise());
      });

      $.when.apply($, temp).then(function () {
        var argsNew = [];
        deps.forEach(function (dep, i) {
          argsNew[i] = map[dep];
        });
        callback.apply(null, argsNew);
      });
    }, errback, optional);
  };

  require(['mods/base-wrapper', 'mods/base-act', 'mods/base-b2c'], function (baseWrapper, baseACT, baseB2C) {

    var MOD_CONFIG = {
      mod: null,
      isComment: false,
      isMin: true,
      isACT: false,
      isB2C: false
    };

    // 初始化配置
    $('.control').each(function () {
      var $this = $(this);
      var control = $this.data('control');
      $this.prop('checked', MOD_CONFIG['is' + control]);
    });

    // 绑定事件
    $(document)
      .delegate('.mod', {
        'change': function () {
          var mods = [];
          $('.mod').each(function () {
            var $this = $(this);
            if ($this.is(':checked')) {
              mods.push('mods/' + $this.data('mod'));
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

            MOD_CONFIG.mod = Mod.implant(baseWrapper, mod);

            updateCode(MOD_CONFIG);

          }, function (err) {
            var re = /mods\/([^/]+)\/index\.([^? ]+)/;
            var match = re.exec(err);
            console.error('加载 mods/' + match[1] + '/index.' + match[2] + ' 失败');
          });
        }
      })
      .delegate('.control', {
        'click': function () {
          var $this = $(this);
          var control = $this.data('control');
          var group = $this.data('group');
          var isChecked = $this.is(':checked');

          // 取消同组的其它勾选项（同组只能同时选中一个）
          if (isChecked && group) {
            var $group = $('[data-group=' + group + ']');
            var $others = $group.not($this);
            $others.each(function (i, other) {
              var $this = $(this);
              var control = $this.data('control');
              $this.prop('checked', false);
              MOD_CONFIG['is' + control] = false;
            })
          }

          MOD_CONFIG['is' + control] = isChecked;
          updateCode(MOD_CONFIG);
        }
      })
    ;

    // 更新视图
    function updateCode(config) {

      config = config || MOD_CONFIG;

      var mod = config.mod = config.mod || Mod.implant(baseWrapper, new Mod);

      if (config.isACT) mod = Mod.implant(baseACT, mod);

      if (config.isB2C) mod = Mod.implant(baseB2C, mod);

      if (config.isMin) {
        mod = Mod.parse(mod);
        mod.css = mod.getCssWithComment().replace(Mod.RE_CSS_MIN, '$1 $2');
      }

      var code = config.isComment ? mod.getCodeWithComment() : mod.getCode();


      $('.code-preview').html(code);
      $('.code-output').val(code);

    }
  });
});

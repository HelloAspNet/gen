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

requirejs(['jquery', 'template', 'classes/Mod', 'classes/Config', 'classes/Option', 'text!index.json'], function ($, template, Mod, Config, Option, APP_CONFIG) {
  try {
    APP_CONFIG = Function('return ' + APP_CONFIG)();
    APP_CONFIG = Config.parse(APP_CONFIG);
    console.log(APP_CONFIG)
    // 更新配置视图
    $('.controls').html(template('controls_tpl', APP_CONFIG));
    $('.mods').html(template('mods_tpl', APP_CONFIG));
  }
  catch (e) {
    return console.error('加载配置文件 index.json 失败');
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

  // 过滤依赖的模块
  var controlsFilter = APP_CONFIG.controls.filter(function (control) {
    return !!control.map;
  });
  // 转换成【requirejs依赖数组】格式
  var depsFormat = $.map(controlsFilter, function (control) {
    return 'mods/' + control.map;
  });

  require(depsFormat, function () {
    var args = arguments;
    // 保存对应实例到配置上
    $.each(controlsFilter, function (i, control) {
      control.instance = args[i];
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

            APP_CONFIG.MOD = Mod.implant(Option.get('Wrapper').instance, Mod.parse(mod));

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

          APP_CONFIG['is' + id] = isChecked;
          updateCode(APP_CONFIG);
        }
      })
    ;


  });


  // 更新代码视图
  function updateCode(APP_CONFIG) {

    var mod = APP_CONFIG.MOD = APP_CONFIG.MOD || Mod.implant(Option.get('Wrapper').instance, new Mod);

    if (APP_CONFIG.isACT) mod = Mod.implant(Option.get('ACT').instance, mod);

    if (APP_CONFIG.isB2C) mod = Mod.implant(Option.get('B2C').instance, mod);


    if (APP_CONFIG.isFormat) {
      mod = Mod.parse(mod);
      mod.css = mod.getCssWithComment().replace(Mod.RE_CSS_FORMAT, '$1 $2');
    }


    var code = APP_CONFIG.isMin ? mod.getCodeInWrapper() : mod.getCodeWithCommentInWrapper();


    $('.code-preview').html(code);
    $('.code-output').val(code);

  }
});

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

var require = function (deps, callback, errback, optional) {
  var depsNew = [];
  var re = /^mods\/[^/]+$/;
  deps.forEach(function (v) {
    depsNew = depsNew.concat(re.test(v) ? ['text!' + v + '/index.html', 'text!' + v + '/index.css', 'text!' + v + '/index.js'] : [v]);
  });
  return requirejs(depsNew, function () {
    var args = arguments;
    var argsNew = [];
    for (var index = 0, i = 0, len = depsNew.length; i < len; index++, i++) {
      argsNew.push(re.test(deps[index]) ? new Mod(args[i], args[i += 1], args[i += 1]) : args[i]);
    }
    callback.apply(null, argsNew);
  }, errback, optional);
};

function Mod(html, css, js) {
  this.html = html;
  this.css = css;
  this.js = js;
}
Mod.RE_HTML_JS = /<!--[\s\S]*?-->/gm;
Mod.RE_CSS_JS = /\/\*[\s\S]*?\*\//g;
Mod.RE_JS = /\/\/.*/g;
Mod.RE_BLANK_LINE = /[\r\n]+/g;
Mod.require = require;
Mod.parse = function (obj) {
  return new Mod(obj.html, obj.css, obj.js);
};
Mod.prototype.getCodeWithComment = function () {
  return [
    '<style>', this.css, '</style>',
    '<div class="kmods">' , this.html, '</div>',
    '<script>', this.js, '</script>'
  ].join('\n');
};
Mod.prototype.getHtml = function () {
  return this.html.replace(Mod.RE_HTML_JS, '');
};
Mod.prototype.getCss = function () {
  return this.css.replace(Mod.RE_CSS_JS, '');
};
Mod.prototype.getJs = function () {
  return this.js.replace(Mod.RE_HTML_JS, '').replace(Mod.RE_CSS_JS, '').replace(Mod.RE_JS, '');
};
Mod.prototype.getCode = function () {
  return this.getCodeWithComment.call({
    html: this.getHtml(),
    css: this.getCss(),
    js: this.getJs()
  }).replace(Mod.RE_BLANK_LINE, '\n');
};

require(['jquery', 'mods/wrapper'], function ($, Wrapper) {
  //console.log($, nav);
  var reValue = /\/\*\s*\$\{\s*value\s*}\s*\*\//g;

  var MOD_CONFIG = {
    mod: null,
    modWithWrapper: null,
    hasWrapper: false,
    hasComment: false
  };

  $(document)
    .delegate('input[type=checkbox]', {
      'change': function () {
        var mods = [];
        $('[type=checkbox]').each(function () {
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

          var html = elements.join('\n');
          var css = styles.join('\n');
          var js = scripts.join('\n');

          var wHtml = Wrapper.html.replace(reValue, html);
          var wCss = Wrapper.css.replace(reValue, css);
          var wJs = Wrapper.js.replace(reValue, js);

          MOD_CONFIG.mod = new Mod(html, css, js);
          MOD_CONFIG.modWithWrapper = new Mod(wHtml, wCss, wJs);

          updateCode(MOD_CONFIG);

        }, function (err) {
          var re = /mods\/([^/]+)\/index\.([^? ]+)/;
          var match = re.exec(err);
          console.error('加载 mods/' + match[1] + '/index.' + match[2] + ' 失败');
        });
      }
    })
    .delegate('.wrapper-toggle', {
      'click': function () {
        MOD_CONFIG.hasWrapper = $(this).is(':checked');
        updateCode(MOD_CONFIG);
      }
    })
    .delegate('.comment-toggle', {
      'click': function () {
        MOD_CONFIG.hasComment = $(this).is(':checked');
        updateCode(MOD_CONFIG);
      }
    });


  function updateCode(config) {

    config = config || MOD_CONFIG;

    var mod = config.hasWrapper ? config.modWithWrapper : config.mod;

    var code = config.hasComment ? mod.getCodeWithComment() : mod.getCode();

    $('.code-preview').html(code);
    $('.code-output').val(code);

  }

});
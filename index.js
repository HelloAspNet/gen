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

var require = function (deps, callback) {
  var depsNew = [];
  var re = /^mods\/[^/]+$/;
  deps.forEach(function (v) {
    depsNew = depsNew.concat(re.test(v) ? ['text!' + v + '/index.html', 'text!' + v + '/index.css', 'text!' + v + '/index.js'] : [v]);
  });
  return requirejs(depsNew, function () {
    var args = arguments;
    var argsNew = [];
    for (var i = 0, len = depsNew.length; i < len; i++) {
      argsNew.push(re.test(deps[i]) ? new Mod(args[i], args[i += 1], args[i += 1]) : args[i]);
    }
    callback.apply(null, argsNew);
  });
};

function Mod(html, css, js) {
  this.html = html;
  this.css = css;
  this.js = js;
}
Mod.require = require;
Mod.parse = function (obj) {
  return new Mod(obj.html, obj.css, obj.js);
};
Mod.prototype.toHtml = function () {
  return [
    '<style>', this.css, '</style>',
    this.html,
    '<script>', this.js, '</script>'
  ].join('\n');
};

require(['jquery', 'mods/nav'], function ($, nav) {
  console.log($, nav);

  $('.preview').html(nav.toHtml());
  $('.code').val(nav.toHtml());


});
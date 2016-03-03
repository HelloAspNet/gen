define(['classes/Tpl'], function (Tpl) {
  function Mod(html, css, js) {
    this.html = html || '';
    this.css = css || '';
    this.js = js || '';
    this.htmlTpl = Tpl.parse(html);
    this.cssTpl = Tpl.parse(css);
    this.jsTpl = Tpl.parse(js);
  }

  Mod.RE_NAME = /^mods\/[^/]+$/;
  Mod.RE_HTML_JS_COMMENT = /<!--[\s\S]*?-->/gm;
  Mod.RE_CSS_JS_COMMENT = /\/\*[\s\S]*?\*\//gm;
  Mod.RE_JS_COMMENT = /\/\/.*/g;
  Mod.RE_BLANK_LINE = /[\r\n]([\r\n\s]*)?[\r\n]/gm;
  Mod.RE_CSS_FORMAT = /([{;])[\r\n\s]+|[\r\n\s]+([}])/g;
  Mod.parse = function (obj) {
    return new Mod(obj.html, obj.css, obj.js);
  };
  /**
   *  mod植入，把modChild嵌入ModParent里。
   *  返回新的Mod实例
   */
  Mod.implant = function (modParent, modChild) {
    var reValue = /\/\*\s*\$\{\s*\S+\s*}\s*\*\//g;
    var mod = {
      html: getValue('html'),
      css: getValue('css'),
      js: getValue('js')
    };

    function getValue(name) {
      var strRe = '\\/\\*\\s*\\$\\{\\s*' + name + '\\s*}\\s*\\*\\/';
      return (modParent[name] || '/*${' + name + '}*/').replace(new RegExp(strRe, 'g'), modChild[name]);
    }

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
    return [this.css, this.html, this.js].join('\n');
  };
  Mod.prototype.getCodeWithCommentInWrapper = function () {
    var mod = Mod.parse({
      html: this.html,
      css: ['<style>', this.css, '</style>'].join('\n'),
      js: ['<script>', '(function(){', this.js, '})();', '</script>'].join('\n')
    });
    return this.getCodeWithComment.call(mod);
  };
  Mod.prototype.getHtml = function () {
    return this.getHtmlWithComment().replace(Mod.RE_HTML_JS_COMMENT, '');
  };
  Mod.prototype.getCss = function () {
    return this.getCssWithComment().replace(Mod.RE_CSS_JS_COMMENT, '');
  };
  Mod.prototype.getJs = function () {
    return this.getJsWithComment().replace(Mod.RE_HTML_JS_COMMENT, '').replace(Mod.RE_CSS_JS_COMMENT, '');
    //.replace(Mod.RE_JS_COMMENT, ''); // 这个正则还不太严谨 会匹配到【http://xx】这类字符，暂时不用。其实这边的正则都不能用，因为判断不了这些是注释还是字符串。
  };
  Mod.prototype.getCode = function () {
    return this.getCodeWithComment.call({
      html: this.getHtml(),
      css: this.getCss(),
      js: this.getJs()
    }).replace(Mod.RE_BLANK_LINE, '\n');
  };
  Mod.prototype.getCodeInWrapper = function () {
    var mod = Mod.parse({
      html: this.getHtml(),
      css: this.getCss(),
      js: this.getJs()
    });
    return this.getCodeWithCommentInWrapper.call(mod).replace(Mod.RE_BLANK_LINE, '\n');
  };

  return Mod;
});
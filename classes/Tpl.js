/**
 * Created by yidong.wen on 2016/3/3.
 */
define(['template'], function(template){

  template.config('openTag', '/*{{');
  template.config('closeTag', '}}*/');

  var reDeps = /\/\*\s*\$\{\s*@(\S+)\s*}\s*\*\//g;

  function Tpl(value){

    this.value = value || '';

    var deps = [];
    this.value.replace(reDeps, function(a, b){
      deps.push('mods/' + b);
    });
    this.deps = deps;

  }

  Tpl.parse = function(obj){
    return new Tpl(obj);
  };

  Tpl.prototype.render = function(){

  };

  return Tpl;
});


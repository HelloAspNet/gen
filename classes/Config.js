/**
 * Created by yidong.wen on 2016/3/3.
 */
define(['classes/Option'], function(Option){
  function Config(controls, mods){
    this.controls = controls;
    this.mods = mods;
    var maps = this.Maps = {};

    var len, option;
    len = controls.length;
    while(len--){
      option = controls[len] = Option.parse(controls[len]);
      maps[option.id] = option;
      this['is' + option.id] = !!option.isChecked;
    }
    len = mods.length;
    while(len--){
      option = mods[len] = Option.parse(mods[len]);
      maps[option.id] = option;
    }
  }
  Config.parse = function(obj){
    return new Config(obj.controls, obj.mods);
  };
  return Config;
});
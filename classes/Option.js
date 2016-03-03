/**
 * Created by yidong.wen on 2016/3/3.
 */
define([], function () {
  function Option(id, name, map, isChecked, isHidden) {

    if(id in Option.Maps){
      return new Error('Option id 不能重复');
    }

    this.id = id;
    this.name = name;
    this.map = map;
    this.isChecked = isChecked;
    this.isHidden = isHidden;
    Option.Maps[id] = this;
  }

  Option.parse = function (obj) {
    return new Option(obj.id, obj.name, obj.map, obj.isChecked, obj.isHidden);
  };

  Option.Maps = {};

  Option.get = function(id){
    return Option.Maps[id];
  };

  return Option;
});
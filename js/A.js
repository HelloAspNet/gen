define(['jquery', 'template'], function ($, template) {

  var A = {};

  /**
   * 自动渲染template方法
   * @param dataTree  所有数据组成的对象
   * @returns 所有请求完成后的promise对象
   */
  A.renderAll = (function (template) {
    return function (dataTree) {
      var name, el, promises = [];
      for (name in dataTree) {
        if (
          Object.prototype.hasOwnProperty.call(dataTree, name)
          && (el = document.getElementById(name + '_html'))
        ) {
          var data = dataTree[name];
          var callback = (function (el, name) {
            return function (d) {
              el.innerHTML = template(name + '_tpl', d);
            }
          })(el, name);
          promises.push(typeof data !== 'function' ? callback(data) : data(callback));
        }
      }

      return $.when.apply($, promises);
    };
  })(template);

  //// 渲染模版
  //renderAll({
  //  kmod_nav: {
  //    list: new Array(3)
  //  },
  //  // 精选分类
  //  kmod_sel: function (callback) {
  //    return getSelectionList().pipe(callback);
  //  }
  //}).then(function () { });

  return A;
});
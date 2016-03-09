var K_DAP_DATA_DEFAULT;
var DAPCache = {
  expires: '',
  getId: function(){
    return DAP._options.cmsId;
  },
  // 获取默认数据
  getDefaultData: function(){
    return K_DAP_DATA_DEFAULT;
  },
  /**
   * 修复dap数据
   * @param callback
   * @returns {Function}
   */
  fix: function (callback) {
    var _this = this;
    return function (res) {
      _this.setData(res);
      callback(_this.getData());
    };
  },
  /**
   * 缓存dap数据到本地
   * @param data
   */
  setData: function (data) {
    if (this.checkDapData(data)) {
      jQuery.Storage.set('k_dap_' + this.getId(), data, this.expires ? new Date(this.expires) : void 0);
    }
  },
  /**
   * 获取本地dap缓存数据
   * @returns {*|Object|String|Array|Boolean}
   */
  getData: function () {
    var data = jQuery.Storage.get('k_dap_' + this.getId());
    if (!data || (data.requestTime < this.getDefaultData().requestTime)) {
      data = K_DAP_DATA_DEFAULT;
    }
    return data;
  },
  /**
   * 校验Dap数据有效性
   * @param data dap数据
   * @returns {boolean} 数据有效性
   */
  checkData: function (data) {
    if (!data || !data.result || !data.result.floors) return false;

    /**
     * 因为这个data.result.floors有下面几个特征：
     *    不是数组
     *    没有length属性
     *    下标从1开始
     *    是个对象
     *
     * 所以用下面这个方法来确定里面有没有楼层
     *
     */
    if (!('1' in data.result.floors)) return false;

    /**
     * 满足下面任一条件判定为数据缺失:
     *    html楼层且mixedData为空
     *    data楼层且mixedData长度为0
     */
    var floors = data.result.floors;
    var floor;
    for (var k in floors) {
      floor = floors[k];
      if (
        (floor.type === 'html' && floor.mixedData === '')
        || (floor.type === 'data' && floor.mixedData.length === 0)
      ) {
        return false;
      }
    }

    // 满足上面所有条件视为通过验证
    return true;
  }
};


$.ajax(setting)
  .always(DAPCache.fix(function (res) {
    res ? render(res) : _this._error();
  }));

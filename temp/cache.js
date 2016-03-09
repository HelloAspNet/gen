var DapCache = {
  /**
   * 缓存dap数据到本地
   * @param data
   */
  setLocalData: function setLocalData(data) {
    jQuery.Storage.set('k_dap_data', data);
  },

  /**
   * 获取本地dap缓存数据
   * @returns {*|Object|String|Array|Boolean}
   */
  getLocalData: function getLocalData() {
    return jQuery.Storage.get('k_dap_data');
  },
  /**
   * 校验Dap数据有效性
   * @param data dap数据
   * @returns {boolean} 数据有效性
   */
  checkData: function checkData(data) {
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

// 配置【默认数据】
// 当不存在【本地数据】时，把【默认数据】缓存起来作为【本地数据】
var K_DAP_DATA_DEFAULT;
var dataDefault = K_DAP_DATA_DEFAULT;

if (dataDefault && !getLocalDapData()) {
  setLocalDapData(dataDefault);
}

// 获取【本地数据】
var dataLocal = getLocalDapData();

$.ajax(setting)
  // 请求成功时
  // 检验【新数据】有效性，从而选择使用哪个数据
  // 把有效的数据缓存到本地，并用它渲染视图
  .done(function (res) {

    var data = checkDapData(res) ? res : dataLocal;

    setLocalDapData(data);

    render(data);
  })
  // 请求失败时
  // 用【本地数据】渲染视图
  .fail(function () {
    if (dataLocal) {
      render(dataLocal);
    }
    else {
      _this._error();
    }
  });

function cache(name, promise, checkDataHandle){
  if(!promise) return $.when(getLocalDapData(name));
  return promise.pipe(function (res) {

    var data = checkDapData(res) ? res : dataLocal;

    setLocalDapData(data);

    render(data);
  }, function () {
    return dataLocal;
  })
}

/**
 * 缓存dap数据到本地
 * @param data
 */
function setLocalDapData(data) {
  jQuery.Storage.set('k_dap_data', data);
}

/**
 * 获取本地dap缓存数据
 * @returns {*|Object|String|Array|Boolean}
 */
function getLocalDapData() {
  return jQuery.Storage.get('k_dap_data');
}

/**
 * 校验Dap数据有效性
 * @param data dap数据
 * @returns {boolean} 数据有效性
 */
function checkDapData(data) {
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
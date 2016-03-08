/**
 *  增加数据缓存 20160308修改-begin------------------------------------------------------------------
 *
 *  【万一遇上调整楼层顺序时。直接整个废了！！！】
 *
 */
var K_DAP_DATA_DEFAULT = {};
var DAP = DAP || {};
DAP.load = function () {
  var _this = this;

  var setting = {
    'url': 'http://act.vip.com/act/act_dap.php' + location.search,
    'dataType': 'json',
    'data': {
      'cmsId': this._options.cmsId
    }
  };

  if (location.host !== 'act.vip.com') {
    setting['dataType'] = 'jsonp';
    setting['jsonpCallback'] = 'getDap';
    setting['cache'] = true;
  }

  // 配置【默认数据】
  // 当不存在【本地数据】时，把【默认数据】缓存起来作为【本地数据】
  var K_DAP_DATA_DEFAULT;
  var dataDefault = K_DAP_DATA_DEFAULT;

  if(dataDefault){
    dataDefault = checkDapData(dataDefault, getLocalDapData());
    setLocalDapData(dataDefault);
  }

  // 获取【本地数据】
  var dataLocal = getLocalDapData();

  $.ajax(setting)
    // 请求成功时
    // 整合【新数据】和【本地数据】，得到【最终数据】
    // 把【最终数据】缓存到本地，并用它渲染视图
    .done(function (res) {

      var data = checkDapData(res, dataLocal);

      setLocalDapData(data);

      render(data);
    })
    // 请求失败时
    // 用【本地数据】渲染视图
    .fail(function () {
      dataLocal ? render(dataLocal) : _this._error();
    });

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

  // 检查数据有效性
  function checkDapData(dataNew, dataOld) {
    if(!dataOld) return dataNew;
    if (!dataNew || !dataNew.result || !dataNew.result.floors) return dataOld;

    /**
     * 因为这个data.result.floors有下面几个特征：
     *    不是数组
     *    没有length属性
     *    下标从1开始
     *    是个对象
     *
     * 所以用下面这个方法来确定里面有没有楼层
     */
    if (!('1' in dataNew.result.floors)) return dataOld;

    // 判断数据的requestTime，确保dataNew为新数据，dataOld为旧数据
    var temp;
    if(dataNew.requestTime < dataOld.requestTime){
      temp = dataOld;
      dataOld = dataNew;
      dataNew = temp;
    }

    /**
     * 以【默认数据】填充【新数据】的空缺位, 满足下面任一条件即可:
     *    html楼层且mixedData为空
     *    data楼层且mixedData长度为0
     */
    var floorsDefault = dataOld.result.floors;
    var isUseDataOld = false;
    $.each(dataNew.result.floors, function (i, floor) {
      if (
        (floor.type === 'html' && floor.mixedData === '')
        || (floor.type === 'dataNew' && floor.mixedData.length === 0)
      ) {
        floor.mixedData = floorsDefault[i].mixedData;
        isUseDataOld = true;
      }
    });

    if(isUseDataOld) {
      dataNew.requestTime = dataOld.requestTime;
    }
    return dataNew;
  }

  // 渲染视图
  function render(oDapReply) {
    var fModReply, oModified;

    if (oDapReply && oDapReply['code'] == 200) {
      //扩展
      oDapReply = _this._extend(oDapReply);
      //修改
      oDapReply = _this._modify(oDapReply);

      //渲染
      _this.render(oDapReply);
      //回调
      _this._ready(oDapReply);
      //发布
      $.Listeners.pub('dapReady').success();

    } else {
      _this._error();
    }
  }
};
/**
 * end-----------------------------------------------------------------------------------------
 */


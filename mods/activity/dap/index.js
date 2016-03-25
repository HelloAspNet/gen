var DAP = {
  //渲染器
  _renders: [],

  //默认值
  _default: {
    cmsId: '',
    box: '#dap',
    // 是否自动切换默认数据
    autoSwitchData: true,
    /*
     默认的错误提示方法，可通过 DAP 初始化参数的同名属性进行改造
     dap 数据加载出错时，默认的提示方法
     */
    error: function () {

    },

    /*
     默认的修改函数，可通过 DAP 初始化参数的同名属性进行改造
     使得可以在渲染前对响应进行任意修改
     */
    modify: function (oDapReply) {
      return oDapReply;
    },

    render: function (oDapReply) {
      if (!(oDapReply && oDapReply.code === 200)) {
        (this._options.error || this._default.error || $.noop)();
        return;
      }

      //遍历所有楼层, 找到合适的渲染器，从渲染器获取html代码，拼接并写入到dom
      var i, l, oFloor, aFloor, oRender, aHtml, box;
      aHtml = [];
      aFloor = (oDapReply && oDapReply.result.floors) || [];

      for (i = 0 , l = aFloor.length; i < l; i++) {
        oFloor = aFloor[i];
        oRender = this.getRender(oFloor);
        oRender.setFloor(oFloor);
        aHtml.push(oRender.html() || '');
      }

      box = (this._options.box || this._default.box);
      $(box).html(aHtml.join(''));
    }
  },

  //初始化的参数，相关参数如未提供，则使用 _default 中对应的参数
  _options: {},


  /*
   执行模块内部对dap的响应进行的扩展
   */
  _extend: function (oDapReply) {
    var i, l, aFloor, oFloor, oRender, oResult;

    //请求成功
    if (oDapReply && oDapReply['code'] === 200 && (oResult = oDapReply.result)) {

      //其实 floors 既不是数组，也不是类数组(无length属性且下标从1开始)，把它转成真正的数组
      aFloor = oResult.floors || [];
      aFloor = oResult.floors = $.map(oResult.floors, function (floorObject, floorIndex) {
        return floorObject;
      })

      for (i = 0 , l = aFloor.length; i < l; i++) {
        oFloor = aFloor[i];
        oRender = this.getRender(oFloor) || {};

        //楼层的类型(从渲染器的类型获取)
        oFloor.kext_render = oRender.type || oFloor.type;
      }

    }
    return oDapReply;
  },

  /*
   执行模块外部对dap的响应进行的修改
   */
  _modify: function (oDapReply) {
    var fModify, oModified;
    fModify = this._options.modify || this._default.modify || $.noop;
    (fModify instanceof Function) || (fModify = $.noop);
    oModified = fModify.call(this, oDapReply);
    return oModified ? oModified : oDapReply;
  },

  /*
   执行外部模块要求在dap出错时调用的回调函数
   */
  _error: function (oDapReply) {
    var fError = this._options.error || this._default.error || $.noop;
    (fError instanceof Function) || (fError = $.noop);
    return fError.call(this, oDapReply);
  },

  /*
   通知外界一切准备就绪
   */
  _ready: function (oDapReply) {
    var fReady = this._options.ready || this._default.ready || $.noop;
    (fReady instanceof Function) || (fReady = $.noop);
    return fReady.call(this, oDapReply);
  },
  // 自动切换数据源
  _switchData: function (callback) {
    var _this = this;

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
      for(var k in floors){
        floor = floors[k];
        if (
          (floor.type === 'html' && floor.mixedData === '')
          || (floor.type === 'data' && floor.mixedData.length === 0)
        ) {
          return false;
        }
      }

//                // dap接口数据比默认数据旧
//                var defaultData = getDefaultData();
//                if(defaultData && (defaultData.requestTime > data.requestTime)) return false;

      // 满足上面所有条件视为通过验证
      return true;
    }

    function getDefaultData(){
      try { return K_DAP_DATA_DEFAULT; }
      catch(e){ VIPSHOP.log('dap没有配置默认数据'); }
    }

    return function (data) {
      if ((_this._options.autoSwitchData && !checkDapData(data) && getDefaultData()) || K_FORCE_USE_DEFAULT_DATA ) {
        data = getDefaultData();
      }
      return callback(data);
    };
  },
  init: function (options) {
    var _this = this;
    $.extend(this._options, this._default, options);
    this.load();
  },

  load: function () {
    var _this = this;

    var setting = {
      'url': 'http://act.vip.com/act/act_dap.php' + location.search,
      'dataType': 'json',
      'data': {
        'cmsId': this._options.cmsId,
        k_random: Math.floor(+new Date / 6e4)   // 每分钟切换新请求
      }
    };


    if (location.host !== 'act.vip.com') {
      setting['dataType'] = 'jsonp';
      setting['jsonpCallback'] = 'getDap';
      setting['cache'] = true;
    }


    function renderdap(oDapReply) {
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
        $.Listeners.pub('dapReady').success(oDapReply);
      } else {
        _this._error();
      }
    }


    $.ajax(setting).always(_this._switchData(function(res){
      renderdap(res);
    }));




    // $.ajax(setting).done(function (oDapReply) {
    //     var fModReply, oModified;

    //     if (oDapReply && oDapReply['code'] == 200) {
    //         //扩展
    //         oDapReply = _this._extend(oDapReply);
    //         //修改
    //         oDapReply = _this._modify(oDapReply);

    //         //渲染
    //         _this.render(oDapReply);
    //         //回调
    //         _this._ready(oDapReply);
    //         //发布
    //         $.Listeners.pub('dapReady').success();

    //     } else {
    //         _this._error();

    //     }
    // }).fail(function (oDapReply) {
    //     _this._error();

    // });
  },

  //渲染
  render: function (oDapReply) {
    var fRender = this._options.render || this._default.render;
    (fRender instanceof Function) || (fRender = $.noop);
    return fRender.call(this, oDapReply);
  },

  //获取匹配的渲染器
  getRender: function (oFloor) {
    var oRender, i, oCurRender;

    oRender = null;

    //从后向前搜索，先搜到的就是要使用的渲染器
    for (i = this._renders.length - 1; i >= 0; i--) {
      oCurRender = this._renders[i];

      //如果能够用于渲染这个楼层
      if (oCurRender.canRender(oFloor)) {
        oRender = oCurRender;
        break;
      }
    }

    return oRender;
  },

  //新增楼层渲染器
  addRender: function (oRender) {
    this._renders.push(oRender);
  }
};

{{# }}




/*
 功能: 楼层渲染器(Floor Render), 与样式的耦合是很重的, 所有渲染器名称由 FR 打头

 author: zhiyi.yao
 date: 2016-01-09
 FRHtml: 类型为 html 的楼层的默认渲染器
 FRData: 类型为 data 的楼层的默认渲染器
 FRBArr: 类型为 html 的楼层，里面用 kext-barr 标签将json格式的档期字符串({brands: []})包裹， 该数据会被前端解析并转换为html代码
 */
function FRHtml(options) {
  //渲染器的类型
  this.type = 'html';
  this._options = {};
  $.extend(this._options, this._default, options);
}

FRHtml.prototype = {
  constructor: FRHtml,
  _default: {
    tpl: ''
  },
  //能否用于某个楼层的渲染
  canRender: function (oFloor) {
    return oFloor && oFloor.type === 'html';
  },
  setFloor: function (oFloor) {
    this.data = oFloor;
  },
  html: function (oFloor) {
    var render = $.Tpl.compile(this._options.tpl);
    return render(this.data);
  }
};

function FRData(options) {
  //渲染器的类型
  this.type = 'data';
  this._options = {};
  this._visitime = Date.parse(ACT.getVisitTime());
  $.extend(this._options, this._default, options);
  this._aFakeBrands = this.genFakeBrands();
}

FRData.prototype = {
  constructor: FRData,

  _default: {
    tpl: '',
    //隐藏已经下线的档期
    hide_offline_brands: true,
    //隐藏未上线的档期
    hide_noready_brands: false,
    //强制隐藏掉的档期
    hide_these_brands: '',
    //使用url里的actTime参数作为当前时间
    set_now_with_urltime: true,
    //在楼层为空时使用假数据的数量
    num_fake_brands: K_NUM_FAKE_BRANDS,
    //假数据
    fake_brand_obj: {
      'id': '620254',
      'name': '暇步士Hush Puppies童装专场',
      'story_logo': 'http://a.vpimg1.com/upload/brand/201506/2015060816534522943.jpg',
      'logo': 'http://a.vpimg1.com/upload/brand/201506/2015060816534433891.jpg',
      'discount': '<span class="salebg2">2.5</span>折起',
      'redirect': '',
      'slogan': '美式休闲品牌童装',
      'index_img2': 'http://c.vpimg1.com/upcb/2016/01/04/115/58451489.jpg',
      'display_starttime': '1452168000',
      'display_endtime': '1452477540',
      'pre_time': '1452009600',
      'brand_store_sn': '10000773',
      'is_warmup': '1',
      'warmup_time': '1451577600',
      'c3_show_from': '1452168000',
      'c3_show_to': '1452477540',
      'sale_status': '3',
      'active_image_one': '',
      'new_brand_image': 'http://c.vpimg1.com/upcb/2016/01/04/166/58457385.jpg',
      'vendor_sale_message': '',
      'state': 2,
      'bicon': '',
      'AUTOSORT': -99988
    },
    //允许修改楼层
    modifyFloor: null,
    //修改档期列表
    modifyBrands: null,
    canRender: function(oFloor) {
      return oFloor && oFloor.type === 'data';
    }
  },

  //生成假数据
  genFakeBrands: function () {
    var aFake, numFake, oFake;
    aFake = [];
    oFake = this._options.fake_brand_obj;
    numFake = this._options.num_fake_brands;
    if (oFake && numFake > 0) {
      //别用 numFake--
      while (numFake) {
        aFake.push(oFake);
        numFake--;
      }
    }
    return aFake;
  },

  //能否用于某个楼层的渲染
  canRender: function (oFloor) {
    var fCanRender = this._options.canRender || $.noop;
    return fCanRender(oFloor);
  },

  modifyBrand: function (oBrand) {
    var o = oBrand;

    //提取上下线时间(warmup_time 好像没用)
    var salestart, salestop;

    salestart = (parseInt(oBrand.display_starttime) || 0) * 1000; //同 display_starttime
    salestop = (parseInt(oBrand.display_endtime) || 0) * 1000;//同 display_endtime

    o['kext_salestart'] = ACT.getFmtTime('yyyy/MM/dd hh:mm:ss', salestart, true);
    o['kext_salestop'] = ACT.getFmtTime('yyyy/MM/dd hh:mm:ss', salestop, true);


    //判断是否要显示, 是否隐藏未上线档期，是否隐藏已下线档期
    if ( ( this._options.hide_noready_brands && this._visitime < salestart ) ||
      ( this._options.hide_offline_brands && this._visitime >= salestop) ) {
      o['kext_display'] = 'none';
    } else {
      o['kext_display'] = 'block';
    }

    //强制隐藏的档期
    if ( this._options.hide_these_brands.indexOf(oBrand.id.toString()) >= 0) {
      o['kext_display'] = 'none';
    }

    return o;
  },

  //对楼层内的数据进行任意的扩展
  modifyFloor: function (oFloor) {
    var fModifyFloor, fModifyBrand;

    fModifyFloor = typeof this._options.modifyFloor === 'function' ?
      this._options.modifyFloor : $.noop;

    fModifyBrand = typeof this._options.modifyBrand === 'function' ?
      this._options.modifyBrand : $.noop;


    //先让外部模块对楼层进行修改
    fModifyFloor(oFloor);

    //伪造
    if (this._options.num_fake_brands && oFloor.mixedData.length === 0) {
      oFloor.mixedData = this._aFakeBrands;
    }

    //再对楼层进行扩展

    //再对档期数据进行扩展
    var aBrand, oBrand, i, l;

    aBrand = oFloor.mixedData;

    for (i = 0 , l = aBrand.length; i < l; i++) {
      oBrand = aBrand[i];
      //外部模块先修改
      fModifyBrand(oBrand);
      //本模块后修改
      this.modifyBrand(oBrand);
    }
  },

  setFloor: function (oFloor) {
    this.modifyFloor(oFloor);
    this.data = oFloor;
  },

  html: function () {
    var render = $.Tpl.compile(this._options.tpl);
    return render(this.data);
  }
};

function FRBArr(options) {
  FRData.call(this, options);
  this.type = 'barr';
}

FRBArr.prototype = new FRData();

$.extend(FRBArr.prototype, {
  constructor: FRBArr,
  canRender: function (oFloor) {
    return oFloor.type === 'html' && oFloor.mixedData.indexOf('kext-barr') >= 0;
  },
  setFloor: function (oFloor) {
    //解析出json数据
    var oData, sData, start, stop, gtPos, fData;

    start = oFloor.mixedData.indexOf('kext-barr');
    gtPos = oFloor.mixedData.indexOf('>', start);
    stop = oFloor.mixedData.lastIndexOf('kext-barr');

    oFloor.kext_before_blist = oFloor.mixedData.substring(0, start-1);
    sData = oFloor.mixedData.substring(gtPos+1, stop-2) || '{brands: []}';
    oFloor.kext_after_blist = oFloor.mixedData.substring(stop+10);

    fData = new Function('return ' + sData);

    oData = fData() || {brands: []};
    aBrand = oData.brands;

    //过滤出与当前区域匹配的档期
    var i, l, oBrand, aShowBrand, warehosue;
    warehouse = ACT.warehouse.toLowerCase();
    aShowBrand = [];

    for (i = 0 , l = aBrand.length; i < l; i++) {
      oBrand = aBrand[i];
      if ( parseInt(oBrand[warehouse]) === 1 ) {
        aShowBrand.push(oBrand);
      }
    }

    //保存数据
    oFloor.mixedData = aShowBrand;//覆盖!

    this.modifyFloor(oFloor);
    this.data = oFloor;
  }
});

$.Loader.advScript({
  name: 'default_dap_data',
  url: K_DEFAULT_DAP_DATA_PATH
},{
  name: 'xxx',
  def: function() {


    $(function () {


      //模版在路上的时间 kay.liao
      $.Tpl.helper('MonthDayHour',function(timestamp){
        timestamp *= 1000;
        return ACT.getFmtTime('MM月dd日 hh点',timestamp,true);
      });


      //楼层渲染器
      var oFRHtml, oFRData, oFRBarr, oFRYYYY;

      //类行为 html 的楼层的渲染器
      oFRHtml = new FRHtml({
        tpl: $('#basic-floor-tpl').html()
      });

      //类型为 data 的楼层的渲染器
      oFRData = new FRData({
        tpl: $('#basic-floor-tpl').html(),
        //隐藏已经下线的档期
        hide_offline_brands: false,
        //隐藏未上线的档期
        hide_noready_brands: false,
        //强制隐藏掉的档期
        hide_these_brands: K_DEL_BRANDS,
        //使用url里的actTime参数作为当前时间
        set_now_with_urltime: true,
        //在楼层为空时使用假数据的数量
        num_fake_brands: K_NUM_FAKE_BRANDS,

        //允许修改楼层和档期
        modifyFloor: null,
        modifyBrand: function(brand) {
          // brand.state = 3;
          return brand;
        }
      });

      //类型为 html 并且有 kext-barr 标签的楼层的渲染器
      oFRBarr = new FRBArr({
        tpl: $('#brands-floor-tpl').html(),
        //隐藏已经下线的档期
        hide_offline_brands: false,
        //隐藏未上线的档期
        hide_noready_brands: false,
        //强制隐藏掉的档期
        hide_these_brands: K_DEL_BRANDS,
        //使用url里的actTime参数作为当前时间
        set_now_with_urltime: true,
        //在楼层为空时使用假数据的数量
        num_fake_brands: K_NUM_FAKE_BRANDS,
        //允许修改楼层和档期
        modifyFloor: null,
        //把所有档期都设置成预热状态
        modifyBrand: function(brand) {
          return brand;
        }
      });

      //类型为 data 并且名字为 YYYY 的楼层的渲染器
      oFRYYYY = new FRData({
        tpl: $('#basic-floor-tpl').html(),
        //隐藏已经下线的档期
        hide_offline_brands: false,
        //隐藏未上线的档期
        hide_noready_brands: false,
        //强制隐藏掉的档期
        hide_these_brands: K_DEL_BRANDS,
        //使用url里的actTime参数作为当前时间
        set_now_with_urltime: true,
        //在楼层为空时使用假数据的数量
        num_fake_brands: K_NUM_FAKE_BRANDS,

        //只用于名字为 YYYY 的楼层， 可随意定制
        canRender: function(oFloor) {
          return oFloor && oFloor.type === 'data' && oFloor.ext.floor_code === 'YYYY';
        },

        //修改楼层，可随意定制
        modifyFloor: function(oFloor) {
          var aAddBrand, aShowBrand, warehouse;

          warehouse = ACT.warehouse.toLowerCase();
          //雷神工具生成的档期数组
          aAddBrand = [
            {
              "vendor_sale_message": "",
              "new_brand_image": "http://c.vpimg1.com/upcb/2016/01/21/25/22029844.jpg",
              "id": "653344",
              "name": "婴姿坊YINGZIFANG婴童服饰新年钜惠专场",
              "discount": "<span>2</span>折起",
              "display_starttime": "1453809600",
              "display_endtime": "1454119140",
              "state": 1,
              "brand_store_sn": "10020873",
              "slogan": "冬日上新 暖暖哒",
              "vip_nh": "1",
              "vip_sh": "0",
              "vip_cd": "0",
              "vip_bj": "0",
              "vip_hz": "0"
            },
            {
              "vendor_sale_message": "",
              "new_brand_image": "http://d.vpimg1.com/upcb/2016/01/21/98/22219173.jpg",
              "id": "653345",
              "name": "婴姿坊YINGZIFANG婴童服饰新年钜惠专场",
              "discount": "<span>2</span>折起",
              "display_starttime": "1453809600",
              "display_endtime": "1454119140",
              "state": 1,
              "brand_store_sn": "10020873",
              "slogan": "冬日上新 暖暖哒",
              "vip_nh": "0",
              "vip_sh": "1",
              "vip_cd": "0",
              "vip_bj": "0",
              "vip_hz": "0"
            },
            {
              "vendor_sale_message": "",
              "new_brand_image": "http://c.vpimg1.com/upcb/2016/01/21/93/22371662.jpg",
              "id": "653346",
              "name": "婴姿坊YINGZIFANG婴童服饰新年钜惠专场",
              "discount": "<span>2</span>折起",
              "display_starttime": "1453809600",
              "display_endtime": "1454119140",
              "state": 1,
              "brand_store_sn": "10020873",
              "slogan": "冬日上新 暖暖哒",
              "vip_nh": "0",
              "vip_sh": "0",
              "vip_cd": "1",
              "vip_bj": "0",
              "vip_hz": "0"
            },
            {
              "vendor_sale_message": "",
              "new_brand_image": "http://c.vpimg1.com/upcb/2016/01/21/178/22537094.jpg",
              "id": "653347",
              "name": "婴姿坊YINGZIFANG婴童服饰新年钜惠专场",
              "discount": "<span>2</span>折起",
              "display_starttime": "1453809600",
              "display_endtime": "1454119140",
              "state": 1,
              "brand_store_sn": "10020873",
              "slogan": "冬日上新 暖暖哒",
              "vip_nh": "0",
              "vip_sh": "0",
              "vip_cd": "0",
              "vip_bj": "1",
              "vip_hz": "0"
            },
            {
              "vendor_sale_message": "",
              "new_brand_image": "http://d.vpimg1.com/upcb/2016/01/21/37/23102134.jpg",
              "id": "653348",
              "name": "婴姿坊YINGZIFANG婴童服饰新年钜惠专场",
              "discount": "<span>2</span>折起",
              "display_starttime": "1453809600",
              "display_endtime": "1454119140",
              "state": 1,
              "brand_store_sn": "10020873",
              "slogan": "冬日上新 暖暖哒",
              "vip_nh": "0",
              "vip_sh": "0",
              "vip_cd": "0",
              "vip_bj": "0",
              "vip_hz": "1"
            }
          ];
          aShowBrand = [];

          //过滤出当前区域的档期
          $.each(aAddBrand, function(index, oBrand) {
            if ( parseInt(oBrand[warehouse]) === 1 ) {
              aShowBrand.push(oBrand);
            }
          });

          //添加到当前楼层的档期数组前端
          oFloor.mixedData = aShowBrand.concat(oFloor.mixedData);
          return oFloor;
        },

        //修改档期, 可随意定制
        modifyBrand: function(oBrand) {
          if ( oBrand.id === 'MMMMMM' ) {
            oBrand.name = 'UUUUUU';
          }
          return oBrand;
        }
      });

      //指定渲染器
      DAP.addRender(oFRHtml);
      DAP.addRender(oFRData);
      DAP.addRender(oFRBarr);
      // DAP.addRender(oFRYYYY);

      //初始化
      DAP.init({
        cmsId: 20294,
        box: '#dap',

        //允许定制总体渲染方案
        render: function (oDapReply) {
          if (!(oDapReply && oDapReply.code === 200)) {
            (this._options.error || this._default.error || $.noop)();
            return;
          }

          //遍历所有楼层, 找到合适的渲染器，从渲染器获取html代码，拼接并写入到dom
          var i, l, oFloor, aFloor, oRender, aHtml, box;
          aHtml = [];
          aFloor = (oDapReply && oDapReply.result.floors) || [];

          for (i = 0 , l = aFloor.length; i < l; i++) {
            oFloor = aFloor[i];
            oRender = this.getRender(oFloor);
            oRender.setFloor(oFloor);
            aHtml.push(oRender.html() || '');
          }

          box = (this._options.box || this._default.box);
          $(box).html(aHtml.join(''));
        },

        //允许定制错误提示方案
        error: function (oDapReply) {
          $('#J-loading-data-box').hide();
          $('#J_repeat-data-box').show();
          $('#J-refresh-data-btn').one('click', function (event) {
            $('#J-loading-data-box').show();
            $('#J_repeat-data-box').hide();
            DAP.load();
          });
        },

        //允许对响应进行修改
        modify: function (oDapReply) {
          var target, floors, i , l , floor, tgtfloor, aCopyFloor, oIsSub, oIsBrandFloor;
          floors = oDapReply.result.floors || [];
          target = ACT.getUrlPara('floorname');

          oIsSub = {milk: 1, toy: 1, product: 1, child: 1, baby: 1};
          oIsBrandFloor = {discount: 1, milk: 1, toy: 1, product: 1, child: 1, baby: 1, tomorrow: 1};



          // $.each(oDapReply.result.floors, function(i, floor) {
          //     VIPSHOP.log(floor);
          // });


          if ( target && oIsSub[target] ) {
            for ( i = 0 , l = floors.length; i < l; i++ ) {
              floor = floors[i];
              if ( floor.ext.floor_code === target ) {
                //弹出目标楼层
                tgtfloor = floors.splice(i, 1)[0];
                //删除品购楼层并插入目标楼层
                // floors.splice(2, 0 , tgtfloor);
                K_SUBMALL_NAME = target;
                break;
              }
            }


            if ( K_SUBMALL_NAME ) {
              aCopyFloor = [];
              $.each(floors, function(i, floor) {
                fname = floor.ext.floor_code;

                if ( oIsBrandFloor[fname] && fname !== K_SUBMALL_NAME ) {
                  return;
                }

                if ( fname === 'category' ) {
                  aCopyFloor.push(tgtfloor);
                }

                aCopyFloor.push(floor);
              });



              oDapReply.result.floors = floors = aCopyFloor;

            }
          }




          var oNavDesp, oDesp;
          oNavDesp = {
            discount: {title: '298-60'},
            milk: {title: '奶粉尿裤'},
            product: {title: '母婴用品'},
            toy: {title: '玩具文具'},
            child: {title: '童装童鞋'},
            baby: {title: '婴幼服饰'},
            tomorrow: {title: '明天上新'}
          };

          $.each(floors, function(i, floor) {
            if ( oDesp = oNavDesp[floor.ext.floor_code] ) {
              floor.kext_navinfo = oDesp;
            }
          });



          // $.each(floors, function(i, floor) {
          //     if ( floor.type === 'data' ) {
          //         floor.mixedData = [];
          //     }
          // });

          return oDapReply;
        },

        ready: function (res) {




          if ( K_SUBMALL_NAME ) {
            $('#dap').addClass('k-submall k-submall-' + K_SUBMALL_NAME);
          } else {
            $('#dap').addClass('k-mainmall');
          }


          $('#J_slideBanner_wrap').hide();

          $.Loader.advScript({
            name: 'imgLazyload',
            def: function () {
              $('img.lazy').lazyload();
            },
            requires: ['lazyload']
          });

          Favorite.init();    //收藏功能
          PMS.show();
          Coupon.init();

          if ( !K_SUBMALL_NAME ) {
            ACT.navSensor.init({
              //触发周期
              scroll_exec_period: 100,
              resize_exec_period: 100,
              //窗口宽度临界值
              critical_win_width: 1420,
              //各楼层选择器或者jQ对象
              floors: '.floor-navable',
              //获取楼层的名字
              getFloorName: function($floor) {
                return $floor.attr('data-floorid');
              },
              //参考点的y坐标, 默认为视口下边缘的视口坐标，可以传递具体的值
              getPtClientY: function(winheight) {
                return 1;
              }
            });



//                            Snav.init({
//                                container: '#dap',
//                                upperedge: $('#floor-top').height() + $('#vip-common-header').height(),
//                                loweredge: $('#floor-bottom').height(),
//
//                                tpl: $('#J_snav_tpl').html(),
//                                data: {
//                                    floors: res.result.floors,
//                                    classes: '' //给导航加类
//                                },
//                                extFloors: function(floors) {
//                                    return floors;
//                                }
//                            });

//                            Bnav.init({
//                                container: '#dap',
//                                upperedge: $('#floor-top').height() + $('#vip-common-header').height(),
//                                loweredge: $('#floor-bottom').height(),
//
//                                tpl: $('#J_bnav_tpl').html(),
//                                data: {
//                                    floors: res.result.floors,
//                                    classes: '' //给导航加类
//                                },
//                                extFloors: function(floors) {
//                                    var sWidItem, aNavable, oInfo;
//
//                                    oInfo = {
//                                        hash_powder: {t1: '奶粉尿裤'},
//                                        hash_jian: {t1: '婴童服饰'},
//                                        hash_kiduse: {t1: '母婴用品'},
//                                        trip: {t1: '出行用品'},
//                                        toy: {t1: '玩具图书'},
//                                        oversea: {t1: '全球好货'},
//                                        sell: {t1: '童装锯惠'}
//                                    };
//
//                                    //导航项宽度
//                                    aNavable = [];
//                                    $.each(floors, function(index, floor) {
//                                        if ( floor.ext.is_nav ) {
//                                            aNavable.push(floor);
//                                        }
//                                    });
//
//                                    sWidItem = (100 / aNavable.length ).toString().substr(0, 8) + '%';
//                                    $.each(aNavable, function(index, floor) {
//                                        floor.kext_bnav_wid = sWidItem;
//                                        floor.kext_bnav_tips = oInfo[floor.ext.floor_code];
//                                    });
//
//
//
//
//                                    //导航文字
//
//                                    return floors;
//                                }
//                            });
          }

        }
      });


    });
  },
  requires: ['default_dap_data']
});

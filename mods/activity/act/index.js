/*
 功能: 活动的公用代码，通常不需要依赖 DOM 结构
 */
var ACT = {
  warehouse: $.Cookie.get('vip_wh') || 'VIP_NH',
  userClass: $.Cookie.get('user_class') || 'c',
  navSensor: {
    inited: false,
    running: false,

    //默认参数
    _default: {
      //触发周期
      scroll_exec_period: 200,
      resize_exec_period: 100,
      //窗口宽度临界值
      critical_win_width: 1000,
      //各楼层选择器或者jQ对象
      floors: '.floor-navable',
      //获取楼层的名字
      getFloorName: function($floor) {
        return $floor.attr('data-floorid');
      },
      //参考点的y坐标, 默认为视口下边缘的视口坐标，可以传递具体的值
      getPtClientY: function(winheight) {
        return winheight;
      }
    },

    //实际参数
    _options: null,


    binder: {

      on: function($dom, evt, callback, period) {
        var iToutid;

        $dom.on(evt, function(event) {
          if ( iToutid ) {
            return;
          }
          iToutid = setTimeout(function() {
            iToutid = null;
            callback();
          }, period);
        });
      }
    },

    //初始化
    init: function(options) {
      if ( this.inited ) {
        return;
      }
      this.inited = true;
      this._options = $.extend({}, this._default, options);
      this.boot();
    },

    //启动
    boot: function() {
      if ( this.running ) {
        return;
      }

      this.running = true;

      var $win, $doc, $html, $body, $floors,
        oOldWin, oNewWin,//global
        _this, iCritical,
        fScroll, fResize;


      _this = this;
      $win = $(window);
      $doc = $(document);
      $floors = $(this._options.floors);
      oOldWin = {width: $win.width(), height: $win.height()};
      oNewWin = {};

      iCritical = this._options.critical_win_width;

      fScroll = function() {
        var scrolltop, clienty, pagey, i , l , h, $floor, pos;
        scrolltop = $doc.scrollTop();
        clienty = _this._options.getPtClientY(oOldWin.height);
        pagey = scrolltop + clienty;

        //找到当前楼层发布事件
        for ( i = 0 , l = $floors.length; i < l; i++ ) {
          $floor = $floors.eq(i);
          offset = $floor.offset();
          h = $floor.height();
          if ( pagey >= offset.top && pagey <= (offset.top+h) ) {
            $.Listeners.pub('k_floor_change').success({
              newfloor: {name: _this._options.getFloorName($floor)}
            });
            break;
          }
        }
      };

      fResize = function() {
        //存放到外层作用域，有用!
        oNewWin = {
          width: $win.width(),
          height: $win.height()
        };

        //宽度变化，发布事件
        if ( oNewWin.width < iCritical ) {
          $.Listeners.pub('k_win_too_narrow').success({newsize: {width: oNewWin.width}});
        } else {
          $.Listeners.pub('k_win_wid_enough').success({newsize: {width: oNewWin.width}});
        }

        //高度变化，当前楼层可能变化
        if ( oNewWin.height !== oOldWin.height ) {
          fScroll();
        }

        oOldWin = oNewWin;
      };

      this.binder.on($win, 'scroll.sensor', fScroll, this._options.scroll_exec_period);
      this.binder.on($win, 'resize.sensor', fResize, this._options.resize_exec_period);
      $win.trigger('scroll.sensor');
      $win.trigger('resize.sensor');
    },

    //停止
    stop: function() {
      if ( !this.running ) {
        return;
      }
      this.running = false;

      $(window).off('resize.sensor');
      $(document).off('scroll.sensor');
    }
  },

  /*
   功能: 获取当前时间, 当前时间会参考预览参数actTime
   */
  now: function(urlTimePara) {
    var localTime, visitTime;

    //用户指定的预览时间与预览时的本地时间的差
    if ( this._adjustTime == null ) {
      localTime = (new Date()).valueOf();
      visitTime = this.getVisitTime(urlTimePara || 'actTime');
      this._adjustTime = Date.parse(visitTime) - localTime;//ms
    }
    return (new Date()).valueOf() + this._adjustTime;
  },


  /*
   功能: 设置用户本次访问的时间，主要参考url里的actTime，如果没有，则使用当前时间
   */
  setVisitTime: function (urlTimePara) {
    var oTime, sTime, iTime;

    sTime = this.getUrlTime(urlTimePara || 'actTime');
    oTime = sTime ? new Date(sTime) : new Date();
    oTime = oTime || new Date();
    this.visitime = this.getFmtTime('yyyy/MM/dd hh:mm:ss', oTime, true);
  },

  /*
   功能: 获取用户本次访问的时间
   */
  getVisitTime: function (urlTimePara) {
    if (!this.visitime) {
      this.setVisitTime(urlTimePara);
    }
    return this.visitime;
  },


  getFmtTime: function (fmt, time, bCache) {
    var re, oDate, timetype, timestamp, oCache, sFmtTime, oVal;

    //参数修复
    timetype = typeof time;
    if (timetype === 'boolean' || time instanceof Boolean) {
      bCache = time;
      time = undefined;
      timetype = 'undefined';
    }

    //获取时间对象
    if (time instanceof Date) {
      oDate = time;
    } else if (timetype === 'number') {
      oDate = new Date(time);
    } else if (timetype === 'object' && 'valueOf' in time) {
      oDate = new Date(time.valueOf());
    } else {
      oDate = new Date();
    }

    //格式化串
    !fmt && (fmt = '');

    //时间戳
    timestamp = oDate.valueOf();

    //优先从缓存获取
    oCache = this._oFmtTimeCache;
    if (oCache && (sFmtTime = oCache[timestamp + fmt])) {
      return sFmtTime;
    }

    //年月日时分秒 星期日一二三四五六 时间戳
    re = /(y+|M+|d+|h+|m+|s+|S|D|P)/g;

    oVal = {
      'y+': oDate.getFullYear().toString(),
      'M+': (oDate.getMonth() + 1).toString(),
      'd+': oDate.getDate().toString(),
      'h+': oDate.getHours().toString(),
      'm+': oDate.getMinutes().toString(),
      's+': oDate.getSeconds().toString(),
      'S': oDate.getMilliseconds().toString(),
      'D': '日一二三四五六'.charAt(oDate.getDay()),
      'P': timestamp.toString()
    };

    sFmtTime = fmt.replace(re, function (key) {
      var val, iKeyLen, iValLen;
      //毫秒、汉字一到日，时间戳
      if ('SDP'.indexOf(key) >= 0) {
        return oVal[key];
      }

      //年月日时分秒, key[0] ie7 bug
      val = oVal[key.charAt(0) + '+'];
      iKeyLen = key.length;
      iValLen = val.length;

      //年
      if (key.charAt(0) === 'y') {
        return (iKeyLen >= iValLen) ? val : val.substr(iValLen - iKeyLen);
      }
      //月日时分秒
      return (iKeyLen <= iValLen) ? val : (0).toFixed(iKeyLen - iValLen).substr(2) + val;
    });

    //缓存
    if (bCache) {
      oCache || (oCache = this._oFmtTimeCache = {});
      oCache[timestamp + fmt] = sFmtTime;
    }

    return sFmtTime;
  },

  /*
   功能: 获取url中的参数,例如actTime
   author: zhiyi.yao
   date: 2016/01/11
   */
  getUrlPara: (function () {
    var params = {};

    location.search.substring(1).replace(/(?:&)?([^=&]+)=([^&]+)/g, function (a, key, value) {
      return params[key] = decodeURIComponent(value);
    });

    return function(paraname){
      return params[paraname] || '';
    };
  })(),

  /*
   功能: 获取url的actTime参数值(做一点格式转换)
   author: zhiyi.yao
   date: 2016/01/11
   */
  getUrlTime: function (paraname) {
    var urltime = this.getUrlPara(paraname || 'actTime') || '';
    return urltime.replace(/-/g, '/');
  }
};
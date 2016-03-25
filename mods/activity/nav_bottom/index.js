var Bnav = {
  inited: false,
  drawed: false,
  narrow: false,

  _default: {
    //将导航限制在某个容器的上下两边之间
    container: '#dap',
    upperedge: 0,
    loweredge: 0,
    tpl: '',
    aniTime: 200,
    period: 200,
    data: {floors: [], classes: ''},

    getFloor: function(floorname) {
      return $('#floor-' + floorname);
    },

    getNav: function() {
      return $('#J_bnav');
    },

    //对楼层进行扩展，扩展之后的属性可以被导航模板使用
    extFloors: function(floors) {
      return floors;
    },

    //导航是否能看到, this 指向 Bnav
    visible: function($nav) {
      return $nav.is(':visible');
    },

    //导航是否要显示, this 指向 Bnav
    canShow: function(oWin, oBox, oNav) {
      return this.narrow
        && oWin.scrollTop >= (this._options.upperedge);
    },

    //导航定位到某处, this 指向 Bnav
    locate: function(oWin, oBox, oNav) {
    },

    //显示隐藏导航，可以通过样式或类达到效果，此处定制可选择不同方式、甚至采用动画
    show: function($nav) {
      $nav.show();
    },
    hide: function($nav) {
      $nav.hide();
    }
  },
  _options: {},

  /*
   事件绑定(回调频率可控)
   在本模块内被用于绑定scroll事件, 特点是，回调函数触发频率可控
   */
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


  init: function(options) {
    if ( this.inited ) {
      return;
    }
    this.inited = true;
    $.extend(this._options, this._default, options);
    var _this, aFloor;
    _this = this;
    aFloor = this._options.data.floors || [];
    this._options.data.floors = this._options.extFloors(aFloor);
    this.draw();
    this.bind();
  },

  draw: function() {
    //首次绘制
    if ( !this.drawed && (this.drawed = true) ) {
      var fHtml = $.Tpl.compile(this._options.tpl);
      $(this._options.container).append(fHtml(this._options.data));
    }

    //显示隐藏定位
    var $box, $nav, $win, oBox, oNav, oWin, visible, stp;

    $box = $(this._options.container);
    $nav = this._options.getNav();
    $win = $(window);

    oWin = {width: $win.width(), height: $win.height(), scrollTop: $win.scrollTop(), jqo: $win};
    oBox = $.extend($box.offset(), {jqo: $box, width: $box.width(), height: $box.height()});
    oNav = $.extend($nav.offset(), {jqo: $nav, width: $nav.width(), height: $nav.height()});
    visible = this._options.visible.call(this, $nav);

    //显示隐藏
    if ( this._options.canShow.call(this, oWin, oBox, oNav) ) {
      if ( !visible ) {
        this._options.show($nav);
        visible = true;
      }
    } else {
      if ( visible ) {
        this._options.hide($nav);
        visible = false;
      }
    }

    //可见才定位
    if ( visible ) {
      this._options.locate.call(this, oWin, oBox, oNav);
    }
  },

  bind: function() {
    var _this = this, $doc, $nav, $win;

    $.Listeners.sub('k_floor_change').onsuccess(function(data) {
      _this.mark(data.newfloor.name);
    });

    $.Listeners.sub('k_win_too_narrow').onsuccess(function(data){
      _this.narrow = true;
      _this.show();
    });

    $.Listeners.sub('k_win_wid_enough').onsuccess(function(data) {
      _this.narrow = false;
      _this.hide();
    });


    $doc = $(document);
    $nav = this._options.getNav();
    $win = $(window);

    $nav.on('click.bnav.item', '.k-bnav-item', function(event) {
      var $item, floorname;
      $item = $(this);
      floorname = $item.attr('data-floorname');
      if ( floorname && !$item.hasClass('cur') ) {
        _this.jump(floorname);
      }
    });

    this.binder.on($win, 'scroll.bnav', function(event) {
      if ( !_this.narrow ) {
        return;
      }
      _this.draw();
    }, this._options.period);


    $('.J_bnav_back_top').on('click.bnav.backtop', function(event) {
      $('html,body').animate({scrollTop: 0}, _this._options.aniTime);
    });
  },

  show: function() {
    this._options.show(this._options.getNav());
    this.draw();
  },
  hide: function() {
    this._options.hide(this._options.getNav());
  },

  //标记某个楼层为当前楼层
  mark: function(floorname) {
    var $item = $('#J_bnav_item_' + floorname);
    if ( $item[0] ) {
      $('.k-bnav-item').removeClass('cur');
      $item.addClass('cur');
    }
  },

  //跳转到某个楼层
  jump: function(floorname) {
    var $floor;

    $floor = this._options.getFloor(floorname);

    //有效性
    if ( !($floor && $floor[0]) ) {
      return;
    }

    //定制的跳转
    if ( $.isFunction(this._options.jump) ) {
      this._options.jump($floor);
      return;
    }

    $('html,body').animate({scrollTop: $floor.offset().top}, this._options.aniTime);
  }
};
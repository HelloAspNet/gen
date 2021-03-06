//红包
var Coupon = {
  utype: VIPSHOP.UINFO.isNewUser() ? 1 : 2,
  init: function () {
    var self = this;
    var items = this.items = $('.b226');

    this.bids = items.map(function () {
      return this.getAttribute('data-bid');
    }).toArray().toString();

    self.get(); //获取档期红包

    //显示用户已领取红包的档期
    if ($.Cookie.get('VipLID')) {
      self.show();
    }
    $.Listeners.sub('userLogin').onsuccess(function () {
      self.show();
    });

    //领取红包
    items.on('click', '.hb-btn', function (e) {
      var item = $(e.delegateTarget),
        btn = $(this);
      if (item.hasClass('hb-done')) {
        return;
      }
      if ($.Cookie.get('VipLID')) {
        self.add(item);
      } else {
        VIPSHOP.login.init({
          loginEvent: function () {
            VIPSHOP.member.chk();//登录成功后回调
            $.listeners.pub('userLogin').success();
            btn.trigger('click');
          }
        });
      }
    });
  },
  get: function () {
    var self = this;

    // 红包数超过200个时拆分红包请求
    var bids = self.bids;
    var bidList = bids.split(/,/);
    var arr = [];
    while(bidList.length){
      arr.push(bidList.splice(0, 200));
    }
    $.each(arr, function(i, bList){
      $.ajax({
        url: 'http://act.vip.com/act/index_ajax.php',
        dataType: 'jsonp',
        data: {
          service: 'NewCoupon.getAllBatch',
          bids: bList.join(','),
          mars_cid: $.Cookie.get('mars_cid')
          //utype: self.utype
        }
      }).done(function (re) {
        if (re.status == 1) {
          $.each(re.data, function (id, value) {
            $.each(value, function (cid, val) {
              if (val.left) {
                var item = $('#J_id_' + id);
                var mask = item.find('.b226-mask');
                item.addClass('hb').data('cid', cid).addClass('J_cid_' + cid);
                item.find('img').after('<span class="hb-icon">￥' + val.fav + '</span>');
                if (mask.length) {
                  mask.append('<dl class="hb-tips"><dt>商品正在路上</dt><dd>领好红包等开抢</dd></dl><div class="hb-btn">' + val.fav + '元红包</div>');
                }
              }
              return false;
            });
          });
        }
      });
    })

  },
  show: function () {
    var self = this;
    $.ajax({
      url: 'http://act.vip.com/act/index_ajax.php',
      dataType: 'jsonp',
      data: {
        service: 'Coupon.getUserCoupon',
        bids: self.bids,
        utype: self.utype
      }
    }).done(function (re) {
      if (re.status == 1 && re.data) {
        var data = re.data.split(',');
        $.each(data, function (i, cid) {
          var elem = $('.J_cid_' + cid);
          elem.addClass('hb-done');
        });
      }
    })
  },
  add: function (item) {
    var bid = item.data('bid'),
      cid = item.data('cid');
    $.ajax({
      url: 'http://act.vip.com/act/index_ajax.php',
      dataType: 'jsonp',
      data: {
        service: 'Coupon.couponBind',
        bid: bid,
        cid: cid,
        utype: 1
      }
    }).done(function (re) {
      if (re.status == 1) {
        item.addClass('hb-done');
      } else {
        alert(re['errorMessage']);
      }
    })
  }
};


Coupon.init();
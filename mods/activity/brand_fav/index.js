//收藏
var Favorite = {
  init: function () {
    var items = this.items = $('.b226'),
      self = this;

    self.get();

    if ($.Cookie.get('VipLID')) {
      self.show();
    }
    $.Listeners.sub('userLogin').onsuccess(function () {
      self.show();
    });
    items.filter('.fav').on('click', '.b226-btn', function (e) {
      var wrap = $(e.delegateTarget),
        sn = wrap.data('sn');
      if (wrap.hasClass('fav-done')) {
        return;
      }
      if ($.Cookie.get('VipLID')) {
        self.add(sn);
      } else {
        VIPSHOP.login.init({
          loginEvent: function () {
            VIPSHOP.member.chk();
            $.listeners.pub('userLogin').success();
            self.add(sn);
          }
        });
      }
    });
  },
  show: function () {
    var items = this.items;
    if (!items.length) {
      return;
    }
    $.ajax({
      // url: 'http://fav.myopen.vip.com/brand/index',
      url: 'http://fav.vip.com/api/fav/brand/sn/list',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        business: 'BABY'
      }
    }).done(function (re) {
      if ( re.data.length == 0 ) {
        return;
      }
      $.each(re.data, function (i, sn) {
        var item = items.filter('.J_sn_' + sn);
        if (item.length) {
          item.addClass('fav-done').find('.fav-txt').html('已订阅提醒');
        }
      });
    })
  },
  add: function (sn) {
    var items = this.items;
    $.ajax({
      // url: 'http://fav.myopen.vip.com/brand/add',
      url: 'http://fav.vip.com/api/fav/brand/add',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        brand_sn: sn,
        business: 'BABY',
        source: 'PC'
      }
    }).done(function (re) {
      if ( re.code === 200 && re.data === 1 ) {
        var item = items.filter('.J_sn_' + sn);
        item.addClass('fav-done').find('.fav-txt').html('已订阅提醒');
      }
    });
  },
  get : function () {
    var aSNum, aBatch, groupsize, sns, req;

    req = function(sns) {

      $.ajax({
        // url: 'http://fav.myopen.vip.com/brand/fav_count',
        url: 'http://fav.vip.com/api/stats/brand/sn/count',
        type: 'GET',
        dataType: 'jsonp',
        data: {
          // brand_sn: sns,
          brand_sn_list: sns,
          business: 'BABY'
          // source_id: 1
        }
      })
        .done(function(re) {
          if ( re.code == 200 ) {
            for (key in re.data ){
              $('[data-sn="'+ key+'"]').find('.b226-nfav').html(re.data[key]+'人收藏');
            }
          }
        })
    };

    groupsize = 100;
    sns = '';

    aSNum = $.map(this.items, function(brand, index) {
      return $(brand).attr('data-sn');
    });


    while( (aBatch = aSNum.splice(0, groupsize)).length ) {
      sns = aBatch.join(',');
      req(sns);
    }

  }
};

Favorite.init();
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
      url: 'http://fav.myopen.vip.com/brand/index',
      type: 'GET',
      dataType: 'jsonp'
    }).done(function (re) {
      if (re.error || re.data.length == 0) {
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
      url: 'http://fav.myopen.vip.com/brand/add',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        brand_id: sn,
        source_id: 1
      }
    }).done(function (re) {
      if (re.error == false || re.errorCode == 6) {
        var item = items.filter('.J_sn_' + sn);
        item.addClass('fav-done').find('.fav-txt').html('已订阅提醒');
      }
    });
  },
  get: function () {
    var sns = '';
    $.each(this.items, function (index, domBrand) {
      sns += ',' + $(domBrand).attr('data-sn');
    });

    $.ajax({
      url: 'http://fav.myopen.vip.com/brand/fav_count',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        brand_sn: sns,
        source_id: 1
      }
    })
      .done(function (re) {
        if (re.code == 0) {
          for (key in re.data) {
            $('[data-sn="' + key + '"]').find('.b226-nfav').html(re.data[key] + '人收藏');
          }
        }
      })

  }
};

Favorite.init();
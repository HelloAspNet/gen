var PMS = {
  show: function () {
    $.ajax({
      url: 'http://pms.vipshop.com/activetips_index.php',
      dataType: 'jsonp',
      jsonpCallback: 'getAllPms',
      cache: true,
      data: {
        warehouse: $.Cookie.get('vip_wh') || 'VIP_NH',
        customersrc: $.Cookie.get('user_class') || 'a'
      }
    }).done(function (re) {
      $('.b226').each(function () {
        var $this = $(this),
          bid = $this.data('bid'),
          pms = re[bid];
        if (pms) {
          $this.find('.b226-photo').append('<div class="b226-pms">' + pms['msg'] + '</div>');
        }
      });
    });
  }
};

PMS.show();
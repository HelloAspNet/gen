addBrandLinks();
// 添加专场链接
function addBrandLinks() {

  var wh = $.Cookie.get('vip_wh') || 'VIP_NH';
  var whs = wh.toLocaleUpperCase();

  var blinksData = {
    "VIP_NH": ["667583", "667588", "667593"],
    "VIP_SH": ["667584", "667589", "667594"],
    "VIP_CD": ["667585", "667590", "667595"],
    "VIP_BJ": ["667586", "667591", "667596"],
    "VIP_HZ": ["667587", "667592", "667597"]
  };
  var blinks = blinksData[whs];

  // 顺序打乱时这样添加
  $('.kmod-body .kmod-blink').attr({target: '_blank'});
  $('.kmod-body .kmod-blink1').attr({href: 'http://list.vip.com/' + blinks[0] + '.html'});
  $('.kmod-body .kmod-blink2').attr({href: 'http://list.vip.com/' + blinks[1] + '.html'});
  $('.kmod-body .kmod-blink3').attr({href: 'http://list.vip.com/' + blinks[2] + '.html'});

}
addBrandLinks();
// 添加专场链接
function addBrandLinks() {

  var wh = $.Cookie.get('vip_wh') || 'VIP_NH';
  var whs = wh.toLocaleUpperCase();

  var blinksData = {{# MOD_CONFIG.DATA.Brand }};
  var blinks = blinksData[whs];

  // 顺序打乱时这样添加
  $('.kmod-body .kmod-blink').attr({target: '_blank'});
  {{each MOD_CONFIG.BRAND_LIST as brand}}
  $('.kmod-body .kmod-blink-{{ brand.id }}').attr({href: 'http://list.vip.com/' + blinks[{{ $index }}] + '.html'});
  {{/each}}
}

addProductLinks();
// 添加商品链接
function addProductLinks() {

  var wh = $.Cookie.get('vip_wh') || 'VIP_NH';
  var whs = wh.toLocaleUpperCase();
  var plinksData = {{# MOD_CONFIG.DATA.Product }};
  var plinks = plinksData[whs];
  $('.kmod-body .kmod-plink').each(function (i) {
    $(this).attr({
      target: '_blank',
      href: 'http://www.vip.com/detail-' + plinks[i] + '.html'
    });
  });

}
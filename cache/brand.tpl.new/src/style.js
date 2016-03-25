'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStyle;
function getStyle() {

  var tpl = '\n\n@import "../../node_modules/less-plugin-est/src/all";\n@IMAGE_URL: \'images/\';\n//@IMAGE_URL: \'http://a.vpimg3.com/upload/actpics/uidesign/2016/2m/0218haohaizi/\';\n@WARM_NAME: \'warm\';\n@SALE_NAME: \'sale\';\n@nav-z-index: 20;\n\n.kstate-debug {\n  a {\n    background-color: rgba(0, 0, 0, .3);\n    &.kstate-hover, &:hover{ background-color: rgba(0, 0, 0, .4); }\n  }\n}\n/* 状态-begin */\n.kstate-hover{ }\n.kstate-fixed{ position: fixed; }\n/* 状态-end */\n\n.kmods { overflow: hidden; background: #efefef; }\n.kmod { background: no-repeat center top; }\n.kmod-bd { .clearfix(); position: relative; width: 1000px; margin: 0 auto; }\n.kmod-link, .kmod-plink, .kmod-blink { float: left; }\n.kmod-hash { }\n.kmod-target { display: block; position: relative; visibility: hidden; }\n\n\n.kmod-header { height: 500px;}\n.kmod-logo{ width: 115px; height: 115px; }\n.kmod-body { }\n.kmod-footer {height: 250px; margin: 80px 0 40px;\n  .kmod-btn { float: left; width: 311px; height: 57px; margin: 190px 0 0 334px; }\n}\n\n\n{{if navigators}}\n/* 导航-begin */\n.kmod-nav-wrap{ height: 0; }\n.kmod-nav{\n  position: relative;\n  top: 0;\n  width: 100%;\n  //height: @nav-height;\n  margin: 0 auto;\n  background: #ccc;\n  //.opacity(0);\n  z-index: @nav-z-index;\n  &.kstate-fixed{\n    position: fixed;\n  }\n}\n{{each navigators}}\n.kmod-nav{{$index | kToIndex}}{\n  width: 120px; height: 550px; margin-left: {{ $value === \'right\' ? \'1040px\' : \'-140px\' }}; padding-top: 80px; background: url(\'@{IMAGE_URL}nav-a.png\') no-repeat center 80px;\n.kmod-nav-hd{ height: 170px; }\n.kmod-nav-bd{ margin: 0px; }\n.kmod-nav-ft{ height: 40px; .kmod-hash{ height: 35px; } }\n.kmod-hash{ display: block; width: 100%; height: 115px; }\n//{{each brands as $v $i}}.kmod-hash{{$i | kToIndex}}{ display: block; width: 100%; height: 60px; }{{/each}}\n}\n{{/each}}\n{{if coupons}}\n.kmod-nav-coupon { position: relative; height: 173px; }\n.kmod-nav-coupon-btn {\n  position: absolute; top: 143px; left: 7px; width: 106px; height: 25px;\n  //background: url("@{IMAGE_URL}nav-coupon-btn-a.png") no-repeat;\n}\n{{/if}}\n/* 导航-end */\n{{/if}}\n\n\n/* 品购模块-begin */\n{{each modules}}\n.kmod{{$index | kToIndex}} {\n  height: 400px;\n  {{if products}}\n  .kmod-plink{ {{if layout === \'float\'}}width: 100% / {{products.length}};height: 200px;{{/if}} }\n  {{if layout === \'position\'}}{{each products as $v $i}}.kmod-plink{{$i | kToIndex}}{width: {{(bodyWidth ? bodyWidth / products.length : \'200\') | kToInt}}px;height: 200px; margin-top: 0px; margin-left: 0px;}{{/each}}{{/if}}\n  {{/if}}\n}\n{{/each}}\n/* 品购模块-end */\n\n\n{{if coupons}}\n\n.kmod-coupon { position: relative; width: 482px; height: 144px; background: url("@{IMAGE_URL}coupon-a.png") no-repeat center; }\n.kmod-coupon-btn {\n  position: absolute; width: 163px; display: block; height: 47px; top: 39px; left: 231px;\n  //background: url("@{IMAGE_URL}coupon-btn-a.png") no-repeat;\n}\n\n/* 红包状态-begin */\n.kstate-coupon-get{\n  .kmod-coupon{ background-image: url("@{IMAGE_URL}coupon-b.png"); }\n  {{if navigators}}.kmod-nav1{ background-image: url("@{IMAGE_URL}nav-b.png"); }{{/if}}\n}\n\n.kstate-coupon-success{\n  .kmod-coupon{ background-image: url("@{IMAGE_URL}coupon-c.png"); }\n  {{if navigators}}.kmod-nav1{ background-image: url("@{IMAGE_URL}nav-c.png"); }{{/if}}\n}\n/* 红包状态-end */\n{{/if}}\n\n\n\n.kstate-warm{\n  .kmod-header{ background: url(\'@{IMAGE_URL}@{WARM_NAME}-header.jpg\') no-repeat center 0; }\n  .kmod-logo{ background: url(\'@{IMAGE_URL}@{WARM_NAME}-logo.png\') no-repeat center 0; }\n  .kmod-body { background: url(\'@{IMAGE_URL}@{WARM_NAME}-body.jpg\') repeat; }\n  .kmod-footer { background: url(\'@{IMAGE_URL}@{WARM_NAME}-footer.png\') no-repeat center 0; }\n  {{each modules}}\n  .kmod{{$index | kToIndex}} { background-image: url("@{IMAGE_URL}@{WARM_NAME}-{{$index | kToIndex : \'00\'}}{{imageSuffix}}"); }{{/each}}\n}\n.kstate-sale{\n  .kmod-header{ background: url(\'@{IMAGE_URL}@{SALE_NAME}-header.jpg\') no-repeat center 0; }\n  .kmod-logo{ background: url(\'@{IMAGE_URL}@{SALE_NAME}-logo.png\') no-repeat center 0; }\n  .kmod-body { background: url(\'@{IMAGE_URL}@{SALE_NAME}-body.jpg\') repeat; }\n  .kmod-footer { background: url(\'@{IMAGE_URL}@{SALE_NAME}-footer.png\') no-repeat center 0; }\n  {{each modules}}\n  .kmod{{$index | kToIndex}} { background-image: url("@{IMAGE_URL}@{SALE_NAME}-{{$index | kToIndex : \'00\'}}{{imageSuffix}}"); }{{/each}}\n}\n\n\n\n\n\n/*  半品购调整-begin */\n.warmup_bg .pro_bread{display: none;}\n.warmup_bg, .list-define-w{overflow: hidden;position: relative;}\n.warmup_bg .kmods{margin: 0 -460px;}\n.list-define-w .kmods{margin: -380px -460px 0;}\n/*  半品购调整-end */\n\n\n  ';
}

function getModStyle(list) {

  function format(i, fmt) {
    //i += 1;
    if (!fmt) return i;

    var len = ('' + fmt).length;
    i = 0..toFixed(len) + i;
    i = i.substring(i.length - len);
    return i;
  }

  return list.map(function (v, i) {
    var tpl = '\n.kmod' + i + '{ height: ' + v.h + '; }\n.kstate-warm .kmod' + i + '{ background-image: url("@{IMAGE_URL}@{WARM_NAME}-' + format(i, '00') + '.jpg"); }\n.kstate-sale .kmod' + i + '{ background-image: url("@{IMAGE_URL}@{SALE_NAME}-' + format(i, '00') + '.jpg"); }\n  ';
    return tpl;
  }).join('\n');
}

var list = ['img1', 'img2'];
console.log(getModStyle(list));

//# sourceMappingURL=style.js.map
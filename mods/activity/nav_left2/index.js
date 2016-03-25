// 导航
function addNavigators(res) {

  var map = {
    category: {name: '热门分类', slogon: '大牌快速挑' },
    age: {name: '童龄闪购', slogon: '适龄尖货极速抢'},
    discount1: {name: '满198减50', slogon: '跨品牌|上不封顶'},
    discount2: {name: '满298减100', slogon: '跨品牌|再用红包'},
    discount3: {name: '全场0.8折起', slogon: '跨品牌|再用红包'}
  };

  var data = {
    anchors: [],
    branches: [
      {name: '潮童服饰', link: 'http://act.vip.com/20296.html?branch=cloth', floor_code: 'cloth'},
      {name: '婴幼服饰', link: 'http://act.vip.com/20296.html?branch=baby', floor_code: 'baby'},
      {name: '奶粉尿裤', link: 'http://act.vip.com/20296.html?branch=milk', floor_code: 'milk'},
      {name: '时尚童鞋', link: 'http://act.vip.com/20296.html?branch=shoe', floor_code: 'shoe'},
      {name: '宝宝用品', link: 'http://act.vip.com/20296.html?branch=product', floor_code: 'product'},
      {name: '妈咪专区', link: 'http://act.vip.com/20296.html?branch=mom', floor_code: 'mom'},
      {name: '玩具文具', link: 'http://act.vip.com/20296.html?branch=toy', floor_code: 'toy'},
      {name: '推车座椅', link: 'http://act.vip.com/20296.html?branch=car', floor_code: 'car'}
    ]
  };

  var navTarget = [];

  $.each(res.result.floors, function(i, floor){
    var anchor = map[floor.ext.floor_code];
    if(anchor){
      anchor.floor = floor;
      data.anchors.push(anchor);
      navTarget.push($('#floor-' + floor.ext.floor_code));
    }
  });

  var template = $.Tpl;

  var html = template('kmod_nav_left_tpl', data);
  var htmlBottom = template('kmod_nav_bottom_tpl', data);
  var $html = $(html);
  $('#floor-top').after($html);
  $('body').append(htmlBottom);
  var $nav = $html.find('.kmod-nav');
  var beginOffset = $html.offset();
  var $parent = $html.parent();
  var navHeight = $nav.outerHeight();
  var endOffset = {top: $parent.offset().top + $parent.outerHeight() - $('.floor-bottom').outerHeight(), left: 0};
  $parent.append($html);

  $nav.css({top: beginOffset.top});


  var $doc = $(document);



  var $navTarget = $(navTarget);

  var $navTargetNew = $navTarget.map(function (i, $obj) {
    var $this = $obj;
    return {
      top: $this.offset().top,
      $el: $this,
      $ctrl: $('[data-id=' + $this.attr('id') + ']')
    };
  });

  $navTargetNew.sort(function (a, b) {
    return a.top - b.top;
  });


  var $navBottom = $('.kmod-nav-bottom-wrap');

  $.Listeners.sub('winScroll').onsuccess(fixed);

  function fixed(){
    var scrollTop = $doc.scrollTop();

    // 控制导航focus效果
    var len = $navTargetNew.length;
    var index = 0;
    do {
      len -= 1;
      index = len;
    }
    while (index >= 0 && scrollTop < $navTargetNew[index].top);

    $navTargetNew.each(function (i, v) {
      v.$ctrl && v.$ctrl.removeClass('kstate-hover');
    });
    index >= 0 && $navTargetNew[index].$ctrl.addClass('kstate-hover');

    // 控制导航focus时底边线左右滑动
    var lastIndex = $nav.data('index');
    $nav.addClass('kstate-hover' + (index + 1));
    if (!isNaN(lastIndex) && index !== lastIndex) {
      $nav.removeClass('kstate-hover' + (lastIndex + 1));
    }
    $nav.data('index', index);

    var endTop = endOffset.top - navHeight - scrollTop;

    if(endTop < 0) return $nav.css({ top: endTop });
    if(scrollTop > beginOffset.top){
      // 控制导航悬浮
      $nav.addClass('kstate-fixed');
      $navBottom.addClass('kstate-fixed');
      $nav.css({top: 0});
    }
    else {
      // 控制导航悬浮
      $nav.removeClass('kstate-fixed');
      $navBottom.removeClass('kstate-fixed');
      $nav.css({top: beginOffset.top});
    }


  }

  $(window).on({
    'resize.navResize': function(){
      if($(window).width() < 1350){
        $('.kmod-nav-left').css({visibility: 'hidden'});
        $('.kmod-nav-bottom').show();
      }
      else{
        $('.kmod-nav-bottom').hide();
        $('.kmod-nav-left').css({visibility: 'visible'});
      }

    }
  }).trigger('resize.navResize');
}
addNavigators();
// 导航2
function addNavigators() {

  var $nav = $('.kmod-nav');
  var offset = $nav.offset();

  var $win = $(window);
  var $doc = $(document);

  var $navTarget = $('.kmod-target');

  var $navTargetNew = $navTarget.map(function () {
    var $this = $(this);
    return {
      top: $this.offset().top,
      $el: $this,
      $ctrl: $('[data-id=' + $this.attr('id') + ']')
    };
  });

  $navTargetNew.sort(function (a, b) {
    return a.top - b.top;
  });
  $win.on({
    'scroll.kmodNav': function () {
      var scrollTop = $doc.scrollTop();

      // 控制导航悬浮
      $nav[scrollTop > offset.top ? 'addClass' : 'removeClass']('kstate-fixed');

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

    }
  });

  //$doc.delegate('.kmod-nav a', {
  //  'click.kmodNav': function () {
  //
  //    //$('html, body').scrollTop(200);
  //  }
  //});

}
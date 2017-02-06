$(function() {
    function resize() {
        var isSmallScreen = $(window).width() < 768;
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            isSmallScreen ? $(this).html('<img src="' + $(this).data('image-sm') + '" alt="" />') : $(this).empty().css('backgroundImage', 'url("' + $(this).data('image-lg') + '")');
        });
    }
    $(window).on('resize', resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    // 控制产品推荐模块
    var width = 30;
    var $ulNav_tabs = $('#products > .container > .touch-scroll > .nav-tabs');
    $ulNav_tabs.children().each(function(i, e) {
        width += e.clientWidth;
    });
    if (width > $(window).width()) {
        $ulNav_tabs.css('width', width).parent().addClass('scroll');
    }

    // 控制新闻列表title模块
    var $newsTitle = $('#news > .container > .row .news-title');
    $('#news .nav-weijinsuo a').on('click', function() {
        var title = $(this).data('title');
        $newsTitle.text(title);
    });

    //轮播图手指滑动
    var $carousel = $('.carousel');
    var startX, endX;
    var offset = 50;
    $carousel.on({
        touchstart: function(e) {
            startX = e.originalEvent.touches[0].clientX;
        },
        touchmove: function(e) {
            endX = e.originalEvent.touches[0].clientX;
        },
        touchend: function(e) {
            var distance = Math.abs(startX - endX);
            if (distance > offset) {
                $(this).carousel(startX > endX ? 'next' : 'prev');
            }
        }
    });
});

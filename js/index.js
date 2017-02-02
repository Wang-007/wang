//设置默认路由
// let defultHash = $('.swiper-container > .swiper-wrapper > section:first').data('hash');
// location = '#' + defultHash;

//

// 锚点点击URL不变
$('.fixNav > nav a,.content-link a[href="#aboutMe"]').each(function(i, ele) {
    $(ele).on('click', function(e) {
        $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 600);
        e.preventDefault();
    });
});

//logo部分切换
$('.fixNav-logo-intro').on({
    mouseenter: function() {
        $(this).children().eq(0).html('Resume');
        $(this).children().eq(1).html('前端攻城狮');
    },
    mouseleave: function() {
        $(this).children().eq(0).html('Wang');
        $(this).children().eq(1).html('个人简历');
    }
});

// 导航栏开关
$('.navbar-toggle').on('click', () => {
    $('.fixNav nav').slideToggle('slow');
});

// 导航栏切换
// $('.fixNav nav ul li a').each((i, ele) => {
//     $(ele).on('click', () => {
//         mySwiper.slideTo(i);
//     });
// });

let speed = 300;

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
$('.navbar-toggle').on('click', function() {
    $('.fixNav nav').slideToggle('slow');
});

// demo-list 的动画效果
const $demoListA = $('#workEXP > .demo-list > ul > li > a');
$demoListA.on({
    mouseenter: function() {
        $(this).children('.demo-list-hide')
            .show()
            .children('p')
            .stop()
            .animate({ top: 50 }, speed)
            .end()
            .children('.icon-lianjie')
            .stop()
            .animate({ bottom: 30 }, speed);
    },
    mouseleave: function() {
        const $demo_list_hide = $(this).children('.demo-list-hide');
        $demo_list_hide
            .children('p')
            .stop()
            .animate({ top: 0 }, speed)
            .end()
            .children('.icon-lianjie')
            .stop()
            .animate({ bottom: 0 }, speed, function() {
                $demo_list_hide.hide();
            });
    }
});
// demo - list 的委托事件动画效果
// const $demoListUl = $('#workEXP > .demo-list > ul');
// const $demoListLi = $demoListUl.children('li');
// $demoListUl.on('mouseenter', 'li', function() {
//         // console.log($(this));
//         $(this).children('a').children('.demo-list-hide')
//             .show()
//             .children('p')
//             .stop()
//             .animate({ top: 50 }, speed)
//             .end()
//             .children('.icon-lianjie')
//             .stop()
//             .animate({ bottom: 30 }, speed);
//     })
//     .on('mouseleave', 'li', function() {
//         const $demo_list_hide = $(this).children('a').children('.demo-list-hide');
//         $demo_list_hide
//             .children('p')
//             .stop()
//             .animate({ top: 0 }, speed)
//             .end()
//             .children('.icon-lianjie')
//             .stop()
//             .animate({ bottom: 0 }, speed, function() {
//                 $demo_list_hide.hide();
//             });
//     });

// aboutMe-click
$('#aboutMe .aboutMe-click').on('click', function() {
    $(this).hide()
        .siblings('.aboutMe-content')
        .slideDown(1500);
});

$(function(){

    if ($('#my-name').length) {
        new Vivus('my-name', {
            duration: 100,
            start: 'autostart',
            pathTimingFunction: Vivus.EASE_OUT
        }, function(obj) {
            obj.el.classList.add('fill');
        });
    }

    // スムーススクロール
    $('a[href^="#"]').click(function() {
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        $('.js_head_nav_mobile').toggleClass('menu_mobile_show');
    });

    // ハンバーガーメニュー
    $('.js_menu_mobile_toggle').on('click', function(){
        $('.js_head_nav_mobile').toggleClass('menu_mobile_show');
    });

    //topに戻るアイコン
    var topBtn = $('.top_icon');
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });

    //フッター手前でアイコンを止める
    $(window).scroll(function(){
        var height = $(document).height();
        var position = $(window).height() + $(window).scrollTop();
        var footer = $("footer").height();

        if(height - position < footer) {
            topBtn.css({
                position:"absolute",
                top: -100
            });
        } else {
            topBtn.css({
                position:"fixed",
                top:"auto"
            });
        }
    });

    //スクロールしてTopに戻る
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 700);
        return false;
    });

    //スクロールアクション
    const obj = $(".scroll-animation-obj");
    const hopIn = $(".scroll-animation-hop");
    $(window).on('scroll',function(){
        obj.each(function(){
            const objPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowH = $(window).height();
            if(scroll > objPos - windowH){
            $(this).css({
                'opacity': '1'
            });
            } else {
            $(this).css({
                'opacity': '0'
            });
            }
        });
        hopIn.each(function(){
            const objPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowH = $(window).height();
            if(scroll > objPos - windowH){
                $(this).css({
                    'transform': 'translate(0,0)'
                });
            } else {
                $(this).css({
                    'transform': 'translate(0,60px)'
                });
            }
        });
    });
});

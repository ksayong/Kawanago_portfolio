$(function(){

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
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 700);
        return false;
    })

});

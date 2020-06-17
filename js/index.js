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
    })

});

/**
 * Created by akita on 2016/7/18.
 */
"use strict";
$(function () {

    $('.close').click(function () {
        $('.zuxundetail').hide();
    });

    $('.zixun').click(function () {
        $('.zuxundetail').show();
    });

    function resize() {
        //获取屏幕值
        var windowWith = $(window).width();
        var isSmall = windowWith < 768;
        $('#advantager > .carousel-inner > .item').each(function (index, item) {
            var $item = $(item);//item为dom对象，转换jquery
            var imgSrc = $item.data(isSmall?'image-xs':'image-lg');
            $item.css('backgroundImage','url("'+ $item.data(isSmall?'image-xs':'image-lg') +'")');

            if(isSmall){
                $item.html('<img src="'+ imgSrc +'" />')
            }else {
                $item.empty();
            }
        });
    }

    $(window).on('resize',resize).trigger('resize');


});
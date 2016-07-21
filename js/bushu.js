"use strict"

$(function(){
	 function resize() {
        //获取屏幕值
        var windowWith = $(window).width();
        var isSmall = windowWith < 590;
        $('.pic').each(function (index, item) {
            var $item = $(item);//item为dom对象，转换jquery
        
            if(isSmall){
                $item.hide();
            }else {
                $item.show();
            }
        });
    }

    $(window).on('resize',resize).trigger('resize');
});

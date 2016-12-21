$(document).ready(function(){

  $(".site-nav .menu").click(function(){   /*漢堡選單*/
    var $ul=$("ul .site-nav");
    if( $ul.hasClass("menu-click") ){
      $ul.removeClass("menu-click");
      $ul.slideUp();
    }else{
      $nav.addClass("menu-click");
      $ul.slideDown();
      return false;
    }
  });


});

$(document).ready(function(){
     var touch = $('#touch_menu');
     var menu = $('.nav_header');

     $(touch).on('click', function(e){
         e.preventDefault();
         menu.slideToggle();
     });

     $(window).resize(function(){
         var view = $(window).width();
         if(view > 760 && menu.is(':hidden')){
             menu.removeAttr('style');
         }
     });

    });
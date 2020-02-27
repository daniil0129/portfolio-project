$(document).ready(function(){

    $('.nav-toggle').click(function(){
        $(this).toggleClass('on');
        $('.navigation').slideToggle();
        return false;
    });

});

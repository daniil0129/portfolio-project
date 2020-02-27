/*-- Javascript Part --*/

/* Navigation script */

/* variables for navigation */
var menuElem = document.getElementsByClassName('top-nav')[0];
var toggleButton = document.getElementsByClassName('nav-toggle')[0];
var menuSourceBottom = menuElem.getBoundingClientRect().bottom + window.pageYOffset;

/* event scroll effects menu and toggle menu button */
window.onscroll = function() {

    function fixedTopMenu(){
        if (menuElem.classList.contains('fixed') && window.pageYOffset < menuSourceBottom && document.documentElement.clientWidth < 992) {
            menuElem.classList.remove('fixed');
        } else if (window.pageYOffset > menuSourceBottom && document.documentElement.clientWidth > 992) {
            menuElem.classList.add('fixed');
        } else {
            menuElem.classList.remove('fixed');
        }
    }

    function fixedTopToggleButton(){
        if (window.pageYOffset > 25) {
            toggleButton.classList.add('nav-toggle-fixed');
        } else{
            toggleButton.classList.remove('nav-toggle-fixed');
        }
    }


    function animatePage(){

        var i,
            animateTitle = document.getElementsByClassName('animate-one');

        for(i = animateTitle.length; i--;){

            var coordAnimateTitle = animateTitle[i].getBoundingClientRect().top - 100,
                positionTitle = document.documentElement.clientHeight - coordAnimateTitle;

            if (positionTitle > coordAnimateTitle && animateTitle[i].tagName == 'H2'){
                animateTitle[i].classList.add('animate-two');
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].tagName == 'H6'){
                animateTitle[i].classList.add('animate-six');
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('dev-services')){
                animateTitle[i].style.cssText = 'transition: right 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'right: 0';
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('devices')){
                animateTitle[i].style.cssText = 'transition: left 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'left: 0';
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('dev-services-businnes')){
                animateTitle[i].style.cssText = 'transition: left 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'left: 0';
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('devices-businnes')){
                animateTitle[i].style.cssText = 'transition: right 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'right: 0';
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('proffibit-provides-content')){
                animateTitle[i].style.cssText = 'transition: left 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'left: 0';
            } else if (positionTitle > coordAnimateTitle && animateTitle[i].classList.contains('proffibit-provides-content-2')){
                animateTitle[i].style.cssText = 'transition: right 1s cubic-bezier(0.0, 0.5, 0.5, 1.0);' +
                    'right: 0';
            }

        }


    }


    fixedTopMenu();
    fixedTopToggleButton();
    animatePage();

};
/* END event scroll effects menu and toggle menu button*/
/* END Navigation script */


/* click toggle-menu display */
if (document.addEventListener){
    toggleButton.addEventListener('click', toggleClick);
} else if (document.attachEvent){
    toggleButton.attachEvent('onclick', toggleClick);
} else {
    toggleButton.onclick = toggleClick;
}

function toggleClick(e){
    'use scrict';
    if(menuElem.style.display == 'block'){
        menuElem.style.display = 'none';
    } else {
        menuElem.style.display = 'block';
    }

    if(typeof e.stopPropagation === 'function'){
        e.stopPropagation();
    }
    if(typeof  e.cancelBubble !== 'undefined'){
        e.cancelBubble = true;
    }

    if(typeof e.preventDefault === 'function'){
        e.preventDefault();
    }
    if(typeof  e.returnValue !== 'undefined') {
        e.returnValue = false;
    }

}
/* END click toggle-menu display */

/* close toggle-menu button */
function closeToggleMenu(){
    var closeNav = document.getElementsByClassName('close-nav')[0];

    if (document.addEventListener){
        closeNav.addEventListener('click', closeNavigation);
    } else if (document.attachEvent){
        closeNav.attachEvent('onclick', closeNavigation);
    } else {
        closeNav.onclick = closeNavigation;
    }
}
closeToggleMenu();


function closeNavigation(e){

    if(menuElem.style.display == 'block'){
        menuElem.style.display = 'none';
    } else {
        menuElem.style.display = 'block';
    }

    if(typeof e.stopPropagation === 'function'){
        e.stopPropagation();
    }
    if(typeof  e.cancelBubble !== 'undefined'){
        e.cancelBubble = true;
    }

    if(typeof e.preventDefault === 'function'){
        e.preventDefault();
    }
    if(typeof  e.returnValue !== 'undefined') {
        e.returnValue = false;
    }

}
/* END close toggle-menu button */

/* title in slider to middle */
function positionTitleSlider(){
    var sliderBlock = document.getElementById('slider'),
        titleSlider = document.getElementsByClassName('slider-title');

    for(var i = 0; i < titleSlider.length; i++){
        titleSlider[i].style.marginTop = Math.round(sliderBlock.clientHeight / 2 - titleSlider[i].offsetHeight) + 'px';
    }
}
positionTitleSlider();
/* END title in slider to middle */

/*--------------------------------------------------------------------------------------------*/

/*-- JQuery Part --*/
$(document).ready(function(e) {

    /* variables for slider */
    var hwSlideSpeed = 700;
    var hwTimeOut = 3000;
    var hwNeedLinks = true;

    /* Slider script */
    $('.slide').css(
        {"position" : "absolute",
            "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
        }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    }
    if(hwNeedLinks){
        var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
            .prependTo('#slider');
        $('#nextbutton').click(function(){
            animSlide("next");

        })
        $('#prewbutton').click(function(){
            animSlide("prew");
        })
    }
    var $adderSpan = '';
    $('.slide').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");

    $('.control-slide').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
    }
    $('#slider-wrap').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
    /* END Slider script */


    /* script for return button return-up */
    $(function (){

        $(".return-up").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 600){
                $(".return-up").css('bottom', '0px').fadeIn();
            } else{
                $(".return-up").fadeOut();
            }

            /* show project gallery*/
            var wScroll = $(this).scrollTop();
            if( wScroll > $('.projects-content').offset().top - ( $(window).height() / 2) ){
                $('.item-project').each(function(i){
                    setTimeout(function(){
                        $('.item-project').eq(i).addClass('is-showing');
                    }, 250 * (i + 1));

                });
            }
            /* END show project gallery*/

        });

        $(".return-up").click(function (){
            $("body, html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
    /* END script for return button return-up */




});








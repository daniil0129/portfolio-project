var App;
App = (function () {

    var myAppVariables = {
        /* propertys */
        headerMain: document.querySelector('.header-main'),
        logoDark: document.querySelector('.logo-dark'),
        logoClear: document.querySelector('.logo-clear'),
        downloadCV: document.querySelector('.download-cv'),

        frontEventMethods: function (e) {

            if (typeof e.stopPropagation === 'function') {
                e.stopPropagation();
            }
            if (typeof  e.cancelBubble !== 'undefined') {
                e.cancelBubble = true;
            }
            if (typeof e.preventDefault === 'function') {
                e.preventDefault();
            }
            if (typeof  e.returnValue !== 'undefined') {
                e.returnValue = false;
            }

        },


    };

    /* preloader script */
    (function () {
        var hellopreloader = document.getElementById("preloader_preload");

        function fadeOutnojquery(el) {
            el.style.opacity = 1;

            var interhellopreloader = setInterval(function () {

                el.style.opacity = el.style.opacity - 0.05;

                if (el.style.opacity <= 0.05) {
                    clearInterval(interhellopreloader);
                    hellopreloader.style.display = "none";
                }

            }, 16);
        }

        window.onload = function () {
            setTimeout(function () {
                fadeOutnojquery(hellopreloader);
            }, 1000);
        };
    })();
    /* END preloader script */


    var headerChange = function (e) {
        if (window.pageYOffset > 1) {
            myAppVariables.headerMain.classList.add('header-main-animate');
            myAppVariables.downloadCV.classList.add('download-cv-animate');
            myAppVariables.logoDark.style.display = 'block';
            myAppVariables.logoClear.style.display = 'none';
        } else {
            myAppVariables.headerMain.classList.remove('header-main-animate');
            myAppVariables.downloadCV.classList.remove('download-cv-animate');
            myAppVariables.logoDark.style.display = 'none';
            myAppVariables.logoClear.style.display = 'block';
        }


        myAppVariables.frontEventMethods(e);

    };


    /* create downloadCV button position */
    (function () {
        var buttonCV = myAppVariables.downloadCV,
            headMain = document.querySelector('.header-main'),
            navMain = document.querySelector('.nav-main'),
            headLogo = document.querySelector('.header-logo');

        (function () {
            if (document.documentElement.clientWidth < 767) {
                buttonCV.parentNode.removeChild(buttonCV);
                headLogo.insertBefore(buttonCV, headLogo.children[2]);
            } else {
                navMain.insertBefore(buttonCV, navMain.children[0]);
            }
        })();

        /* event create downloadCV button position*/
        var eventPositionCV = function (e) {
            if (document.documentElement.clientWidth < 767) {
                buttonCV.parentNode.removeChild(buttonCV);
                headLogo.insertBefore(buttonCV, headLogo.children[2]);
            } else {
                navMain.insertBefore(buttonCV, navMain.children[0]);
            }

            myAppVariables.frontEventMethods(e);

        };

        if (window.addEventListener) {
            window.addEventListener('scroll', headerChange);
            window.addEventListener('resize', eventPositionCV);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', headerChange);
            window.attachEvent('onresize', eventPositionCV);
        } else {
            window.onscroll = headerChange;
            window.onresize = eventPositionCV;
        };
        /* END event create downloadCV button position*/

    })();
    /* END  create downloadCV button position */


    /* open/close window letter */
    (function () {

        var buttonSend = document.getElementsByClassName('welcome-button')[0],
            newsletterBlock = document.querySelector('.newsletter'),
            closeNewsletter = document.querySelector('.close-newsletter');


        var openLetterWindow = function (e) {

            if (newsletterBlock.style.opacity == 0) {
                newsletterBlock.style.opacity = 1;
                newsletterBlock.style.zIndex = 1000;
            }

            myAppVariables.frontEventMethods(e);
        };

        var closeLetterWindow = function (e) {

            if (newsletterBlock.style.opacity == 1) {
                newsletterBlock.style.opacity = 0;
                newsletterBlock.style.zIndex = 0;
            }

            myAppVariables.frontEventMethods(e);
        };

        if (document.addEventListener) {
            buttonSend.addEventListener('click', openLetterWindow);
            closeNewsletter.addEventListener('click', closeLetterWindow);
        } else if (document.attachEvent) {
            buttonSend.attachEvent('onclick', openLetterWindow);
            closeNewsletter.attachEvent('onclick', closeLetterWindow);
        } else {
            buttonSend.onclick = openLetterWindow;
            closeNewsletter.onclick = closeLetterWindow;
        }

    })();
    /* END open/close window letter */


    /* scroll navigation site */
    (function () {
        var linkNav = document.querySelectorAll('[href^="#"]'),
            V = 0.2;

        for (var i = 0; i < linkNav.length; i++) {
            linkNav[i].onclick = function(){
                var w = window.pageYOffset,
                    hash = this.href.replace(/[^#]*(.*)/, '$1'),
                    t = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;
                requestAnimationFrame(step);
                function step(time) {
                    if (start === null) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                    window.scrollTo(0,r);
                    if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
                }
                return false;
            }
        }

    })();
    /* END scroll navigation site */

})();

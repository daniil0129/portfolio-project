$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
  		autoplaySpeed: 2000
      }
    }
  ]
});
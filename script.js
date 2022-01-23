$(function(){

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: '<i class="fas fa-chevron-left prv-ar"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt-ar "></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

// Back to Top Button
$('.backtotop').on('click', function(){
  $('html, body').animate({
      scrollTop: 0,
  }, 2000);
});


$(window).on('scroll', function(){
  var abc =  $(this).scrollTop();

  if(abc > 150){
      $('.backtotop').fadeIn();
  }

  else{
      $('.backtotop').fadeOut();
  }
});


// Pre Loader js start
$(window).on('load', function(){
  $('.preloader').delay(2000).fadeOut();
});





});
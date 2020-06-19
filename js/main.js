$(document).ready(function () {
  const mMenyBtn = $('.m-menu');
  const headerMMenu = $('.header__m-menu');
  const tab = $('.js-tab');
  

  mMenyBtn.on('click', function() {
    headerMMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('active');
  });
  
  tab.on('click', function () {
    tab.removeClass('active');
    $(this).addClass('active');
    let activeTabContent = $(this).attr('data-target');
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass('visible');
  });


  var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
          
      },
      250: {
        slidesPerView: 1,
        spaceBetween: 0, 
        navigation: {
          nextEl: '.button-next',
        }      
      },
    }   
  })
});
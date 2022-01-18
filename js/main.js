$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });

});

var typed = new Typed(".auto-type", {
  strings: ["Front-End Developer", "Web Designer", "Youtuber"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

var typed = new Typed(".auto-typed", {
  strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
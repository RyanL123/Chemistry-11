$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 300) {
          $('body').addClass('changeColor')
       }
       if ($(this).scrollTop() < 300) {
          $('body').removeClass('changeColor')
       }
    });
 });
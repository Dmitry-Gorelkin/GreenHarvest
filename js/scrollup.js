$(function () {
  $('.scrollup').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});

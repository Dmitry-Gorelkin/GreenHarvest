$('a[href^="#"]').on('click', function (event) {
  var anchor = $(this.getAttribute('href'));
  if (anchor.length) {
    event.preventDefault();
    $('html, body').stop().animate(
      {
        scrollTop: anchor.offset().top,
      },
      700
    );
  }
});

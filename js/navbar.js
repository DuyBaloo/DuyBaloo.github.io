//this function will shows navigation bar if scrolled down 800px
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.nav-bar').css('opacity', '1');
    $('.nav-bar').fadeIn(500);
    $('.sidebar').css('opacity', '1');
    $('.sidebar').slideDown(1000);
  } else {
    $('.nav-bar').fadeOut(500);
    $('.sidebar').slideUp();
  }
});

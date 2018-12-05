//this function will shows navigation bar if scrolled down 800px
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.navbar').css('opacity', '1');
    $('.navbar').fadeIn(500);
    $('.sidebar').css('opacity', '1');
    $('.sidebar').slideDown(1000);
  } else {
    $('.navbar').fadeOut(500);
    $('.sidebar').slideUp();
  }
});

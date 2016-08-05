$(function(){
  $(window).on('scroll', function(e){
    parallax();
  });
});

function parallax(){
  var scrollPosition = $(window).scrollTop();
  // $('#grid').css('top', (0 - scrollPosition)+'px'); // same as content

  // scroll bg at 20% of the speed of the rest of content
  $('#grid').css('top', (0 - (scrollPosition * .2))+'px');
}
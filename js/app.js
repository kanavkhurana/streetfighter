$(document).ready(function() {
 $('.ryu').mouseenter(function() {
    //alert('mouse entered .ryu div');
    $('.ryu-still').hide();
	$('.ryu-ready').show();
  }).mouseleave(function() {
    //alert('mouse left');
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  }).mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // animate hadouken to the right of the screen
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	// ryu goes back to his ready position
  });
})
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
    playHadouken();    

    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    
    // animate hadouken to the right of the screen
    $('.hadouken').finish().show().animate(
  	{'left': '300px'},
  	500,
  	function() {
    	$(this).hide();
    	$(this).css('left', '-212px');
  	}
	);
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	// ryu goes back to his ready position
  });
})
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
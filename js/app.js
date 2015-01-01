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
    $('.ryu-still').hide();

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
  $(document).keydown(function(event){
  	if ( event.which == 88 ) {
   		//event.preventDefault();
   		//alert('x was pressed!');
   		//ryu moves to cool position
   		$('.ryu-still').hide();
   		$('.ryu-ready').hide();
   		$('.ryu-throwing').hide();

  		$('.ryu-cool').show();
  		playCool();

  	}
  }).keyup(function(event){
  	if ( event.which == 88 ) {
   		//event.preventDefault();
   		//alert('x was released!');
   		$('.ryu-cool').hide();
   		$('.ryu-still').show();
   		stopCool();

   	 	}
  });
})
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function playCool(){
  //$('#cool-sound')[0].volume = 0.5;
  //$('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
  //DOUBT - Not working when we uncomment load()
}
function stopCool(){
  $('#cool-sound')[0].pause();
  $('#cool-sound')[0].currentTime = 0;
  //$('#cool-sound')[0].volume = 0.5;
  //Used 'load' again to start the audio file from the start, instead of using 'currentTime'
  //$('#cool-sound')[0].load();

}
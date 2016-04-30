var inDelay = 800;
var outDelay = 800;
$(document).ready(function() {
	$( '#submit' ).on('click', function(e){
	    $('h2').each( function(i){
	      $(this).delay(inDelay*i).queue( function () {
	        $(this).addClass('black').dequeue().delay(outDelay).queue( function () {
	          $(this).removeClass('black').dequeue();
	        });
	      });
	    });
	});
})
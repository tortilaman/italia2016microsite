//////////////////////////////////////////////////////////////
//Replace placeholder images with gifs and back on click.
function clickPlaceholder(clicked) {
	var $videoSRC = $('iframe', clicked).attr('video-src');
	$('img', clicked).fadeOut(400);
	$('iframe', clicked).attr('src', $videoSRC );
	$('.playButton', clicked).fadeOut(400);
	$('h2', clicked).css("display", "none");
}

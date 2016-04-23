//////////////////////////////////////////////////////////////
//Replace placeholder images with gifs and back on click.
function clickPlaceholder(clicked) {
	var $videoSRC = $('iframe', clicked).attr('video-src');
	$('img', clicked).css("display", "none");
	$('iframe', clicked).attr('src', $videoSRC );
}

$( document ).ready(function() {





	$( ".video_preview" ).click(function() {

		$(this).parent().find('.video').toggle();
		$(this).toggle();

		var $iframe=$(this).find('iframe');
		if ($iframe.data('src')){ // only do it once per iframe
			$iframe.prop('src', $iframe.data('src')).data('src', false);
		}



		/////////////

		//Replace placeholder images with gifs and back on click.
		$(document).ready(function() {
			$('.video-update').click(function() {
				var $videoSRC = $('iframe', this).attr('video-src');
				$('img', this).css("display", "none");
				$('iframe', this).attr('src', $videoSRC );

//				$(this).replaceWith()

				/*if ($attr == $base + 'jpg') {
				  $(this).toggleClass('gif');
				  $('img', this).attr('src', $base + 'gif');
				}
				else {
				  $(this).toggleClass('gif');
				  $('img', this).attr('src', $base + 'jpg');
				}*/
			});
		});


	});


});

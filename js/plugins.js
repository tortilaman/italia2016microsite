// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

//Panelsnap Initialization

//Distance from border of section to top of window
var sectOffset = window.innerHeight * 0.3;

jQuery(function($) {
	var options = {
		$menu: false,
		menuSelector: 'a',
		panelSelector: 'section',
//		namespace: '.panelSnap',
		onSnapStart: function(){},
		onSnapFinish: function(){},
		onActivate: function(){},
		directionThreshold: 14,
		slideSpeed: 500,
		easing: 'easeOutCirc',
		offset: sectOffset,
		navigation: {
			keys: {
				nextKey: false,
				prevKey: false,
			},
			buttons: {
				$nextButton: false,
				$prevButton: false,
			},
			wrapAround: false
		}
	};

	$('body').panelSnap(options);
});

/*jQuery(function($) {
	$('.panel-Snap').panelSnap({
		delay: 150,
		directionThreshold: 14,
		easing: 'easeOutCirc',
		offset: sectOffset,
		slideSpeed: 500
	});
});*/

// Place any jQuery/helper plugins in here.

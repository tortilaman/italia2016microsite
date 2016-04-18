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
var options = {
	$menu: false,
	menuSelector: 'a',
	panelSelector: '> section',
	namespace: '.panelSnap',
	onSnapStart: function(){},
	onSnapFinish: function(){},
	onActivate: function(){},
	directionThreshold: 50,
	slideSpeed: 200,
	delay: 0,
	easing: 'linear',
	offset: 0,
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

jQuery(function($) {
	$('body').panelSnap();
});

// Place any jQuery/helper plugins in here.

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

var sectOffset = $(window).height() * 0.3;

jQuery(function($) {
	$('body').panelSnap({
		delay: 150,
		directionThreshold: 14,
		easing: 'easeOutElastic',
		offset: sectOffset,
		slideSpeed: 1000
	});
});

// Place any jQuery/helper plugins in here.

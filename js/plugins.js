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

$(document).ready(function(){

	$('.window').windows({
		snapping: true,
		snapSpeed: 500,
		snapInterval: 500,
		onScroll: function(scrollPos){
			// scrollPos:Number
		},
		onSnapComplete: function($el){
			// after window ($el) snaps into place
		},
		onWindowEnter: function($el){
			// when new window ($el) enters viewport
		}
	})

});

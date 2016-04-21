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

/*	==============================================
**	Panelsnap Initialization
**	============================================*/
/*var sectOffset = $(window).height() * 0.15;

jQuery(function($) {
	$('body').panelSnap({
		delay: 5,
		directionThreshold: 1,
		offset: sectOffset
	});
});*/

/*	==============================================
**	Fullpage Initialization
**	============================================*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		/*menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,*/

		//Scrolling
		scrollingSpeed: 800,
		autoScrolling: false,
		fitToSection: true,
		fitToSectionDelay: 300,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopHorizontal: true,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,

		//Accessibility

		//Design
		controlArrows: true,
		verticalCentered: false,
		resize : true,
//		paddingTop: '3em',
//		paddingBottom: '10px',
//		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,

		//Custom selectors
		sectionSelector: 'section',
//		slideSelector: '.slide',

		//events
		/*onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}*/
	});
});

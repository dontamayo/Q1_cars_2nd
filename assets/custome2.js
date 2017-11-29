/*===============================

Main Custome Script
Project : Rahil - Material  OnePage Responsive Template
Version : 2.0
Author: Norhan_Moh
Primary use : Templates / Creative / Portfolio / Business


Table Content :
-----------------
+ Set Variable
+ Initialization of MATERIALIZE.CSS Plugins
+ Autocomplete For Blog Search Box
+ Back to Top Button Acion
+ Click Dialogs ( Toast )
+ Carousel Controls
+ Filter
+ Google Map API
+ jQuery countTo Plugin : https://github.com/mhuggins/jquery-countTo
+ Show Back to Top Button
+ Loading Screen
+ Video Modals links



Plugins:
-----------------
+ [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)


===============================*/

/*jshint strict:false */
/*jslint browser: true*/
/*jslint node: true */
/*global $, jQuery, alert*/
/*global alert: false, console: false, jQuery: false */
"use strict";
$(document).ready(function () {

	/*======= Set Variable   =======*/
	/* for Click Dialogs ( Toast ) */

	var dialog = '',
		/* For Filter */

		catergoryName = "all",
		/* Set scrollFire*/

		options = [],
		/* Google Map */
		map = '',
		cityLat = '',
		cityLng = '';


	/*======= Initialization of MATERIALIZE.CSS CODES  =======*/

	// Modal
	$('.modal').modal();


	// Mobile Sidebar
	$(".button-collapse").sideNav({
		closeOnClick: true,
		draggable: false
	});


	//Select
	$('select').material_select();


	//collapsible
	$('.collapsible').collapsible();

	// Slider
	$('.slider').slider({
		fullWidth: true
	});
	$('.carousel').carousel();
	// Autoplay Carousel
	setInterval(function () {
		$('.carousel').carousel('next');
	}, 2000);

	// ScrollSpy
	$('.scrollspy').scrollSpy({
		scrollOffset: 0
	});

	// Parallax
	$('.parallax').parallax();

	// Forms && Validate
	$('.materialize-textarea').trigger('autoresize');
	Materialize.updateTextFields();

	// Dropdown List
	$('.dropdown-button').dropdown({
		hover: true
	});

	// Tooltipped
	$('.tooltipped').tooltip({
		delay: 50
	});


	/* =============== Autocomplete For Blog Search Box =======================

	     "Web Design": null,
	     "Web Design" : The data that will displaying there (Options)
	      null : No Image --> You can put image
	======================================================================= */
	$('.search-box .autocomplete').autocomplete({
		data: {
			"Web Design": null,
			"Mobile Applications": null,
			"Web Developing": null,
			"SEO": null
		},
		limit: 20 // The max amount of results that can be shown at once. Default: Infinity.
	});

	/*======= Back to Top =======*/

	$("#top-btn").on('click', function () {

		$('html,body').stop(true, false).animate({
			scrollTop: 0
		}, 2000);
	});


	/*======= Click Dialogs ( Toast ) =======*/

	$(".btn").on('click', function () {

		dialog = $(this).attr("data-dialog"); // Get the Dialog from the Custome Attribute :"data-dialog"
		Materialize.toast(dialog, 3000); // Set the Toast

	});



	/*======= Carousel Controls =======*/

	// Next Slide
	$(".carousel-control .next").on('click', function (e) {
		e.preventDefault();

		$(this).parent(".carousel-control").prev('.carousel').carousel('next', 1);
	});
	//Prev Slide
	$(".carousel-control .prev").on('click', function (e) {
		e.preventDefault();

		$(this).parent(".carousel-control").prev('.carousel').carousel('prev', 1);
	});

	/*======= Filter =======*/

	//categoryFilter Function
	function categoryFilter() {
		$(".category." + catergoryName).show("400"); // Show the filter items
		$(".category:not(." + catergoryName + ")").hide("400"); // Hide the non-filter items
		$(".filter-menu li[data-filter='" + catergoryName + "']").addClass("active").siblings("li").removeClass("active"); // Active (colored) the category name
	}

	// For Default : Show all Categories and Active "All" Tab at the Filter menu
	categoryFilter();

	// On click -- Show the Category related to the clicked link
	$(".filter-menu li").on('click', function (e) {
		e.preventDefault();
		catergoryName = $(this).attr("data-filter");
		categoryFilter();

	});

	/*======= jQuery countTo Plugin and Animations  =======*/

	//Set scrollFire for jQuery countTo Plugin
	options = [{
			selector: '#achievements', //  the selectore
			offset: 200, // Offset
			callback: function () {
				// Call jQuery CountTo plugin
				$('.counter').countTo({
					speed: 50000 // Speed of the counter
				});
			}
		},
		//Set scrollFire for  Animations

		{
			selector: '#about',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage($('#about .section-content'));
			}
		},
		{
			selector: '#services',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage($('#services .section-content'));
			}
		},
		{
			selector: '#achievements',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage($('#achievements .section-content'));
			}
		},
		{
			selector: '#portfolio',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage($('#portfolio .section-content'));
			}
		},
		{
			selector: '#buy-theme ',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage($('#buy-theme .section-content'));
			}
		},
		{
			selector: 'footer .social-links',
			offset: 0,
			callback: function () {
				Materialize.showStaggeredList('footer .social-links');
			}
		},
		{
			selector: '#team',
			offset: 0,
			callback: function () {
				Materialize.showStaggeredList('#team .row');
			}
		},
		{
			selector: '#price-table',
			offset: 0,
			callback: function () {
				Materialize.showStaggeredList('#price-table .row');
			}
		},
		{
			selector: '#clients',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage('#clients .section-content');
			}
		},
		{
			selector: '#testimonials',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage('#testimonials .section-content');
			}
		},
		{
			selector: '#contact',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage('#contact .section-content');
			}
		},
		{
			selector: '#contact-info',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage('#contact-info .section-content');
			}
		}, {
			selector: '#blog',
			offset: 0,
			callback: function () {
				Materialize.fadeInImage('#blog .section-content');
			}
		}
	];
	//Initialization the scrollFire  plugin
	Materialize.scrollFire(options);

	// SideNav Animation
	$(".navbar-fixed  .button-collapse").on('click', function () {
		$("#nav-mobile li").css("opacity", "0");
		Materialize.showStaggeredList('#nav-mobile ');
	});
	// Fix Drag Issue
	$(".drag-target").on("swipeleft", function () {
		$("#sidenav-overlay").trigger("click");
	});
	$(".drag-target").on("swiperight", function () {
		$("#nav-mobile li").css("opacity", "0");
		Materialize.showStaggeredList('#nav-mobile');
	});
	/*======= Google map API   =======*/

	(function () {
		if ($("body").is(".home")) {
			cityLat = parseFloat($('#map').attr("data-cityLat"), 10);
			cityLng = parseFloat($('#map').attr("data-cityLng"), 10);

			function initMap() {
				map = new google.maps.Map(document.querySelector('body.home #map'), {
					center: {
						lat: cityLat,
						lng: cityLng
					},
					zoom: 8,
					scrollwheel: false
				});
			}
			initMap();
		}

	})();
	/* =========================================== */
	/*======= Video Modals links =======*/
	$("a[href='#video-modal' ]").on('click', function () {

		$("#video-modal iframe").attr('src', $(this).attr('data-video'));

	});
	/* =========================================== */

});

$(window).scroll(function () {
	"use strict";

	/*======= Top Button =======*/
	if ($(this).scrollTop() > 600) {
		$("#top-btn").addClass("show");
	} else {
		$("#top-btn").removeClass("show");
	}


	/* =========================================== */
});

$(window).on('load', function () {
	"use strict";

	/*======= Loading Screen =======*/

	$("#loadingscreen").fadeOut(800,
		function () {
			$(this).fadeOut(800, function () {
				$(this).remove();
			});
		});
	/* =========================================== */

});

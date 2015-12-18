
$.getJSON('user-5.json', function(data) { // to make mustach
	var template = $('#template').html();
	var html = Mustache.to_html(template, data);
	$('body').html(html);
});


$(document).ready(function() {
	$("body").on('click','.modalclick', function(event) {
		event.preventDefault();
		$('#overlay').show();
	});
	
	$('body').on('click','.closed', function(event) {
		event.preventDefault();
		$('#overlay').hide();
	});
});


















































































// http://vps227573.ovh.net/u-5.json




$(document).ready(function() {
	$(function(){

		$(document).on( 'scroll', function(){

			if ($(window).scrollTop() > 100) {
				$('.scroll-top-wrapper').addClass('show');
			} else {
				$('.scroll-top-wrapper').removeClass('show');
			}
		});
	});
	$(function(){

		$(document).on( 'scroll', function(){

			if ($(window).scrollTop() > 100) {
				$('.scroll-top-wrapper').addClass('show');
			} else {
				$('.scroll-top-wrapper').removeClass('show');
			}
		});

		$('.scroll-top-wrapper').on('click', scrollToTop);
	});

	function scrollToTop() {
		verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}
});

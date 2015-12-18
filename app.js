$.getJSON('https://s.idsympa.com/u-5.json', function(data){
var ele = $("[elt]"); //to get all elements in attr -- elt
for(var i=0; i<ele.length;i++){   // une boucle avec chacun de ses élements
	
	var attribut = $(ele[i]).attr("elt"); // lire l'attribut elt de cet élément
    
    var valuer = data[attribut];
    
    $(ele[i]).html(valuer);
}
});

$.getJSON('user-5.json', function(data) { // to make mustach
    var template = $('#template').html();
    var html = Mustache.to_html(template, data);
    $('#cible').html(html);
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

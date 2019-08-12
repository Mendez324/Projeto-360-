$(document).ready(function() {
	$('#wrapper').fullpage({
		//options here
		navigation: true
	});
	//methods
	$.fn.fullpage.setAllowScrolling(true);



	$('.burger-menu').click(function(){
		$(this).toggleClass('burger-menu--open');
	});
});
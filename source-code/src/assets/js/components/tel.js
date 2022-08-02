$('.header-phone__arrow').on('click', function() {
	$(this).siblings('ul').slideToggle();
	$(this).toggleClass('active');
});

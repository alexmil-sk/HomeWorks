$(document).ready(function () {
	$('.nav__burger').click(function (event) {
		$('.header__burger,.nav__burger,.top-menu').toggleClass('active');
		$('body').toggleClass('stopScroll');
	});
});

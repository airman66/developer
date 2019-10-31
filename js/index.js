$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(".intro").innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});
	$(".fa-bars").click(function () {
		$(".burger-menu").css("animation", "burger-menu__animation linear .5s");
		$(".burger-menu").css("left", "0");
	});
	$(".fa-times").click(function () {
		$(".burger-menu").css("animation", "burger-menu__animation-reverse linear .5s");
		$(".burger-menu").css("left", "-100%");
	});
});
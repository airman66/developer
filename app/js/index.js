$(function () {
	createToTopBtn();
	if ($(window).scrollTop() < $("#intro").innerHeight()) {
		$("a.nav__link[href='#intro']").addClass("nav__link--active");
	} else $("a.nav__link[href='#intro']").removeClass("nav__link--active");
	if ($(window).scrollTop() > $("#intro").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight()) {
		$("a.nav__link[href='#about']").addClass("nav__link--active");
	} else $("a.nav__link[href='#about']").removeClass("nav__link--active");
	if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight()) {
		$("a.nav__link[href='#working']").addClass("nav__link--active");
	} else $("a.nav__link[href='#working']").removeClass("nav__link--active");
	if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight()) {
		$("a.nav__link[href='#gallery']").addClass("nav__link--active");
	} else $("a.nav__link[href='#gallery']").removeClass("nav__link--active");
	if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight() + $(".companies").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight() + $(".companies").innerHeight() + $("#contact").innerHeight()) {
		$("a.nav__link[href='#contact']").addClass("nav__link--active");
	} else $("a.nav__link[href='#contact']").removeClass("nav__link--active");
	$(window).scroll(function () {
		if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight() + $(".companies").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight() + $(".companies").innerHeight() + $("#contact").innerHeight()) {
			$("a.nav__link[href='#contact']").addClass("nav__link--active");
		} else $("a.nav__link[href='#contact']").removeClass("nav__link--active");
		if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight() + $("#gallery").innerHeight()) {
			$("a.nav__link[href='#gallery']").addClass("nav__link--active");
		} else $("a.nav__link[href='#gallery']").removeClass("nav__link--active");
		if ($(window).scrollTop() > $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight() + $(".results").innerHeight() + $(".skills").innerHeight() + $("#working").innerHeight()) {
			$("a.nav__link[href='#working']").addClass("nav__link--active");
		} else $("a.nav__link[href='#working']").removeClass("nav__link--active");
		if ($(window).scrollTop() < $("#intro").innerHeight()) {
			$("a.nav__link[href='#intro']").addClass("nav__link--active");
		} else $("a.nav__link[href='#intro']").removeClass("nav__link--active");
		if ($(window).scrollTop() > $("#intro").innerHeight() - 72 && $(window).scrollTop() < $("#intro").innerHeight() + $("#about").innerHeight()) {
			$("a.nav__link[href='#about']").addClass("nav__link--active");
		} else $("a.nav__link[href='#about']").removeClass("nav__link--active");
		if ($(window).scrollTop() > $(".intro").innerHeight() - 72) {
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
	$(".nav>a, .burger-menu>li>a").click(function (e) {
		e.preventDefault();
		if ($(this).attr("href") == "#about") {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top
			}, 1000);
		}
		else {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top
			}, 1000);
		}
	});
	$(".burger-menu>li>a").click(function () {
		$(".burger-menu").css("animation", "burger-menu__animation-reverse linear 0.5s");
		$(".burger-menu").css("left", "-100%");
	})
});
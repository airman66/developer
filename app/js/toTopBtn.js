let createToTopBtn = speed => {
    $("body").append("<div class='toTopBtn'></div>");
    $(".toTopBtn").on("click", function () {
        if (speed != 1000) {
            $("html, body").animate({scrollTop: 0}, speed);
        } else $("html, body").animate({scrollTop: 0}, 1000);
    });
};

$(window).scroll(function () {
    if ($(window).scrollTop() > $(".intro").innerHeight()) {
        $(".toTopBtn").css("display", "block");
    }
    else {
        $(".toTopBtn").css("display", "none");
    }
    if ($(window).scrollTop() > $("body").innerHeight() - $("footer").innerHeight() - $(window).innerHeight()) {
        $(".toTopBtn").css("display", "none");
    } else $(".toTopBtn").css("display", "block");
});
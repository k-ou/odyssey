$(window).scroll(function () {
    $("#hero").css("opacity", 1 - $(window).scrollTop() / $(window).height());
});

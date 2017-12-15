$(".hamburger").click(function() {
    if ($(".hamburger").hasClass("is-active")) {
        $(".hamburger").removeClass("is-active");
        $(".menu-button").removeClass("is-active");
        $(".slide-menu").addClass("hidden");
    } else {
        $(".hamburger").addClass("is-active");
        $(".menu-button").addClass("is-active");
        $(".slide-menu").removeClass("hidden");
    }
});
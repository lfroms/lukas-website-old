$(document).ready(function() {
    $(".hamburger").click(function() {
        if ($(".hamburger").hasClass("is-active")) {
            removeMenuActiveClasses();
        } else {
            addMenuActiveClasses();
        }
    });
    
    $("#dim").click(function () {
        removeMenuActiveClasses();
    });

    $(window).scroll(function() {
        updateActiveMenuItem();
    });

    $(window).resize(function() {
        updateActiveMenuItem();
    });
});

function addMenuActiveClasses() {
    $(".hamburger").addClass("is-active");
    $(".menu-button").addClass("is-active");
    $(".slide-menu").removeClass("hidden");
    
    $("#dim").addClass("dimmed");
}

function removeMenuActiveClasses() {
    $(".hamburger").removeClass("is-active");
    $(".menu-button").removeClass("is-active");
    $(".slide-menu").addClass("hidden");
    
    $("#dim").removeClass("dimmed");
}

function updateActiveMenuItem() {
    var pageTop = $(this).scrollTop();

    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= pageTop && refElement.position().top + refElement.height() > pageTop) {
            $('nav a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
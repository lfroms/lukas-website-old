$(document).ready(function() {
    $(".hamburger").click(function() {
        if ($(".hamburger").hasClass("is-active")) {
            removeMenuActiveClasses();
        } else {
            addMenuActiveClasses();
        }
    });

    $("section").click(function() {
        if ($(".hamburger").hasClass("is-active")) {
            removeMenuActiveClasses();
        }
    });

    updateSectionTitle();

    $(window).scroll(function() {
        updateSectionTitle();
        updateActiveMenuItem();
    });

    $(window).resize(function() {
        updateSectionTitle();
        updateActiveMenuItem();
    });
});

function addMenuActiveClasses() {
    $(".hamburger").addClass("is-active");
    $(".menu-button").addClass("is-active");
    $(".slide-menu").removeClass("hidden");
}

function removeMenuActiveClasses() {
    $(".hamburger").removeClass("is-active");
    $(".menu-button").removeClass("is-active");
    $(".slide-menu").addClass("hidden");
}

function updateSectionTitle() {
    var wrapper = $(".wrapper");
    var wrapperHeight = wrapper.height();
    var sections = wrapper.find('section');
    var pageHeight = $(this).height();
    var pageTop = $(this).scrollTop();

    $.each($(".page-data"), function() {
        var bottom = pageTop + pageHeight;
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).outerHeight();
        var sectionTitle = $(this).find('.section-title');

        if (pageTop >= sectionTop && bottom < sectionBottom && !sectionTitle.hasClass('fixed')) {
            sectionTitle.addClass('fixed').removeClass('bottom');

        } else if (sectionTitle.hasClass('fixed') && bottom > sectionBottom) {
            sectionTitle.addClass('bottom').removeClass('fixed');

        } else if (sectionTitle.hasClass('fixed') && pageTop < sectionTop) {
            sectionTitle.removeClass('bottom').removeClass('fixed');
        }
    });
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
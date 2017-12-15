$(document).ready(function() {
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

    $(window).scroll(function() {
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
    });
    
    $(window).resize(function() {
        initializeStickyScroll();
    });
});

function initializeStickyScroll() {
    var wrapper = $(".wrapper");
    var wrapperHeight = wrapper.height();
    var sections = wrapper.find('section');
    var pageHeight = sections.height();
}
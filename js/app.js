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
});

$(window).scroll(function() {
    var block = $(".wrapper");
    var b_height = block.height();
    var sections = block.find('section');
    var sections_l = sections.length;
    var s_height = $(this).height();
    var top = 0;

    $.each($(".page-data"), function() {
        var bottom = top + s_height;
        var s_top = $(this).offset().top;
        var s_bottom = s_top + $(this).outerHeight();
        var bc = $(this).find('.section-title');

        if (top >= s_top && bottom < s_bottom && !bc.hasClass('fixed')) {
            bc.addClass('fixed').removeClass('bottom');
        } else if (bc.hasClass('fixed') && bottom > s_bottom) {
            bc.addClass('bottom').removeClass('fixed');
        } else if (bc.hasClass('fixed') && top < s_top) {
            bc.removeClass('bottom').removeClass('fixed');
        }
    });
});
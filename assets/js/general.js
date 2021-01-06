$(function() {
    $('.show-mobile-navig').click(function() {
        $('body').addClass('show-mobile-menu');
    });

    $('.close-mobile-navig').click(function() {
        $('body').removeClass('show-mobile-menu');
    });
})
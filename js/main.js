$(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg + ')'
        )
    });

    $('.toggle').click(function(){
        $('ul').slideToggle(400)
    });

    $('.venobox').venobox({
    });

    $('.banner-text').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartspeed: 1200,
    });

    $('.img-banner').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        smartspeed: 1200,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    })
})
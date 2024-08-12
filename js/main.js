$(window).on('load', function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){
    new WOW({ mobile: false }).init();

    $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

    $(window).scroll(function () {
        $(".navbar-default").toggleClass("animated", $(window).scrollTop() > 100);
    });

    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 11,
            'month': 3,
            'year': 2017,
            'hour': 00,
            'min': 00,
            'sec': 01,
        },
        omitWeeks: true
    });

    $('.init-slider').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        video: true,
        smartSpeed: 600
    });

    $("#contact-form").validate({
        rules: {
            name: { required: true, minlength: 2 },
            message: { required: true, minlength: 2 },
            email: { required: true, email: true }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "mail.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

    $("#about-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ["&#10094;","&#10095;"]
    });
});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', function() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(23.751945, 90.384590), // Dhaka
        scrollwheel: false,
        styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
    };

    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(23.751945, 90.384590),
        map: map,
        icon: 'img/map.png',
        title: 'Twing!'
    });
});

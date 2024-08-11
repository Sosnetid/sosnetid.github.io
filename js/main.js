$(window).on('load', function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){
    // Inisialisasi Owl Carousel
    $('.init-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        video:true,
        smartSpeed: 600
    });

    // Inisialisasi WOW.js
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    // Navigasi halaman satu (One Page Navigation)
    $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

    // Tambahkan kelas 'animated' pada header saat scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-default").addClass("animated");
        } else {
            $(".navbar-default").removeClass('animated');
        }
    });

    // Inisialisasi countdown
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 11,
            'month': 3,
            'year': 2017,
            'hour': 00,
            'min': 00,
            'sec': 01
        },
        omitWeeks: true
    });

    // Validasi form kontak
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Harap masukkan Nama Anda",
                minlength: "Nama Anda harus terdiri dari setidaknya 2 karakter"
            },
            message: {
                required: "Harap tulis sesuatu",
                minlength: "Pesan Anda harus terdiri dari setidaknya 2 karakter"
            },
            email: "Harap masukkan alamat email yang valid"
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

    // Inisialisasi Google Map
    google.maps.event.addDomListener(window, 'load', init);
});

function init() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(23.751945, 90.384590),
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
}

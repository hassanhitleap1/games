/**
 * Created by osaid on 3/28/2018.
 */
$(window).resize(function () {
    resizeGame();
});
$(document).ready(function () {
    $('body').manhalLoader({

        splashID: "#jSplash",
        splashVPos: '50%',
        loaderVPos: '50%',
        addFiles: [
            // {type:'audio',url:'sounds/error.mp3'},{type:'audio',url:'sounds/good.mp3'},{type:'audio',url:'sounds/reset.mp3'},
            // {type:"image",url:"images/drag/0.svg"}
        ],
        splashFunction: function () {
            resizeGame();
            $('<div class="loder-bg">').appendTo('#manhalpreOverlay');
        },
        onLoading: function (per) {

        },
    }, function () {
        var swiper1 = new Swiper('.introduction', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed:500,
            centeredSlides: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            reverseDirection:false
        });
        $("#manhalpreOverlay").fadeOut(0);
    });

    $(".type-a").click(function () {
        $(".home-btn").show();
        $(".slider-container").hide();
        $(".slider-container-a").show();
        $(".alakhfa-container").show();
    });
    $(".type-b").click(function () {
        $(".home-btn").show();
        $(".slider-container").hide();
        $(".slider-container-a").show();
        $(".alaidgham-container").show();
    });
    $(".type-c").click(function () {
        $(".home-btn").show();
        $(".slider-container").hide();
        $(".slider-container-a").show();
        $(".alaizhar-container").show();
    })
    $(".home-btn").click(function () {
        $(this).hide();
        $(".slider-container").show();
        $(".slider-container-a").hide();
        $(".alaizhar-container").hide();
        $(".alaidgham-container").hide();
        $(".alakhfa-container").hide();
    })
});


var html='';


/*=====================================================================*/
function resizeGame() {
    var gameArea = document.getElementById('main-container');
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }
    var gameCanvas = document.getElementById('inner-container');
    gameCanvas.style.width = newWidth + 'px';
    gameCanvas.style.height = newHeight + 'px';
}
function BackgroundSound(src) {

    if ($('.BackgroundSound').length)
        $('.BackgroundSound').remove();
    // stopAll()

    $("<audio class='BackgroundSound'></audio>").attr({
        'src': src,
        'autoplay': 'autoplay'
    }).appendTo("body");

    $(".BackgroundSound").prop("loop", false);
    $(".BackgroundSound").prop("volume", 0.3);

    $('.BackgroundSound').on('ended', function () {
        $(this).trigger('play')
    })
}
function soundEffect(src) {

    if ($('.SoundEffect').length)
        $('.SoundEffect').remove();
    // stopAll()
    $("<audio class='SoundEffect'></audio>").attr({
        'src': src,
        'autoplay': 'autoplay'
    }).appendTo("body");
    $(".SoundEffect").prop("loop", false);
}
/*====================================================================*/
/**
 * Created by osaid on 3/18/2018.
 */

var widtha=0;
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

    // $(".next-btn").click(function () {
    //     $(".swiper-button-next").click();
    //     if($(".swiper-slide:eq(2)").hasClass("swiper-slide-active")){
    //         $(this).css({"opacity":"0.5","pointerEvents":"none"});
    //     }
    // });
    // $(".prev-btn").click(function () {
    //     $(".next-btn").css({"opacity":"1","pointerEvents":"auto"});
    //     if($(".swiper-slide:eq(0)").hasClass("swiper-slide-active")){
    //         $(".swiper-container.introduction").css({"opacity":"0","pointerEvents":"none"});
    //         $(".introduction-container").show();
    //         $(".start-btn").show();
    //         $(".next-btn").hide();
    //         $(".prev-btn").hide();
    //     }else {
    //         $(".swiper-button-prev").click();
    //     }
    // });
    widtha=$(".inner-app").width()*3;
    $('#introductionApp').css("width",widtha);

    $(".start-btn").click(function () {
        $(".introduction-container").hide();
        $(this).hide();
        $(".swiper-container.introduction").css({"opacity":"1","pointerEvents":"auto"});
        // $(".ahkam-alnoon-inner-container .alakhfa-container").show();
        // $(".ahkam-alnoon-inner-container .alakhfa-container .page-j").show();
        $(".introduction .swiper-button-next").show();
        $(".introduction .swiper-button-prev").show();
    });

    $(".home-btn").click(function () {
        $(".swiper-container.introduction").css("opacity","1");
        $(".alaizhar-container .swiper-wrapper").html('');
        $(".alaidgham-container .swiper-wrapper").html('');
        $(".alqalb-container .swiper-wrapper").html('');
        $(".alakhfa-container .swiper-wrapper").html('');
        $(".ahkam-alnoon-inner-container").hide();
        $(".introduction-container-c").show();
        $(".introduction .swiper-button-next").show();
        $(".introduction .swiper-button-prev").show();
    });


});


var html='';

function alaizhar() {
    $(".introduction .swiper-button-next").hide();
    $(".introduction .swiper-button-prev").hide();
    $(".swiper-container.introduction").css("opacity","0");
    $(".swiper-button-next").hide();
    $(".swiper-button-prev").hide();
    $(".ahkam-alnoon-inner-container").show();
    $(".introduction-container-c").hide();
    $(".alaizhar-container").show();
    $(".alaidgham-container").hide();
    $(".alqalb-container").hide();
    $(".alakhfa-container").hide();
    $(".alaizhar-container .swiper-wrapper").html('');
    $(".alaidgham-container .swiper-wrapper").html('');
    $(".alqalb-container .swiper-wrapper").html('');
    $(".alakhfa-container .swiper-wrapper").html('');
    $(".alaizhar-container .swiper-button-next").show();
    $(".alaizhar-container .swiper-button-prev").show();
    html='<div class="swiper-slide"><div class="page-a page-inner" page="1">'+
        '<div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound="">' +
        '</div><div class="title-b animated" sound=""></div><div class="text-c animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-b page-inner" page="2"><div class="title animated" sound=""></div><div class="letter-container">'+
        '<div class="letter-a floating-right animated" sound=""></div><div class="letter-b floating-right animated" sound=""></div>'+
        '<div class="letter-c floating-right animated" sound=""></div><div class="letter-d floating-right animated" sound=""></div>'+
        '<div class="letter-e floating-right animated" sound=""></div><div class="letter-f floating-right animated" sound=""></div></div>'+
        '<div class="text-a" sound=""></div><div class="text-b" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-c page-inner" page="3"><div class="title animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-d page-inner" page="4"><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div>'+
        '<div class="title-b animated" sound=""></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-e page-inner" page="5"><div class="title animated" sound=""></div><div class="example-table-container">'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-title-a animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-title-b animated floating-right" sound=""></div><div class="example-table-cell cell-c table-title-c animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-a animated floating-right" sound="">' +
        '</div><div class="example-table-cell cell-b table-text-b animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-c animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-d animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-e animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-f animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-g animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-h animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-i animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-j floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-k floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-l floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-m animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-n animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-o animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-p animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-q animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-r animated floating-right" sound=""></div></div></div></div></div>';
    $(".alaizhar-container .swiper-wrapper").html(html).show();
    // $(".alaizhar-container .page-a").show().addClass("selected");
    var swiper1 = new Swiper('.swiper-container.alaizhar', {
        slidesPerView: 1,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        reverseDirection:true,
        slidesPerGroup: 1,
    });
    // swiper1.slideTo(0, 500, false);
}

function alaidgham() {
   $(".introduction .swiper-button-next").hide();
   $(".introduction .swiper-button-prev").hide();
    $(".swiper-container.introduction").css("opacity","0");
    $(".swiper-button-next").hide();
    $(".swiper-button-prev").hide();
    $(".ahkam-alnoon-inner-container").show();
    $(".introduction-container-c").hide();
    $(".alaizhar-container").hide();
    $(".alaidgham-container").show();
    $(".alqalb-container").hide();
    $(".alakhfa-container").hide();
    $(".alaizhar-container .swiper-wrapper").html('');
    $(".alaidgham-container .swiper-wrapper").html('');
    $(".alqalb-container .swiper-wrapper").html('');
    $(".alakhfa-container .swiper-wrapper").html('');
    $(".alaidgham-container .swiper-button-next").show();
    $(".alaidgham-container .swiper-button-prev").show();
    html='<div class="swiper-slide"><div class="page-a page-inner" page="1"><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="title-a animated" sound=""></div><div class="letter-container">'+
        '<div class="letter-a floating-right animated" sound=""></div><div class="letter-b floating-right animated" sound=""></div><div class="letter-c floating-right animated" sound="">'+
        '</div><div class="letter-d floating-right animated" sound=""></div><div class="letter-e floating-right animated" sound=""></div><div class="letter-f floating-right animated" sound=""></div></div>'+
        '<div class="text-c animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-b page-inner" page="2"><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-c page-inner" page="3"><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-d page-inner" page="4"><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div>'+
        '<div class="type-container"><div class="type-a floating-right animated" sound=""></div><div class="type-b floating-right animated" sound=""></div><div class="type-c floating-right animated" sound=""></div></div></div></div>'+
        '<div class="swiper-slide"><div class="page-e page-inner" page="5"><div class="number animated" sound=""></div><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div>'+
        '<div class="text-c animated" sound=""></div><div class="text-d animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-f page-inner" page="6"><div class="number animated" sound=""></div><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div>'+
        '<div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div><div class="text-d animated" sound=""></div><div class="text-e animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-g page-inner" page="7"><div class="number animated" sound=""></div><div class="title-a animated" sound=""></div>'+
        '<div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-h page-inner" page="8"><div class="title-a animated" sound=""></div><div class="text-a animated" sound=""></div>'+
        '<div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div><div class="text-d animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-i page-inner" page="9"><div class="title animated" sound=""></div><div class="example-table-container"><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-a animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-b animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-c animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-d animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-e animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-f animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-g animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-h animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-i animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-j animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-k animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-l animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-m animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-n animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-o animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-p animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-q animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-r animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-s animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-t animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-u animated floating-right" sound=""></div></div></div></div></div>'+
        '<div class="swiper-slide"><div class="page-j page-inner" page="10"><div class="title animated" sound=""></div><div class="text-a animated" sound=""></div><div class="example-table-container">'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-a floating-right animated" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-b floating-right animated" sound=""></div></div><div class="example-table-row">' +
        '<div class="example-table-cell cell-a table-text-c floating-right animated" sound=""></div><div class="example-table-cell cell-b table-text-d floating-right animated" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-e floating-right animated" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-f floating-right animated" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-h floating-right animated" sound=""></div><div class="example-table-cell cell-b table-text-i floating-right animated" sound=""></div></div></div>'+
        '<div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-k page-inner" page="11"><div class="text-a animated" sound=""></div><div class="example-table-container"><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-a animated" sound=""></div></div><div class="example-table-row"><div class="example-table-cell cell-b table-text-b animated" sound=""></div></div></div>'+
        '<div class="text-b animated" sound=""></div></div></div><div class="swiper-slide"><div class="page-l page-inner" page="12"><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div></div></div>';
    $(".alaidgham-container .swiper-wrapper").html(html).show();
    // $(".alaidgham-container .page-a").show().addClass("selected");
    var swiper2 = new Swiper('.swiper-container.alaidgham', {
        slidesPerView: 1,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        reverseDirection:true,
        slidesPerGroup: 1,
    });
    // swiper2.slideTo(0, 500, false);
}

function alqalb() {
   $(".introduction .swiper-button-next").hide();
   $(".introduction .swiper-button-prev").hide();
    $(".swiper-container.introduction").css("opacity","0");
    $(".swiper-button-next").hide();
    $(".swiper-button-prev").hide();
    $(".ahkam-alnoon-inner-container").show();
    $(".introduction-container-c").hide();
    $(".alaizhar-container").hide();
    $(".alaidgham-container").hide();
    $(".alqalb-container").show();
    $(".alakhfa-container").hide();
    $(".alaizhar-container .swiper-wrapper").html('');
    $(".alaidgham-container .swiper-wrapper").html('');
    $(".alqalb-container .swiper-wrapper").html('');
    $(".alakhfa-container .swiper-wrapper").html('');
    $(".alqalb-container .swiper-button-next").show();
    $(".alqalb-container .swiper-button-prev").show();
    html ='<div class="swiper-slide"><div class="page-a page-inner" page="1"><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div>'+
        '<div class="title animated" sound=""></div><div class="letter animated" sound=""></div></div></div><div class="swiper-slide"><div class="page-b page-inner" page="2"><div class="title animated" sound=""></div>'+
        '<div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-c page-inner" page="3"><div class="title animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-d page-inner" page="4"><div class="title animated" sound=""></div><div class="text animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-e page-inner" page="5"><div class="title animated" sound=""></div><div class="example-table-container"><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-a floating-right animated" sound=""></div><div class="example-table-cell cell-b floating-right"><div class="example-table-cell cell-c table-text-b animated" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-c animated" sound=""></div></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-d floating-right animated" sound=""></div><div class="example-table-cell cell-b floating-right">'+
        '<div class="example-table-cell cell-c table-text-e animated" sound=""></div><div class="example-table-cell cell-c table-text-f animated" sound=""></div></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-g floating-right animated" sound=""></div>'+
        '<div class="example-table-cell cell-b floating-right"><div class="example-table-cell cell-c table-text-h animated" sound=""></div><div class="example-table-cell cell-c table-text-i animated" sound=""></div></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-j floating-right animated" sound=""></div>'+
        '<div class="example-table-cell cell-b floating-right"><div class="example-table-cell table-text-k animated" sound=""></div></div></div></div></div></div>';
    $(".alqalb-container .swiper-wrapper").html(html).show();
    // $(".alqalb-container .page-a").show().addClass("selected");
    var swiper3 = new Swiper('.swiper-container.alqalb', {
        slidesPerView: 1,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        reverseDirection:true,
        slidesPerGroup: 1,
    });
    // swiper3.slideTo(0, 500, false);
}

function alakhfa(){
   $(".introduction .swiper-button-next").hide();
   $(".introduction .swiper-button-prev").hide();
    $(".swiper-container.introduction").css("opacity","0");
    $(".swiper-button-next").hide();
    $(".swiper-button-prev").hide();
    $(".ahkam-alnoon-inner-container").show();
    $(".introduction-container-c").hide();
    $(".alaizhar-container").hide();
    $(".alaidgham-container").hide();
    $(".alqalb-container").hide();
    $(".alakhfa-container").show();
    $(".alaizhar-container .swiper-wrapper").html('');
    $(".alaidgham-container .swiper-wrapper").html('');
    $(".alqalb-container .swiper-wrapper").html('');
    $(".alakhfa-container .swiper-wrapper").html('');
    $(".alakhfa-container .swiper-button-next").show();
    $(".alakhfa-container .swiper-button-prev").show();
    html='<div class="swiper-slide"><div class="page-a page-inner" page="1"><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="title animated" sound=""></div>'+
        '<div class="text-c animated" sound=""></div><div class="text-d animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-b page-inner" page="2"><div class="title animated" sound=""></div><div class="letter-container"><div class="letter-line">'+
        '<div class="letter-a animated floating-right" sound=""></div><div class="letter-b animated floating-right" sound=""></div><div class="letter-c animated floating-right" sound=""></div>'+
        '<div class="letter-d animated floating-right" sound=""></div><div class="letter-e animated floating-right" sound=""></div><div class="letter-f animated floating-right" sound=""></div></div>'+
        '<div class="letter-line"><div class="letter-g animated floating-right" sound=""></div><div class="letter-h animated floating-right" sound=""></div><div class="letter-i animated floating-right" sound=""></div>'+
        '<div class="letter-j animated floating-right" sound=""></div><div class="letter-k animated floating-right" sound=""></div><div class="letter-l animated floating-right" sound=""></div></div>'+
        '<div class="letter-line"><div class="letter-m animated" sound=""></div><div class="letter-n animated" sound=""></div><div class="letter-o animated" sound=""></div></div></div></div></div>'+
        '<div class="swiper-slide"><div class="page-c page-inner" page="3"><div class="title animated" sound=""></div><div class="text animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-d page-inner animated" page="4"><div class="text-a animated" sound=""></div><div class="image-container animated"><img src="media/3/image-4.png"></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-e page-inner" page="5"><div class="text-a animated" sound=""></div><div class="image-container animated"><img src="media/3/image-5.png"></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-f page-inner" page="6"><div class="title animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div><div class="text-c animated" sound=""></div>'+
        '<div class="text-d animated" sound=""></div><div class="text-e animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-g page-inner" page="7"><div class="title animated" sound=""></div><div class="text-a animated" sound=""></div><div class="text-b animated" sound=""></div></div></div>'+
        '<div class="swiper-slide"><div class="page-h page-inner" page="8"><div class="title animated" sound=""></div><div class="example-table-container"><div class="example-table-row">' +
        '<div class="example-table-cell cell-a table-title-a animated floating-right" sound=""></div><div class="example-table-cell cell-b table-title-b animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-title-c animated floating-right" sound=""></div><div class="example-table-cell cell-c table-title-d animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-a animated floating-right" sound=""></div>' +
        '<div class="example-table-cell cell-b table-text-b animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-c animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-d animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-e animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-f animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-g animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-h animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-i animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-j animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-k animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-l animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-m animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-n animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-o animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-p animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-q animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-r animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-s animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-t animated floating-right" sound=""></div></div></div></div></div>' +
        '<div class="swiper-slide"><div class="page-i page-inner" page="9"><div class="title animated" sound=""></div><div class="example-table-container"><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-title-a animated floating-right" sound=""></div><div class="example-table-cell cell-b table-title-b animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-title-c animated floating-right" sound=""></div><div class="example-table-cell cell-c table-title-d animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-a animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-b animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-c animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-d animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-e animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-f animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-g animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-h animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-i animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-j animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-k animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-l animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-m animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-n animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-o animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-p animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-q animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-r animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-s animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-t animated floating-right" sound=""></div></div></div></div></div>'+
        '<div class="swiper-slide"><div class="page-j page-inner" page="10"><div class="title animated" sound=""></div><div class="example-table-container"><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-title-a animated floating-right" sound=""></div><div class="example-table-cell cell-b table-title-b animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-title-c animated floating-right" sound=""></div><div class="example-table-cell cell-c table-title-d animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-a animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-b animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-c animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-d animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-e animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-f animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-g animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-h animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-i animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-j animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-k animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-l animated floating-right" sound=""></div></div><div class="example-table-row">'+
        '<div class="example-table-cell cell-a table-text-m animated floating-right" sound=""></div><div class="example-table-cell cell-b table-text-n animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-o animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-p animated floating-right" sound=""></div></div>'+
        '<div class="example-table-row"><div class="example-table-cell cell-a table-text-q animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-b table-text-r animated floating-right" sound=""></div><div class="example-table-cell cell-c table-text-s animated floating-right" sound=""></div>'+
        '<div class="example-table-cell cell-c table-text-t animated floating-right" sound=""></div></div></div></div></div>';
    $(".alakhfa-container .swiper-wrapper").html(html).show();
    // $(".alakhfa-container .page-a").show().addClass("selected");
    var swiper4 = new Swiper('.swiper-container.alakhfa', {
        slidesPerView: 1,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        reverseDirection:true,
        slidesPerGroup: 1,
    });
    // swiper4.slideTo(0, 500, false);
}





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
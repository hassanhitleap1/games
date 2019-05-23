/**
 * Created by osaid on 3/19/2019.
 */
var itemList1=[
    {image:"images/01.png",text:"images/1/01.svg",sound:"sounds/1/01.mp3"},
    {image:"images/02.png",text:"images/1/02.svg",sound:"sounds/1/02.mp3"},
    {image:"images/03.png",text:"images/1/03.svg",sound:"sounds/1/03.mp3"},
    {image:"images/04.png",text:"images/1/04.svg",sound:"sounds/1/04.mp3"},
    {image:"images/05.png",text:"images/1/05.svg",sound:"sounds/1/05.mp3"},
    {image:"images/06.png",text:"images/1/06.svg",sound:"sounds/1/06.mp3"}
];
var itemList2=[
    {image:"images/01.png",text:"images/2/01.svg",sound:"sounds/2/01.mp3"},
    {image:"images/02.png",text:"images/2/02.svg",sound:"sounds/2/02.mp3"},
    {image:"images/03.png",text:"images/2/03.svg",sound:"sounds/2/03.mp3"},
    {image:"images/04.png",text:"images/2/04.svg",sound:"sounds/2/04.mp3"},
    {image:"images/05.png",text:"images/2/05.svg",sound:"sounds/2/05.mp3"},
    {image:"images/06.png",text:"images/2/06.svg",sound:"sounds/2/06.mp3"}
];
var itemList3=[
    {image:"images/01.png",text:"images/3/01.svg",sound:"sounds/3/01.mp3"},
    {image:"images/02.png",text:"images/3/02.svg",sound:"sounds/3/02.mp3"},
    {image:"images/03.png",text:"images/3/03.svg",sound:"sounds/3/03.mp3"},
    {image:"images/04.png",text:"images/3/04.svg",sound:"sounds/3/04.mp3"},
    {image:"images/05.png",text:"images/3/05.svg",sound:"sounds/3/05.mp3"},
    {image:"images/06.png",text:"images/3/06.svg",sound:"sounds/3/06.mp3"}
];
var itemList=[];
$(window).resize(function () {
    resizeGame();
});
$(document).ready(function () {
    $('body').manhalLoader({
        splashID: "#jSplash",
        splashVPos: '50%',
        loaderVPos: '50%',
        //addFiles: file,
         addFiles: [
             {type:'audio',url:'sounds/01.mp3'},{type:'audio',url:'sounds/02.mp3'},{type:'audio',url:'sounds/03.mp3'},
             {type:'audio',url:'sounds/1/01.mp3'},{type:'audio',url:'sounds/1/02.mp3'},{type:'audio',url:'sounds/1/03.mp3'},
             {type:'audio',url:'sounds/1/01.mp3'},{type:'audio',url:'sounds/1/02.mp3'},{type:'audio',url:'sounds/1/03.mp3'},
             {type:'audio',url:'sounds/2/01.mp3'},{type:'audio',url:'sounds/2/02.mp3'},{type:'audio',url:'sounds/2/03.mp3'},
             {type:'audio',url:'sounds/2/01.mp3'},{type:'audio',url:'sounds/2/02.mp3'},{type:'audio',url:'sounds/2/03.mp3'},
             {type:'audio',url:'sounds/3/01.mp3'},{type:'audio',url:'sounds/3/02.mp3'},{type:'audio',url:'sounds/3/03.mp3'},
             {type:'audio',url:'sounds/3/01.mp3'},{type:'audio',url:'sounds/3/02.mp3'},{type:'audio',url:'sounds/3/03.mp3'},
             {type:"image",url:"media/card/01.png"},{type:"image",url:"media/card/02.png"},{type:"image",url:"media/card/03.png"},
             {type:"image",url:"media/card/04.png"},{type:"image",url:"media/card/05.png"},{type:"image",url:"media/card/06.png"}
         ],
        splashFunction: function () {
            resizeGame();
            $('<div class="manhal-main-loader"><div class="loader-effect"><div class="checkmark draw"></div>' +
                '</div><div class="logo-loader"></div></div>').appendTo('#manhalpreOverlay');
        },
        onLoading: function (per) {

        },
    }, function () {
        $("#manhalpreOverlay").hide();
        $(".main-container").show();
        drawSliderItem($(".btn-1"))
    });


});


function drawSliderItem(object){
    $(".top-btn").removeClass("selected");
    soundEffect($(object).attr("sound"));
    $(object).addClass("selected");
    var type=$(object).attr("type");
    itemList=[];
    $("#character-formation").attr("class","").hide();
    $(".inner-inner-container").hide();
    $(".title-a").hide();
    $("#character-formation").hide();
    $(".slider-main-container").hide();
    switch (type) {
        case "1":
            itemList=itemList1;
            $(".title-a").css("background-image","url(images/title-a.svg)");
            $("#character-formation").addClass("character-1 character-formation-inner-container animated fadeInRight").show();
            break;
        case "2":
            itemList=itemList2;
            $(".title-a").css("background-image","url(images/title-b.svg)");
            $("#character-formation").addClass("character-2 character-formation-inner-container animated fadeInRight").show();
            break;
        case "3":
            itemList=itemList3;
            $(".title-a").css("background-image","url(images/title-c.svg)");
            $("#character-formation").addClass("character-3 character-formation-inner-container animated fadeInRight").show();
            break;
    }
    $(".inner-inner-container").show();
    $(".title-a").show();
    $("#character-formation").show();
    $(".slider-main-container").show();
    var html='';
    $(".swiper-container").html("")
    for(var i=0;i<itemList.length;i++){
        html+='<div class="swiper-slide floating-right" type="'+i+'">' +
            '<div class="img-slider-container"><img sound="'+itemList[i].sound+'" src="'+itemList[i].image+'" onclick="voice(this)"></div>' +
            '<div class="text-img" sound="'+itemList[i].sound+'" style="background-image: url('+itemList[i].text+')" onclick="voice(this)"></div>' +
            '</div>';
    }
    $('<div class="swiper-wrapper"></div>').appendTo(".swiper-container");
    $(html).appendTo(".swiper-wrapper");
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 8,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        reverseDirection:true,
        slidesPerGroup: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: false
        },
    });
}
function voice(n){
    var voice=$(n).attr("sound");
    soundEffect(voice)
}
/*===============*/
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
    $(".SoundEffect2").prop("volume", 1);
}
function soundEffect2(src) {

    if ($('.SoundEffect2').length)
        $('.SoundEffect2').remove();
    // stopAll()
    $("<audio class='SoundEffect2'></audio>").attr({
        'src': src,
        'autoplay': 'autoplay'
    }).appendTo("body");
    $(".SoundEffect2").prop("loop", false);
    $(".SoundEffect2").prop("volume", 1);
}
function shuffleDivs(i) {
    var parent = $(i);
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}
/*===============*/

/**
 * Created by osaid zalloum on 17/03/2019.
 */
var correct=0;
var incorrect=0;
var randomList=[];
var randomItem=[];
$(window).resize(function () {
    resizeGame();
});
$(document).ready(function () {
    //scorm
    GetAPI(window);
    if(API!=null){
        if(API.Initialize("")){
            LMSStatus=true;
            API.SetValue("cmi.score.min",0);//to set min score in the game
            API.SetValue("cmi.score.max",100);//to set max score in the game
        }
    }
    $('body').manhalLoader({

        splashID: "#jSplash",
        splashVPos: '50%',
        loaderVPos: '50%',
        addFiles: [
            {type:'audio',url:'sounds/error.mp3'},{type:'audio',url:'sounds/good.mp3'},
            {type:'audio',url:'sounds/click.mp3'},{type:'audio',url:'sounds/reset.mp3'},
            // {type: 'image', url: 'images/cel.svg'}
        ],
        splashFunction: function () {
            resizeGame();
            $('<div class="manhal-main-loader"><div class="loader-effect"><div class="checkmark draw"></div>' +
                '</div><div class="logo-loader"></div></div>').appendTo('#manhalpreOverlay');
        },
        onLoading: function (per) {

        },
    }, function () {
        $("#manhalpreOverlay").fadeOut(0);
        drowItem(0);
        drawSliderItem();
        $(".swiper-slide:nth-child(1)").addClass("selected")
    });

    $(".reload").click(function () {
        $(".main-message-container").fadeOut();
        $(".drag").css({'opacity': '1','pointer-events':'auto'});
        correct=0;
        incorrect=0;
        drowItem()
    })

    $(document).on('click', '.swiper-slide', function () {
        var type='';
        var typ1=0;
        $(".swiper-slide").removeClass("selected");
        $(this).addClass("selected");
        $(".swiper-slide").each(function () {
            if ($(this).hasClass("selected"))
                type= $(this).attr("type");
                typ1=parseInt(type);
        });

        drowItem(typ1)
    });
});
function sliderClick(object) {
    var type='';
    var typ1=0;
    $(".swiper-slide").removeClass("selected");
    $(".swiper-slide:nth-child("+(object+1)+")").addClass("selected");
    type= $(".swiper-slide:nth-child("+(object+1)+")").attr("type");
    typ1=parseInt(type);
    drowItem(typ1)
}
function drawSliderItem(){
    var html='';
    for(var i=0;i<28;i++){
        html+='<div class="swiper-slide floating-right" type="'+i+'"><div class="img-slider-container"><span></span></div></div>';
    }
    $(html).appendTo(".swiper-wrapper");
    setTimeout(function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 11,
            spaceBetween: 8,
            direction: 'horizontal',
            prevButton: '.swiper-button-next',
            nextButton: '.swiper-button-prev',
            reverseDirection:true,
            slidesPerGroup: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: false
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        });
    },0)

}
function drowItem(a) {

    $(".title").css("background-image","url(media/"+a+"/title.svg)");
    $(".drop-item span").fadeOut(0);
    $(".item-1 .image-container").find("img").attr("src",itemList[a].imag1);
    $(".item-2 .image-container").find("img").attr("src",itemList[a].imag2);
    $(".item-3 .image-container").find("img").attr("src",itemList[a].imag3);
    $(".item-4 .image-container").find("img").attr("src",itemList[a].imag4);
    $(".item-1 .drop-item span").text(itemList[a].text1).attr("sound",itemList[a].word1);
    $(".item-2 .drop-item span").text(itemList[a].text2).attr("sound",itemList[a].word2);
    $(".item-3 .drop-item span").text(itemList[a].text3).attr("sound",itemList[a].word3);
    $(".item-4 .drop-item span").text(itemList[a].text4).attr("sound",itemList[a].word4);
    $(".item-1 .drop-item").attr("type",itemList[a].typ1)
    $(".item-2 .drop-item").attr("type",itemList[a].typ2)
    $(".item-3 .drop-item").attr("type",itemList[a].typ3)
    $(".item-4 .drop-item").attr("type",itemList[a].typ4)
    $(".drag-1 .drag span").text(itemList[a].format1).attr("type",itemList[a].typ1).attr("sound",itemList[a].sound1);
    $(".drag-2 .drag span").text(itemList[a].format2).attr("type",itemList[a].typ2).attr("sound",itemList[a].sound2);
    $(".drag-3 .drag span").text(itemList[a].format3).attr("type",itemList[a].typ3).attr("sound",itemList[a].sound3);
    $(".drag-4 .drag span").text(itemList[a].format4).attr("type",itemList[a].typ4).attr("sound",itemList[a].sound4);
    if(a==0){
        $(".drag-1 .drag span").css("line-height", "1.8em").css("background-image","none");
        $(".drag-2 .drag span").css("line-height", "1.8em").css("background-image","none");
        $(".drag-3 .drag span").css("line-height", "1.4em").css("background-image","none");
        $(".drag-4 .drag span").css("line-height", "1.8em").css("background-image","none");
    }else if(a==3 || a==8 || a==15 || a==16 || a==21){
        $(".drag-1 .drag span").css("line-height", "1.6em").css("background-image","none");
        $(".drag-2 .drag span").css("line-height", "1.6em").css("background-image","none");
        $(".drag-3 .drag span").css("line-height", "1.6em").css("background-image","none");
        $(".drag-4 .drag span").css("line-height", "1.6em").css("background-image","none");
    }else if(a==4 || a==5 || a==6 || a==27){
        $(".drag-1 .drag span").css("line-height", "1.2em").css("background-image","none");
        $(".drag-2 .drag span").css("line-height", "1.2em").css("background-image","none");
        $(".drag-3 .drag span").css("line-height", "1.2em").css("background-image","none");
        $(".drag-4 .drag span").css("line-height", "1.2em").css("background-image","none");
    }else if(a==17){
        $(".drag-3 .drag span").css("line-height", "1.3em").css("background-image","none");
        $(".drag-1 .drag span").css("background-image","none");
        $(".drag-2 .drag span").css("background-image","none");
        $(".drag-4 .drag span").css("background-image","none");
    }
    else {
        $(".drag-1 .drag span").css("line-height", "1.4em").css("background-image","none");
        $(".drag-2 .drag span").css("line-height", "1.4em").css("background-image","none");
        $(".drag-3 .drag span").css("line-height", "1.4em").css("background-image","none");
        $(".drag-4 .drag span").css("line-height", "1.4em").css("background-image","none");
    }

    if(a==23){
        $(".drag-1 .drag span").text("").css("background-image","url(images/1.svg)").addClass("litter");
        $(".drag-2 .drag span").text("").css("background-image","url(images/2.svg)").addClass("litter");
        $(".drag-3 .drag span").text("").css("background-image","url(images/3.svg)").addClass("litter");
        $(".drag-4 .drag span").text("").css("background-image","url(images/4.svg)").addClass("litter");
    }else {
        $(".drag span").removeClass("litter");
    }
    $(".drag").css({"pointer-events":"auto","opacity":"1"});
    $(".question").show();
    correct=0;
    incorrect=0;
    drag();
    shuffleDivs(".drag-container");
    shuffleDivs(".image-main-container");
}
function voice(n){
    var voice=$(n).attr("sound");
    soundEffect(voice)
}
function drag() {
    $(".drag").draggable({
        revert: true,
        drag: function (event, ui) {
            objectMain = $(this);
        },
        start: function () {
            $(this).css('z-index', 10);
            console.log($(this).find("span").attr("sound"))
            soundEffect($(this).find("span").attr("sound"))
        },
        stop: function () {
            $(this).css({'z-index': 9});
        }
    });
    $(".drop-item").droppable({
        accept: '.drag',
        hoverClass: "mouseEnter",
        drop: function (event, ui) {
            if (objectMain.find("span").attr("type")==$(this).attr("type")){
                correct++;
                soundEffect($(this).find("span").attr("sound"));
                $(this).find("span").css("display","block")
                // objectMain.draggable('destroy');
                objectMain.css({'opacity': '0.5','pointer-events':'none'});
                $(this).css('cursor', 'default');
                $(this).find(".question").hide();
                if(correct==4){
                    var object='';
                    var objectType=0;
                    var nextObect=0;

                    $(".swiper-slide").each(function () {
                        if ($(this).hasClass("selected"))
                            object= $(this).index();
                    });
                    setTimeout(function () {
                        $(".drag").css({'opacity': '1','pointer-events':'auto'});
                        correct=0;
                        incorrect=0;
                        if(object==27){
                            nextObect=0;
                        }else {
                            nextObect=object+1
                        }
                        $(".drag").css({"pointer-events":"auto","opacity":"1"})
                        sliderClick(nextObect);
                        $(".question").show();
                    },2000)
                }
            }else {
                incorrect++;
                soundEffect2("sounds/error.mp3");
            }
        }
    });
}
/*================================================================*/
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
function soundEffect(src) {

    if ($('.SoundEffect').length)
        $('.SoundEffect').remove();
    // stopAll()
    $("<audio class='SoundEffect'></audio>").attr({
        'src': src,
        'autoplay': 'autoplay'
    }).appendTo("body");
    $(".SoundEffect").prop("loop", false);
    $(".SoundEffect").prop("volume", 1);
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

function randomarray(Length) {
    var shuffle_Array = [];
    for ($x = 0; $x < Length; $x++) {
        shuffle_Array.push($x);
    }
    return shuffleArray(shuffle_Array);
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

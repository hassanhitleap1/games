/**
 * Created by osaid on 1/28/2018.
 */
var array_= 0;
var wordList=[
    [3,3,3,3]
];
$(window).resize(function () {
    resizeGame();
});
var correct=0;
var incorrect=0;
var videoType=0;
$(document).ready(function () {
    $('body').manhalLoader({
        splashID: "#jSplash",
        splashVPos: '50%',
        loaderVPos: '50%',
        addFiles: [
            {type:'audio',url:'sounds/error.mp3'},{type:'audio',url:'sounds/good.mp3'},{type:'audio',url:'sounds/reset.mp3'},{type:'audio',url:'media/0/2-1.mp3'},{type:'audio',url:'media/0/2-2.mp3'},
            {type:'audio',url:'media/0/2-3.mp3'},{type:'audio',url:'media/0/2-4.mp3'},{type:'audio',url:'media/0/2-5.mp3'},{type:'audio',url:'media/0/2-6.mp3'},{type:'audio',url:'media/0/2-7.mp3'},
            {type:'audio',url:'media/0/2-8.mp3'},{type:'audio',url:'media/0/3-1.mp3'},{type:'audio',url:'media/0/3-2.mp3'},{type:'audio',url:'media/0/3-3.mp3'},{type:'audio',url:'media/0/3-4.mp3'},
            {type:'audio',url:'media/0/3-5.mp3'},{type:'audio',url:'media/0/3-6.mp3'},{type:'audio',url:'media/0/3-7.mp3'},{type:'audio',url:'media/0/3-8.mp3'},{type:'audio',url:'media/0/PutCircleQustion.mp3'},

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

    });
    // drawSliderItem();
    choiceType("0");
    videoType=0;
    setTimeout(function () {
        choiceVideo()
    },2000);
    $('#matchingQuestion').click(function () {
        soundEffect("sounds/question.mp3")
    })

    $(".top-btn").click(function () {
        var type=$(this).attr("type");
        var typb='';
        var typf='';
        $(".top-btn").removeClass("selected");
        $(this).addClass("selected");
        choiceType(type);

        if(type==0){
            videoType=0;
            choiceVideo();
        }

        $("#menu-c .left-btn").each(function () {
            if ($(this).hasClass("selected"))
                typb= $(this).attr("type");
        });
        // $(".swiper-slide").each(function () {
        //     if ($(this).hasClass("selected"))
        //         typf= $(this).attr("type");
        // });
        typf=0
        if(type==4 &typb==9){
            drawItemMatching(typf)
        }
        if(type==4 &typb==10){
            putCirclecorrect=0;
            putCircleincorrect=0;
            letterSplit=[];
            wordListText2=[];
            $(".letter-container").remove();
            drawItemPutCircle(typf);
            // sliceWord()
        }
        if(type==4 &typb==11){
            $(".right-btn-container").show();
            $("#menu-b").hide();
            drawItem();
        }

    });
    $("#menu-a .left-btn").click(function () {
        $(".left-btn").removeClass("selected");
        $(this).addClass("selected");
        videoType=0;
        choiceVideo();
        if($(this).attr("type")=="1"){
            $("#menu-b").show();
            $(".letter-sumb").removeClass("selected");
        }else {
            $("#menu-b").hide();
        }
    });
    $("#menu-b .letter-sumb").click(function () {
        $(".letter-sumb").removeClass("selected");
        $(this).addClass("selected");
        videoType=1;
        choiceVideo()
    });
    $("#menu-c .left-btn").click(function () {
        $(".left-btn").removeClass("selected");
        $(this).addClass("selected");
        choiceGame()
    });
    $(".right-btn").click(function () {
        $(".right-btn").removeClass("selected");
        $(this).addClass("selected");
        drawItem();
    });


    $(".prev-btn").click(function () {
        $(".swiper-button-prev").click();
    });
    $(".next-btn").click(function () {
        $(".swiper-button-next").click();
    });

    $(document).on('click', '.swiper-slide', function () {
        var type,typb,typC;
        $(".top-btn").each(function () {
            if ($(this).hasClass("selected"))
                type= $(this).attr("type");
        });
        $("#menu-c .left-btn").each(function () {
            if ($(this).hasClass("selected"))
                typb= $(this).attr("type");
        });
        $(".swiper-slide").removeClass("selected");
        $(this).addClass("selected");
        $(".top-btn").each(function(){
            if ($(this).hasClass("selected"))
                choiceType($(this).attr("type"));
        });
        if(type==4 &typb==9){
            drawItemMatching($(this).attr("type"))
            $("#menu-b").hide();
        }
        if(type==4 &typb==10){
            putCirclecorrect=0;
            putCircleincorrect=0;
            letterSplit=[];
            wordListText2=[];
            $(".letter-container").remove();
            drawItemPutCircle($(this).attr("type"));
            $("#menu-b").hide();
        }
        if(type==4 &typb==11){
            $(".right-btn-container").show();
            $("#menu-b").hide();
            drawItem();
        }

        if(type==0){
            videoType=0;
            choiceVideo();
        }
        if(type==3){
            $(".word-container").hide().removeClass("fadeInRight");
            $(".img-container").hide().removeClass("fadeInRight");
            setTimeout(function () {
                $(".word-container").show().addClass("fadeInRight");
                $(".img-container").show().addClass("fadeInRight");
            },50)

        }
        if(type==2){
            $(".title-a").hide().removeClass("fadeInRight");
            $(".title-c").hide().removeClass("fadeInRight");
            $(".character-formation-inner-container").hide().removeClass("fadeInRight");
            $(".example-soundLitter-inner-container").hide().removeClass("fadeInRight");
            setTimeout(function () {
                $(".title-a").show().addClass("fadeInRight");
                $(".title-c").show().addClass("fadeInRight");
                $(".character-formation-inner-container").show().addClass("fadeInRight");
                $(".example-soundLitter-inner-container").show().addClass("fadeInRight");
            },50)

        }

    });
    // drawSliderItem();
    // choiceType("0");
    // setTimeout(function () {
    //     choiceVideo()
    // },2000);

    $(".swiper-slide:eq(0)").addClass("selected");

    $(".formation-container span").click(function () {
        $(".formation-container span").removeClass("animated pulse");
        $(this).addClass("animated pulse");
        soundEffect($(this).attr("sound"))
    });
    $(".character-img-a").click(function () {
        soundEffect($(this).attr("sound"))
    });
    $(".word-container img").click(function () {
        $(".word-container img").removeClass("pulse");
        $(this).addClass("pulse");
        soundEffect($(this).attr("sound"))
    });
    $(".img-container img").click(function () {
        $(".img-container img").removeClass("pulse");
        $(this).addClass("pulse");
        soundEffect($(this).attr("sound"))
    });

    $(".help-btn").click(function () {
        $(".main-message-container-help").show();
    });
    $(".close-message").click(function () {
        $(".main-message-container-help").hide();
    });
    $(".sound-btn").click(function () {
        if ($(this).prop('muted')) {
            $(this).prop('muted', false);
            $(".BackgroundSound").prop('muted', false);
            $(this).removeClass("sound-off");
        } else {
            $(this).prop('muted', true);
            $(this).addClass("sound-off");
            $(".BackgroundSound").prop('muted', true);
        }
    })
});
function closeMessage() {
    var menuType="";
    var letterType="";
    $(".swiper-slide").each(function () {
        if ($(this).hasClass("selected"))
            letterType= $(this).attr("type");
    });
    $("#menu-c .left-btn").each(function () {
        if($(this).hasClass("selected")){
            menuType= $(this).attr("type");
        }

        switch (menuType) {
            case "9":
                $(".lbl-container").attr("activ","");
                $(".line").remove();
                MatchingCorrect=0;
                MatchingIncorrect=0;
                shuffleDivs(".left-container");
                shuffleDivs(".right-container");
                $(".main-message-container").hide();
                break;
            case "10":
                putCirclecorrect=0;
                putCircleincorrect=0;
                letterSplit=[];
                wordListText2=[];
                $(".letter-container").remove();
                drawItemPutCircle(letterType);
                $(".main-message-container").hide();
                break;
            case "11":
                $(".drag-item").draggable('enable');
                $(".drag-item").css('opacity', '1');
                $(".drop-item span").css("background-image","none");
                $(".drop-item").show();
                $(".word").css("background-image","none").hide();
                correct=0;
                incorrect=0;
                $(".main-message-container").hide();
                break;
        }
    });
}
function choiceType(a){
    var fileName='';
    $(".inner-inner-container").hide();
    $(".right-btn-container").hide();
    switch(a){
        case "0":
            $("#LitterVideo").show();
            $(".top-btn").removeClass("selected");
            $("#menu-a .left-btn").removeClass("selected");
            $(".letter-sumb").removeClass("selected");
            $(".left-btn-container").hide();
            $(".top-btn").each(function(){
                if ($(this).attr("type") == "0")
                    $(this).addClass("selected");
            });
            $('#menu-a').show();
            $('#menu-b').show();
            $('#Litter').show();
            $("#menu-a .left-btn:eq(0)").addClass("selected");
            break;
        case "1":
            $("#wrightLitter").show();
            $(".top-btn").removeClass("selected");
            $("#menu-b .left-btn").removeClass("selected");
            $(".left-btn-container").hide();
            $(".top-btn").each(function(){
                if ($(this).attr("type") == "1")
                    $(this).addClass("selected");
            });
            $('#menu-b').show();
            $("#menu-b .left-btn:eq(0)").addClass("selected");
            break;
        case "2":
            $("#soundLitter").show();
            $(".top-btn").removeClass("selected");
            $(".left-btn-container").hide();
            $(".top-btn").each(function(){
                if ($(this).attr("type") == "2")
                    $(this).addClass("selected");
            });
            // $(".swiper-slide").each(function(){
            //     if ($(this).hasClass("selected"))
            //         fileName= $(this).attr("type");
            // });
            fileName=0;
            $(".formation-container span").attr("class","");
            switch (fileName){
                case "0":
                    $(".formation-a span").addClass("alf-a");
                    $(".formation-b span").addClass("alf-b");
                    $(".formation-c span").addClass("alf-c");
                    $(".formation-d span").addClass("alf-d");
                    break;
                case "1":
                    $(".formation-a span").addClass("baa-a");
                    $(".formation-b span").addClass("baa-b");
                    $(".formation-c span").addClass("baa-c");
                    $(".formation-d span").addClass("baa-d");
                    break;
                case "2":
                    $(".formation-a span").addClass("taa-a");
                    $(".formation-b span").addClass("taa-b");
                    $(".formation-c span").addClass("taa-c");
                    $(".formation-d span").addClass("taa-d");
                    break;
                case "2":
                    $(".formation-a span").addClass("taa-a");
                    $(".formation-b span").addClass("taa-b");
                    $(".formation-c span").addClass("taa-c");
                    $(".formation-d span").addClass("taa-d");
                    break;
            }
            $(".formation-a span").css("background-image","url(media/"+fileName+"/2-4.svg)").attr("sound","media/"+fileName+"/2-4.mp3");
            $(".formation-b span").css("background-image","url(media/"+fileName+"/2-3.svg)").attr("sound","media/"+fileName+"/2-3.mp3");
            $(".formation-c span").css("background-image","url(media/"+fileName+"/2-2.svg)").attr("sound","media/"+fileName+"/2-2.mp3");
            $(".formation-d span").css("background-image","url(media/"+fileName+"/2-1.svg)").attr("sound","media/"+fileName+"/2-1.mp3");
            $(".example-soundLitter-inner-container").css("background-image","url(media/"+fileName+"/character-shape.svg)");
            $(".character-img-a.img-a").css("background-image","url(media/"+fileName+"/2-8.png)").attr("sound","media/"+fileName+"/2-8.mp3");
            $(".character-img-a.img-b").css("background-image","url(media/"+fileName+"/2-7.png)").attr("sound","media/"+fileName+"/2-7.mp3");
            $(".character-img-a.img-c").css("background-image","url(media/"+fileName+"/2-6.png)").attr("sound","media/"+fileName+"/2-6.mp3");
            $(".character-img-a.img-d").css("background-image","url(media/"+fileName+"/2-5.png)").attr("sound","media/"+fileName+"/2-5.mp3");
            break;
        case "3":
            // $(".swiper-slide").each(function(){
            //     if ($(this).hasClass("selected"))
            //         fileName= $(this).attr("type");
            // });
            fileName=0;
            $("#example").show();
            $(".top-btn").removeClass("selected");
            $(".left-btn-container").hide();
            $(".top-btn").each(function(){
                if ($(this).attr("type") == "3")
                    $(this).addClass("selected");
            });
            $(".word-a img").attr("src","media/"+fileName+"/3-1.svg").attr("sound","media/"+fileName+"/3-1.mp3");
            $(".word-b img").attr("src","media/"+fileName+"/3-2.svg").attr("sound","media/"+fileName+"/3-2.mp3");
            $(".word-c img").attr("src","media/"+fileName+"/3-3.svg").attr("sound","media/"+fileName+"/3-3.mp3");
            $(".word-d img").attr("src","media/"+fileName+"/3-4.svg").attr("sound","media/"+fileName+"/3-4.mp3");

            $(".img-word-a img").attr("src","media/"+fileName+"/3-5.png").attr("sound","media/"+fileName+"/3-1.mp3");
            $(".img-word-b img").attr("src","media/"+fileName+"/3-6.png").attr("sound","media/"+fileName+"/3-2.mp3");
            $(".img-word-c img").attr("src","media/"+fileName+"/3-7.png").attr("sound","media/"+fileName+"/3-3.mp3");
            $(".img-word-d img").attr("src","media/"+fileName+"/3-8.png").attr("sound","media/"+fileName+"/3-4.mp3");
            break;
        case "4":
            $("#training").show();
            $(".top-btn").removeClass("selected");
            // $(".left-btn").removeClass("selected");
            $(".left-btn-container").hide();
            $(".top-btn").each(function(){
                if ($(this).attr("type") == "4")
                    $(this).addClass("selected");
            });
            $('#menu-c').show();
            var counnt=0;
            $("#menu-c .left-btn").each(function () {
                if($(this).hasClass("selected")){
                    counnt++;
                }
            });
            if(counnt<1){
                $("#menu-c .left-btn:eq(0)").addClass("selected");
            }

            break;
    }
}
function loadimage(path){

    //$("#gifLitter").attr("src","images/gif-bg.png");
    var dd=new Date()
    t=dd.getSeconds();
    $("#gifLitter").hide();
    $("#gifLitter").attr("src",'v='+Math.random()*t);
    var img = new Image();
    img.onload = function(){
        $("#gifLitter").attr("src",this.src);
        $("#gifLitter").show();

    };
    img.src = path;

}
function choiceVideo() {
    // $("#LitterVideo").each(function () { this.pause() });
    // $("#wrightLitterVideo").each(function () { this.pause() });
    var file,fileNameA,fileNameB;
    $(".top-btn").each(function(){
        if ($(this).hasClass("selected"))
            file= $(this).attr("type");
    });

    // $(".swiper-slide").each(function(){
    //     if ($(this).hasClass("selected"))
    //         fileNameB= $(this).attr("type");
    // });
    fileNameB=0
    switch (videoType){
        case 0:
            $("#menu-a .left-btn").each(function(){
                if ($(this).hasClass("selected"))
                    fileNameA= $(this).attr("type");
            });
            var path= "media/"+fileNameB+"/"+file+"_"+fileNameA+".gif";
            loadimage(path)
           //  $('#LitterVideo').html("");
           //  $('#LitterVideo').html('<source src="media/'+fileNameB+'/'+file+'-'+fileNameA+'.mp4" type="video/mp4">');
           //  // $('#LitterVideo').find("source").attr("src","media/"+fileNameB+"/"+file+"-"+fileNameA+".mp4");
           //  $('#LitterVideo').controls = false;
           // $('#LitterVideo').load();
           //  document.getElementById("LitterVideo").play();
            // $('#LitterVideo').play();
            break;
        case 1:
            $("#menu-b .letter-sumb").each(function(){
                if ($(this).hasClass("selected"))
                    fileNameA= $(this).attr("type");
            });
            var path= "media/"+fileNameB+"/"+file+"_"+fileNameA+".gif";
            loadimage(path)
            // $('#LitterVideo').html("");
            // $('#LitterVideo').html('<source src="media/'+fileNameB+'/'+file+'-'+fileNameA+'.mp4" type="video/mp4">');
            // $('#LitterVideo').find(source).attr("src","media/"+fileNameB+"/"+file+"-"+fileNameA+".mp4");
            // $('#LitterVideo').controls = false;
            // $('#LitterVideo').load();
            // document.getElementById("wrightLitterVideo").play();
            // $('#wrightLitterVideo').play();
            break;
    }

}



function drawSliderItem(){
    var html='';
    // for(var i=0;i<28;i++){
    //     html+='<div class="swiper-slide floating-right" type="'+i+'"><div class="img-slider-container"><span></span></div></div>';
    // }
    html+='<div class="swiper-slide floating-right" type="0"><div class="img-slider-container"><span></span></div></div>';
    $(html).appendTo(".swiper-wrapper");

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 11,
        spaceBetween: 8,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
}

/*=============Matching game start========*/

wordMatchingList=['3-1.svg','3-2.svg','3-3.svg','3-4.svg'];
var fileA,fileNameAA,fileNameBB;
function choiceGame() {

    $(".top-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileA= $(this).attr("type");
    });
    $(".left-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileNameAA= $(this).attr("type");
    });
    // $(".swiper-slide").each(function(){
    //     if ($(this).hasClass("selected"))
    //         fileNameBB= $(this).attr("type");
    // });
    fileNameBB= 0;
    $(".training-container").hide();
    $(".right-btn-container").hide();
    switch (fileNameAA){
        case '9':
            $(".matching-game").show();
            drawItemMatching(fileNameBB);
            break;
        case '10':
            $(".putCircle-game").show();
            $(".letter-container").remove();
            drawItemPutCircle(fileNameBB);
            // sliceWord()
            break;
        case '11':
            $(".makingWord-game").show();
            $(".right-btn-container").show();
            $("#menu-b").hide();
            makingWord();
            drawItem();
            break;
    }


}

function drawItemMatching(a) {
    $(".lbl-container").attr("activ","");
    $(".line").remove();
    MatchingCorrect=0;
    MatchingIncorrect=0;
    $(".line").remove();
    $('.left-container .lbl-container:eq(0)').css({"top":"0","left":"auto"});
    $('.left-container .lbl-container:eq(1)').css({"top":"26.703%","left":"auto"});
    $('.left-container .lbl-container:eq(2)').css({"top":"53.951%","left":"auto"});
    $('.left-container .lbl-container:eq(3)').css({"top":"81.2%","left":"auto"});
    for(var i=0;i<wordMatchingList.length;i++){
        $('.right-container .lbl-'+(i+1)+'').find("span").css("background-image","url('media/"+a+"/"+wordMatchingList[i]+"')");
        $('.left-container .lbl-'+(i+1)+'').find("span").css("background-image","url('media/"+a+"/"+wordMatchingList[i]+"')");
    }
    shuffleDivs(".left-container");
    shuffleDivs(".right-container");
}
var pA,pB,numberA,numberB;
var MatchingCorrect=0;
var MatchingIncorrect=0;
function pointAA(a) {
    if($(a).attr("activ")=='false'){
       return;
    }
    $(".right-container .lbl-container").removeClass("selected");
    $(a).addClass("selected");
    pA=$(a);
    numberA=$(a).attr("num");
}
function pointBB(b) {

    if($(b).attr("activ")=='false'){
        return;
    }

    $(".left-container .lbl-container").removeClass("selected");
    $(b).addClass("selected");
    pB=$(b);
    numberB=$(b).attr("num");
    if($(b).attr("num")==numberA){
        MatchingCorrect++;
        $(b).attr("activ",'false');
        $(pA).attr("activ",'false');
        $("<div id='lin_"+numberB+"'  class='line'></div>").appendTo(".inner-matching-game");
       // setInterval(function () {
            drawLine(pA, pB, '#lin_'+numberB+'');
       // });
        soundEffect2("sounds/good.mp3");
        $(".lbl-container").removeClass("selected");
        if(MatchingCorrect==4){
            var Matchingper=Math.round((MatchingCorrect/(MatchingCorrect + MatchingIncorrect)) * (100/1));
            $("#feedback").attr("class","");
            $("#message-icone").attr("class","");
            $(".result-container span").html("%"+Matchingper);
            if(Matchingper<=100 && Matchingper>=80){
                $("#feedback").addClass("wellDonw");
                $("#message-icone").addClass("wellDonw-icon");
            }else if (Matchingper<=79 && Matchingper>=50) {
                $("#feedback").addClass("good");
                $("#message-icone").addClass("good-icon");
            }else {
                $("#feedback").addClass("tryAgain");
                $("#message-icone").addClass("tryAgain-icon");
            }
            setTimeout(function () {
                $(".main-message-container").show();
            },1000)
        }
    }else {
        MatchingIncorrect++;
        soundEffect2("sounds/error.mp3");
        $(".lbl-container").removeClass("selected");
    }
}
function lineDistance(x, y, x0, y0) {
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};
function drawLine(a, b, line) {
    var pointA = $(a).find("i").offset();
    var pointB = $(b).find("i").offset();
    var pointAcenterX = $(a).find("i").width() / 2;
    var pointAcenterY = $(a).find("i").height() / 2;
    var pointBcenterX = $(b).find("i").width() / 2;
    var pointBcenterY = $(b).find("i").height() / 2;
    var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
    var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);

    // Set Angle
    $(line).css('transform', 'rotate(' + angle + 'deg)');

    // Set Width
    $(line).css('width', distance + 'px');

    // Set Position
    $(line).css('position', 'absolute');
    if (pointB.left < pointA.left) {
        $(line).offset({ top: pointA.top + pointAcenterY, left: pointB.left + pointBcenterX });
    } else {
        $(line).offset({ top: pointA.top + pointAcenterY, left: pointA.left + pointAcenterX });
    }
    if(pointB.top<pointA.top){
        $(line).offset({ top: pointB.top + pointAcenterY, left: pointB.left + pointBcenterX });
    }
};


/*=============Matching game end========*/

/*=======put Circle game start=========*/
var wordListText2=[];
var letterNum=[];
function drawItemPutCircle(a){
    wordListText2=[];
    letterNum=[];
    $(".putCircle-game .question-title .question-text").css("background-image","url('media/"+a+"/PutCircleQustion.svg')");
    $(".putCircle-game .question-title .sound-question").attr("sound","media/"+a+"/PutCircleQustion.mp3");
    var html='';
    var html2='';
    wordListText2=wordListText[a]
    for (var i=0;i<wordListText2.length;i++){
        letterNum.push(wordListText2[i].letter);
    }

    for (var i=0;i<wordListText2.length;i++){
        html+='<div class="letter-container letter-cont-'+(i+1)+'">\n' +
            '<span class="letter-text text-'+(i+1)+' floating-right" style="background-image: url('+wordListText2[i].imag+')"></span>' +
            '<div class="word-slice" style="width: '+wordListText2[i].word+'"></div> ' +
            '</div>';
    }
    $(".inner-putCircle-game").append(html);
    for (var t=0;t<wordListText2.length;t++){
        html2='';
        for (var y=0;y<letterNum[t].length;y++){
// console.log(letterNum[])
            // console.log(letterNum[y])
            if(wordListText2[t].true==(y+1)){
                html2+='<i class="letter letter-'+(y+1)+' floating-right" data="1" onclick="putCircle(this)" style="width: '+letterNum[t][y]+'"></i>';
            }else {
                html2+='<i class="letter letter-'+(y+1)+' floating-right" data="0" onclick="putCircle(this)" style="width: '+letterNum[t][y]+'"></i>';
            }
            // html2+='<i class="letter letter-'+(y+1)+' floating-right" data="0" onclick="putCircle(this)" style="width: '+letterNum[t][y]+'"></i>'
        }
        $(".letter-cont-"+(t+1)).find(".word-slice").append(html2);
    }


}


function PutCircleQustion(object) {
    voice($(object));
}
var putCirclecorrect=0,putCircleincorrect=0;
function putCircle(objeict){
    if($(objeict).attr("data")=="1"){
        var url=$(objeict).parent().parent().find(".letter-text").css("background-image").split('.svg').join('-selected.svg');;
        $(objeict).parent().parent().find(".letter-text").css("background-image",url);
        putCirclecorrect++;
        soundEffect2("sounds/good.mp3");
        $(objeict).parent().find("i").css("pointer-events","none");
    }else {
        soundEffect2("sounds/error.mp3");
        putCircleincorrect++;
    }

    var putCircleper=Math.round((putCirclecorrect/(putCirclecorrect + putCircleincorrect)) * (100/1));
    if(putCirclecorrect==8){
        $("#feedback").attr("class","");
        $("#message-icone").attr("class","");
        $(".result-container span").html("%"+putCircleper);
        if(putCircleper<=100 && putCircleper>=80){
            $("#feedback").addClass("wellDonw");
            $("#message-icone").addClass("wellDonw-icon");
        }else if (putCircleper<=79 && putCircleper>=50) {
            $("#feedback").addClass("good");
            $("#message-icone").addClass("good-icon");
        }else {
            $("#feedback").addClass("tryAgain");
            $("#message-icone").addClass("tryAgain-icon");
        }
        setTimeout(function () {
            $(".main-message-container").show();
        },1000)
    }

}

/*=======put Circle game end=========*/

/*========making Word game start=========*/
function drawItem(){
    $(".img-game-container").css("left","34.53%");
    $(".word-game-container").hide();
    correct=0;
    incorrect=0;
    $(".drop-container").html("");
    $(".drag-container").html("");
    var file,fileNameA,fileNameB,fileNameB1,fileNameC,fileNameC1;
    $(".top-btn").each(function(){
        if ($(this).hasClass("selected"))
            file= $(this).attr("type");
    });
    $(".left-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileNameA= $(this).attr("type");
    });
    $(".swiper-slide").each(function(){
        if ($(this).hasClass("selected"))
            // fileNameB= $(this).attr("type");
            fileNameB=0;
        fileNameB1=parseInt(fileNameB);
    });
    $(".right-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileNameC= $(this).attr("type");
        fileNameC1=parseInt(fileNameC);
    });
    var html='';
    var drop='';

    array_= wordList[fileNameB1][fileNameC1];

    for(var i=0;i<array_;i++){
        html+='<div class="drag-item"><span style="background-image: url('+String.fromCharCode(39)+'media/'+fileNameB+'/'+file+'-'+fileNameC+'/'+i+'.svg'+String.fromCharCode(39)+')" index="'+i+'" ' +
            'sound="media/'+fileNameB+'/'+file+'-'+fileNameC+'/'+i+'.mp3"></span></div>';
    }
    for(var x=0;x<array_;x++){
        drop+='<div class="drop-item"><span index="'+x+'"></span></div>';
    }

    $(".img-game-container img").attr("src","media/"+fileNameB+"/"+file+"-"+fileNameC+"/image.png");
    $(".word-game-container img").attr("src","media/"+fileNameB+"/"+file+"-"+fileNameC+"/word.svg");
    $(drop).appendTo(".drop-container");
    $(html).appendTo(".drag-container");
    $("<div class='word'><img src='media/"+fileNameB+"/"+file+"-"+fileNameC+"/word.svg' sound='media/"+fileNameB+"/"+file+"-"+fileNameC+"/word.mp3'/></div>").appendTo(".drop-container");
    drag();
    shuffleDivs(".drag-container");
}
function voice(n){
    var voice=$(n).attr("sound");
    soundEffect(voice)
}
function drag() {
    $(".drag-item span").draggable({
        revert: true,
        drag: function (event, ui) {
            object= $(this);
            objectMain = $(this);
        },
        start: function () {
            $(this).css('z-index', 10);
            voice($(this));
        },
        stop:function () {
            $(this).css('z-index', 9);
        }
    });
    $(".drop-item").droppable({
        accept: '.drag-item span',
        drop: function (event, ui) {
            if($(this).find("span").attr("index")==object.attr("index")){
                var url=object.css("background-image");
                $(this).find("span").css("background-image",url);
                objectMain.draggable('disable');
                objectMain.css({'opacity':'0.2','cursor':'default'});
                $(this).css('cursor', 'default');
                correct++;
                // soundEffect2("sounds/good.mp3");
                if(correct==array_){
                    // $(".word").show();
                    setTimeout(function () {
                        $(".img-game-container").animate({left:"48.53%"});
                        $(".word-game-container").show("slow");
                        soundEffect($(".word img").attr("sound"));
                    },1000);

                    $(".drop-item").hide();
                    if(correct==$(".drop-item span").length){
                        var per=Math.round((correct/(correct + incorrect)) * (100/1));
                        $("#feedback").attr("class","");
                        $("#message-icone").attr("class","");
                        $(".result-container span").html("%"+per);
                        if(per<=100 && per>=80){
                            $("#feedback").addClass("wellDonw");
                            $("#message-icone").addClass("wellDonw-icon");
                        }else if (per<=79 && per>=50) {
                            $("#feedback").addClass("good");
                            $("#message-icone").addClass("good-icon");
                        }else {
                            $("#feedback").addClass("tryAgain");
                            $("#message-icone").addClass("tryAgain-icon");
                        }
                        // setTimeout(function () {
                        //     $(".main-message-container").show();
                        // },1000)
                    }
                }
            }else {
                incorrect++;
                soundEffect2("sounds/error.mp3");
            }
        }
    });
}

function makingWord() {
    $(".right-btn").removeClass("selected");
    $(".right-btn-container .right-btn:eq(0)").addClass("selected");
    var file,fileNameA,fileNameB,fileNameC;
    var wordList=[];
    $(".top-btn").each(function(){
        if ($(this).hasClass("selected"))
            file= $(this).attr("type");
    });
    $(".left-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileNameA= $(this).attr("type");
    });
    $(".swiper-slide").each(function(){
        if ($(this).hasClass("selected"))
            fileNameB= $(this).attr("type");
    });
    $(".right-btn").each(function(){
        if ($(this).hasClass("selected"))
            fileNameC= $(this).attr("type");
    });
    // switch (fileNameC){
    //     case '0':
    //         drawItem();
    //         break;
    //     case '1':
    //         drawItem();
    //         break;
    //     case '2':
    //         drawItem();
    //         break;
    //     case '3':
    //         drawItem();
    //         break;
    // }
}


/*========making Word game end=========*/


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

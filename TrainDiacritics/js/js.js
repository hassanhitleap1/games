/**
 * Created by osaid zalloum on 20/03/2019.
 */
var correct=0;
var incorrect=0;
var selectItemList=[];
var selectItemList2=[];
var anotherItemList=[];
var anotherItemList2=[];
var randList1=[];
var randList2=[];
var randList3=[];
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
        $(".hhhh").click()
        // setTimeout(function () {
        //
        // },100)


    });
    $(".hhhh").click(function () {
        BackgroundSound("sounds/start.mp3");
        // alert()
    })

    $(".reload").click(function () {
        $(".main-message-container").fadeOut();
        var d=$(".drop-item").attr("type");
        $(".page-container").remove();
        $(".drag-item").remove()
        if(d==1){
            drawItem($(".btn-1"))
        }else if(d==2){
            drawItem($(".btn-2"))
        }else if (d==3) {
            drawItem($(".btn-3"))
        }
        correct=0;
        incorrect=0;
    });
    $(".home").click(function () {
        $(".main-message-container").fadeOut();
        $(".page-container").remove();
        $(".start-page").show();
        $(".main-body").show();
        correct=0;
        incorrect=0;
        BackgroundSound("sounds/start.mp3");

    })
    $(document).on('click', '.drag-item span', function () {
        soundEffect($(this).attr("sound"))
    });
    $(document).on('click', '.drop-item', function () {
        soundEffect($(this).attr("sound"))
    });
    $(document).on('click', '.home-page', function () {
        $(".main-message-container").fadeOut();
        $(".page-container").remove();
        $(".start-page").show();
        $(".main-body").show();
        correct=0;
        incorrect=0;
        BackgroundSound("sounds/start.mp3");
        soundEffect2("");
    });
});
var page='';
var html='';
var htmlMain='';
var titel='';
var subTitel='';

function drawItem(object) {
    BackgroundSound("");
    soundEffect2("sounds/enter.mp3");
    html='';
    var type=$(object).attr("type");
    $(".start-page").hide();
    $(".main-body").hide();
    selectItemList=[];
    selectItemList2=[];
    anotherItemList=[];
    anotherItemList2=[];
    randList1=[];
    randList2=[];
    $(".drag-main-container").html("");
    switch (type) {
        case '1':
            $(".page-1").show();
            for (var i=0;i<19;i++){
                selectItemList.push(imgList[i]);
            }
            for (var x=20;x<imgList.length;x++){
                anotherItemList.push(imgList[x])
            }
            titel='title-1';
            subTitel='sub-title-1';
            break;
        case '2':
            $(".page-2").show();
            for (var i=20;i<=39;i++){
                selectItemList.push(imgList[i])
            }
            for (var x=0;x<=19;x++){
                anotherItemList.push(imgList[x])
            }
            for (var x=40;x<imgList.length;x++){
                anotherItemList.push(imgList[x])
            }
            titel='title-2';
            subTitel='sub-title-2';
            break;
        case '3':
            $(".page-3").show();
            for (var i=40;i<=59;i++){
                selectItemList.push(imgList[i])
            }
            for (var x=0;x<=39;x++){
                anotherItemList.push(imgList[x])
            }
            titel='title-3';
            subTitel='sub-title-3';
            break;
    }
    randList1=randomarray(selectItemList.length);
    for (var z=0;z<=6;z++){
        selectItemList2.push(selectItemList[randList1[z]])
    }
    randList2=randomarray(anotherItemList.length);
    for (var y=0;y<anotherItemList.length;y++){
        anotherItemList2.push(anotherItemList[randList2[y]])
    }
    htmlMain='<div class="page-container"><a class="home-page"></a>' +
        '<div class="'+titel+'"></div>'+'<div class="'+subTitel+'"></div>' +
        '<div class="drag-main-container"></div>' +
        '<div class="line"></div>'+
        '<div class="train-container animated3 slideInRight"><div class="smoke-group">' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div>' +
        '<div class="smoke"></div><div class="smoke"></div></div>' +
        '<div class="train"><div class="train-inner"></div>' +
        '<div class="drop-container">' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '<div class="drop-item floating-right" type="'+type+'"><img src=""/></div>' +
        '</div>' +
        '<div class="wheelAll wheel-1 wheel-spin"></div>' +
        '<div class="wheelAll wheel-2 wheel-spin"></div>' +
        '<div class="wheelAll wheel-3 wheel-spin"></div>' +
        '<div class="wheelAll wheel-4 wheel-spin"></div>' +
        '<div class="wheelAll wheel-5 wheel-spin"></div>' +
        '<div class="wheelAll wheel-6 wheel-spin"></div>' +
        '<div class="wheelAll wheel-7 wheel-spin"></div>' +
        '<div class="wheelAll wheel-8 wheel-spin"></div>' +
        '<div class="wheelAll wheel-9 wheel-spin"></div>' +
        '<div class="wheelAll wheel-10 wheel-spin"></div>' +
        '<div class="wheelAll wheel-11 wheel-spin"></div>' +
        '<div class="wheelAll wheel-12 wheel-spin"></div>' +
        '<div class="wheelAll wheel-13 wheel-spin"></div>' +
        '</div>' +
        '</div>' +
        '<div class="railRoad"></div>' +
        '</div>';
    $("#inner-container").append(htmlMain);
    setTimeout(function () {
        $(".wheelAll").removeClass("wheel-spin");
    },8000)
    for (var r=0;r<selectItemList2.length;r++){
        html+='<div class="drag-item floating-right"><span type="'+selectItemList2[r].type+'" sound="'+selectItemList2[r].sound+'"><img src="'+selectItemList2[r].img+'"></span></div>'
    }
    for (var t=0;t<7;t++){
        html+='<div class="drag-item floating-right"><span type="'+anotherItemList2[t].type+'" sound="'+anotherItemList2[t].sound+'"><img src="'+anotherItemList2[t].img+'"></span></div>'
    }
    $(".drag-main-container").append(html);
    shuffleDivs('.drag-main-container');
    drag()
}
function drag() {
    $(".drag-item span").draggable({
        revert: true,
        drag: function (event, ui) {
            objectMain = $(this);
            objectMainImg=$(this).find('img').attr("src");
            objectMainSound=$(this).attr("sound");
        },
        start: function () {
            $(this).css('z-index', 10);

        },
        stop: function () {
            $(this).css({'z-index': 9});
        }
    });
    $(".drop-item").droppable({
        accept: '.drag-item span',
        drop: function (event, ui) {
            if (objectMain.attr("type")==$(this).attr("type")){
                $(".train").removeClass("upDown-"+correct);
                $(this).droppable("disable" )
                correct++;
                $(".train").addClass("upDown-"+correct);
                $(this).attr("sound",objectMainSound);
                $(this).find("img").attr("src",objectMainImg);
                soundEffect($(this).attr("sound"))
                // objectMain.draggable('destroy');
                objectMain.css({'opacity': '0.5','pointer-events':'none'});
                $(this).css('cursor', 'default');
                if(correct==7){
                    // scorm
                    soundEffect2("sounds/enter.mp3");
                    clearInterval(SetTimerScorm);
                    SetTimerScorm=null;
                    Result='unknown';
                    per=Math.round((correct/(correct + incorrect)) * (100/1));
                    var soundName='';
                    $("#feedback").attr("class","");
                    $("#message-icone").attr("class","");
                    $(".result-container span").html("%"+per);
                    if(per<=100 && per>=80){
                        $("#feedback").addClass("wellDonw");
                        $("#message-icone").addClass("wellDonw-icon");
                        soundName="sounds/good.mp3"
                        Result='passed';
                    }else if (per<=79 && per>=50) {
                        $("#feedback").addClass("good");
                        $("#message-icone").addClass("good-icon");
                        soundName="sounds/good.mp3"
                        Result='passed';
                    }else {
                        $("#feedback").addClass("tryAgain");
                        $("#message-icone").addClass("tryAgain-icon");
                        soundName="sounds/wrong.mp3"
                        Result='failed';
                    }
                    setTimeout(function () {
                        $(".train .wheelAll").addClass("wheel-spin");
                        $(".train-container").removeClass("slideInRight").addClass("animated3 slideLeft");
                    },1000)
                    setTimeout(function () {
                        soundEffect(soundName);
                    },2000)
                    setTimeout(function () {
                        $(".main-message-container").fadeIn();

                    },6000)
                    if(LMSStatus){

                        API.SetValue("cmi.score.raw",per.toFixed(2));//return text true or false | to set student mark
                        API.SetValue("cmi.completion_status","completed");//when complete game
                        API.SetValue("cmi.success_status",Result);//when complete game set value to one of ("passed","failed","unknown")
                        API.SetValue("cmi.session_time",TimeScorm);//to set Amount of seconds that the learner has spent

                        API.Commit("");//return text true or false | to save student mark to DB
                    }
                    TimeScorm=0;
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
    $(".SoundEffect2").prop("volume", 0.7);
}

function shuffleDivs(i) {
    var parent = $(i);
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}
function BackgroundSound(src) {

    if ($('.BackgroundSound').length)
        $('.BackgroundSound').remove();
    // stopAll()

    $("<audio class='BackgroundSound' autoplay></audio>").attr({
        'src': src,
        'autoplay': 'autoplay'
    }).appendTo("body");

    $(".BackgroundSound").prop("loop", false);
    $(".BackgroundSound").prop("volume", 0.3);

    $('.BackgroundSound').on('ended', function () {
        $(this).trigger('play')
    })
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

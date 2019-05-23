/**
 * Created by osaid on 4/4/2018.
 */
$(window).resize(function () {
    resizeGame();
});
$(document).ready(function () {
    resizeGame();
    Tabs(".tab-0-1");
    $(".name-typ a").click(function () {
        $(".home-icon").show();
        var link=$(this).attr("class");
        $(".word-typ-container").hide();
        $(".tabs-container").hide();
        $(".title-container span").attr("class","").addClass("main-title-name");
        $(".name-container").show();
        switch (link){
            case "name-typ-a":
                nameTabs(".tab-9");
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
            case "name-typ-b":
                nameTabs(".tab-10");
                $(".name-link a").removeClass("selected");
                $(".name-link-a").addClass("selected");
                $(".inner-tab").hide();
                $(".typ-a").show();
                break;
        }
    });

    $(".verb-typ a").click(function () {
        $(".home-icon").show();
        var link=$(this).attr("class");
        $(".word-typ-container").hide();
        $(".tabs-container").hide();
        $(".title-container span").attr("class","").addClass("main-title-verb");
        $(".verb-container").show();
        switch (link){
            case "verb-typ-a":
                verbTabs(".tab-6");
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
            case "verb-typ-b":
                verbTabs(".tab-7");
                $(".verb-link a").removeClass("selected");
                $(".verb-link-a").addClass("selected");
                $(".inner-tab-verb").hide();
                $(".inner-tab-verb.typ-a").show();
                break;
            case "verb-typ-c":
                verbTabs(".tab-8");
                break;
        }
    });
    $(".Letter-typ a").click(function () {
        $(".home-icon").show();
        var link=$(this).attr("class");
        $(".word-typ-container").hide();
        $(".tabs-container").hide();
        $(".title-container span").attr("class","").addClass("main-title-letter");
        $(".Letter-container").show();

        switch (link){
            case "Letter-typ-a":
                letterTabs(".tab-1");
                break;
            case "Letter-typ-b":
                letterTabs(".tab-2");
                break;
            case "Letter-typ-c":
                letterTabs(".tab-3");
                break;
            case "Letter-typ-d":
                letterTabs(".tab-4");
                break;
            case "Letter-typ-e":
                letterTabs(".tab-5");
                break;
        }
    });


    $(".accordion").click(function () {
        $(".accordion").removeClass("active");
        $(this).addClass("active");
        var panel = this.nextElementSibling;
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
            $(".panel").hide();
            panel.style.display = "block";
        // }
    });
    $(".home-icon").click(function () {
        $(this).hide();
        $(".title-container span").attr("class","").addClass("main-title");
        $(".Letter-container").hide();
        $(".verb-container").hide();
        $(".name-container").hide();
        $(".word-typ-container").show();
        Tabs(".tab-0-1");
    });

    $(".name-link a").click(function () {
        var name=$(this).attr("class");
        $(".name-link a").removeClass("selected");
        $(this).addClass("selected");
        $(".inner-tab").hide();
        switch (name){
            case "name-link-a":
                $(".typ-a").show();
                $(".accordion").removeClass("active");
                $(".accordion").next("div").hide();
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
            case "name-link-b":
                $(".typ-b").show();
                $(".accordion").removeClass("active");
                $(".accordion").next("div").hide();
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
            case "name-link-c":
                $(".typ-c").show();
                $(".accordion").removeClass("active");
                $(".accordion").next("div").hide();
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
        }
    });
    $(".verb-link a").click(function () {
        var verb=$(this).attr("class");
        $(".verb-link a").removeClass("selected");
        $(this).addClass("selected");
        $(".inner-tab-verb").hide();
        switch (verb){
            case "verb-link-a":
                $(".typ-a").show();
                $(".accordion").removeClass("active");
                $(".accordion").next("div").hide();
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                break;
            case "verb-link-b":
                $(".typ-b").show();
                $(".accordion").removeClass("active");
                $(".accordion").next("div").hide();
                $(".accordion:first-child").addClass("active");
                $(".accordion:first-child").next("div").show();
                tabLeft(".tab-left:first-child");

                break;
        }
    });

    // $(".tab-left").click(function () {
    //     var link=$(this).find("a").attr("class");
    //     console.log(link);
    //     $(".tab-left").removeClass("selected");
    //     $(this).addClass("selected");
    //     $(".tab-left-panel-container").hide();
    //     $(".arrow-left").hide();
    //     switch (link){
    //         case "tab-link-a":
    //             $(".arrow-a").show();
    //             $("#tab-left-1").show();
    //             break;
    //         case "tab-link-b":
    //             $(".arrow-b").show();
    //             $("#tab-left-2").show();
    //             break;
    //         case "tab-link-c":
    //             $(".arrow-c").show();
    //             $("#tab-left-3").show();
    //             break;
    //         case "tab-link-d":
    //             $(".arrow-a").show();
    //             $("#tab-left-4").show();
    //             break;
    //         case "tab-link-e":
    //             $(".arrow-b").show();
    //             $("#tab-left-5").show();
    //             break;
    //         case "tab-link-f":
    //             $(".arrow-c").show();
    //             $("#tab-left-6").show();
    //             break;
    //         case "tab-link-g":
    //             $(".arrow-a").show();
    //             $("#tab-left-7").show();
    //             break;
    //         case "tab-link-h":
    //             $(".arrow-b").show();
    //             $("#tab-left-8").show();
    //             break;
    //         case "tab-link-i":
    //             $(".arrow-c").show();
    //             $("#tab-left-9").show();
    //             break;
    //     }
    // })
});

function tabLeft(a) {
    var link=$(a).find("a").attr("class");
    console.log(link);
    $(".tab-left").removeClass("selected");
    $(a).addClass("selected");
    $(".tab-left-panel-container").hide();
    $(".arrow-left").hide();
    switch (link){
        case "tab-link-a":
            $(".arrow-a").show();
            $("#tab-left-1").show();
            break;
        case "tab-link-b":
            $(".arrow-b").show();
            $("#tab-left-2").show();
            break;
        case "tab-link-c":
            $(".arrow-c").show();
            $("#tab-left-3").show();
            break;
        case "tab-link-d":
            $(".arrow-a").show();
            $("#tab-left-4").show();
            break;
        case "tab-link-e":
            $(".arrow-b").show();
            $("#tab-left-5").show();
            break;
        case "tab-link-f":
            $(".arrow-c").show();
            $("#tab-left-6").show();
            break;
        case "tab-link-g":
            $(".arrow-a").show();
            $("#tab-left-7").show();
            break;
        case "tab-link-h":
            $(".arrow-b").show();
            $("#tab-left-8").show();
            break;
        case "tab-link-i":
            $(".arrow-c").show();
            $("#tab-left-9").show();
            break;
    }
}
function Tabs(a) {
    $(".tab-content").hide();
    var activeTab = $(a).attr("href");
    $(activeTab).fadeIn();
    $(".tabs-menu li").removeClass("current");
    $(a).parent().addClass("current");
}
function letterTabs(a) {
    $(".tab-content").hide();
    var activeTab = $(a).attr("href");
    $(activeTab).fadeIn();
    $(".letter-tabs-menu li").removeClass("current");
    $(a).parent().addClass("current");
}

function verbTabs(a) {
    $(".accordion").removeClass("active");
    $(".accordion").next("div").hide();
    $(".accordion:first-child").addClass("active");
    $(".accordion:first-child").next("div").show();
    $(".tab-content").hide();
    var activeTab = $(a).attr("href");
    $(activeTab).fadeIn();
    $(".verb-tabs-menu li").removeClass("current");
    $(a).parent().addClass("current");
    if($(a).attr("class")=="tab-7"){
        $(".verb-link a").removeClass("selected");
        $(".verb-link-a").addClass("selected");
        $(".inner-tab-verb").hide();
        $(".inner-tab-verb.typ-a").show();
    }
}
function nameTabs(a) {
    $(".accordion").removeClass("active");
    $(".accordion").next("div").hide();
    $(".accordion:first-child").addClass("active");
    $(".accordion:first-child").next("div").show();
    $(".tab-content").hide();
    var activeTab = $(a).attr("href");
    $(activeTab).fadeIn();
    $(".name-tabs-menu li").removeClass("current");
    $(a).parent().addClass("current");

    if($(a).attr("class")=="tab-10"){
        $(".name-link a").removeClass("selected");
        $(".name-link-a").addClass("selected");
        $(".inner-tab").hide();
        $(".typ-a").show();
    }
}


/*==========================================================*/
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
    $(".BackgroundSound").prop("volume", 0.5);

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
/*==========================================================*/
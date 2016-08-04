$(document).ready(function() {
    animateText();
    menu();
    showData();
    selectData();
});

function animateText() {
    $(".source").text("Original");
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Book");
    }, 1000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Short Story");
    }, 2000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Comic Book");
    }, 3000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Graphic Novel");
    }, 4000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Game");
    }, 5000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Magazine Article");
    }, 6000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Musical");
    }, 7000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Opera");
    }, 8000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Play");
    }, 9000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("True Story");
    }, 10000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Short Film");
    }, 11000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Toy Franchise");
    }, 12000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Television Show");
    }, 13000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Disney Ride");
    }, 14000);

    setTimeout(function() {
        $(".source").text("");
        $(".source").text("Legend");
    }, 15000);
    
    setTimeout(function() {
        $(".source").text("");
        $(".source").text("FairyTale");
    }, 16000);
    
    setTimeout(function() {
        $(".source").text("");
    }, 17000);
    
    setTimeout(animateText, 17000);
}

function selectData() {
    //time graph
    $(".all").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: 1
        }, 500);
    });
    
    $(".book").click(function(){
        $(".all, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".book").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comic").click(function(){
        $(".all, .book, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".comic").animate({
            opacity: 1
        }, 500);
    });
    
    $(".fact").click(function(){
        $(".all, .book, .comic, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".fact").animate({
            opacity: 1
        }, 500);
    });
    
    $(".game").click(function(){
        $(".all, .book, .comic, .fact, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".game").animate({
            opacity: 1
        }, 500);
    });
    
    $(".mag").click(function(){
        $(".all, .book, .comic, .fact, .game, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".mag").animate({
            opacity: 1
        }, 500);
    });
    
    $(".music").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".music").animate({
            opacity: 1
        }, 500);
    });
    
    $(".play").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".play").animate({
            opacity: 1
        }, 500);
    });
    
    $(".real").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".real").animate({
            opacity: 1
        }, 500);
    });
    
    $(".short").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .toy, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".short").animate({
            opacity: 1
        }, 500);
    });
    
    $(".toy").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .tv, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".toy").animate({
            opacity: 1
        }, 500);
    });
    
    $(".tv").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .comp, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".tv").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comp").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .disney, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".comp").animate({
            opacity: 1
        }, 500);
    });
   
    $(".disney").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .original, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".disney").animate({
            opacity: 1
        }, 500);
    });
    
    $(".original").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .remake, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".original").animate({
            opacity: 1
        }, 500);
    });
    
    $(".remake").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .spinoff, .legend").animate({
            opacity: .2
        }, 500);
        $(".remake").animate({
            opacity: 1
        }, 500);
    });
    
    $(".spinoff").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .legend").animate({
            opacity: .2
        }, 500);
        $(".spinoff").animate({
            opacity: 1
        }, 500);
    });
    
    $(".legend").click(function(){
        $(".all, .book, .comic, .fact, .game, .mag, .music, .play, .real, .short, .toy, .tv, .comp, .disney, .original, .remake, .spinoff").animate({
            opacity: .2
        }, 500);
        $(".legend").animate({
            opacity: 1
        }, 500);
    });
    
    //genre graph
    $(".all2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".book2").click(function(){
        $(".all2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".book2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comic2").click(function(){
        $(".all2, .book2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".comic2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".fact2").click(function(){
        $(".all2, .book2, .comic2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".fact2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".game2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".game2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".mag2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".mag2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".music2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".music2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".play2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);2
        $(".play2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".real2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".real2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".short2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".short2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".toy2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".toy2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".tv2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .comp2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".tv2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".comp2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .disney2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".comp2").animate({
            opacity: 1
        }, 500);
    });
   
    $(".disney2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .original2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".disney2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".original2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .remake2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".original2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".remake2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .spinoff2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".remake2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".spinoff2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .legend2").animate({
            opacity: .2
        }, 500);
        $(".spinoff2").animate({
            opacity: 1
        }, 500);
    });
    
    $(".legend2").click(function(){
        $(".all2, .book2, .comic2, .fact2, .game2, .mag2, .music2, .play2, .real2, .short2, .toy2, .tv2, .comp2, .disney2, .original2, .remake2, .spinoff2").animate({
            opacity: .2
        }, 500);
        $(".legend2").animate({
            opacity: 1
        }, 500);
    });
}

function menu() {
    $("#home").click(function() {
        $("#home").animate({
            color: "#FFE082"
        }, 500);
        $("#time, #genre, #sources").animate({
            color: "#3B3B3B"
        }, 500);
        $("#bg1").animate({
            right: 0
        }, 500);
        $("#bg2").animate({
            right: "-9.25em"
        }, 500);
        $("#bg3").animate({
            right: "-9.75em"
        }, 500);
        $("#bg4").animate({
            right: "-8em"
        }, 500);
    });
    
    $("#time").click(function() {
        $("#time").animate({
            color: "#FFE082"
        }, 500);
        $("#home, #genre, #sources").animate({
            color: "#3B3B3B"
        }, 500);
        $("#bg2").animate({
            right: 0
        }, 500);
        $("#bg1").animate({
            right: "-4.25em"
        }, 500);
        $("#bg3").animate({
            right: "-9.75em"
        }, 500);
        $("#bg4").animate({
            right: "-8em"
        }, 500);
    });
    
    $("#genre").click(function() {
        $("#genre").animate({
            color: "#FFE082"
        }, 500);
        $("#home, #time, #sources").animate({
            color: "#3B3B3B"
        }, 500);
        $("#bg3").animate({
            right: 0
        }, 500);
        $("#bg1").animate({
            right: "-4.25em"
        }, 500);
        $("#bg2").animate({
            right: "-9.25em"
        }, 500);
        $("#bg4").animate({
            right: "-8em"
        }, 500);
    });
    
    $("#sources").click(function() {
        $("#sources").animate({
            color: "#FFE082"
        }, 500);
        $("#home, #time, #genre").animate({
            color: "#3B3B3B"
        }, 500);
        $("#bg4").animate({
            right: 0
        }, 500);
        $("#bg1").animate({
            right: "-4.25em"
        }, 500);
        $("#bg2").animate({
            right: "-9.25em"
        }, 500);
        $("#bg3").animate({
            right: "-9.75em"
        }, 500);
    });
}

function showData() {
    //time
    $(".data").css("bottom","63%");
    $(".x-label2").css("bottom","47%");
    
    $(".initial").click(function() {
        $(".initial").animate({
            opacity: 1
        });
        $(".undo").animate({
            opacity: .3
        });
        $(".film, .hold").fadeOut(500);
        $(".y-axis, .y-label1, .y-label2, .y-marker, .arrow-up, .arrow-down, .x-axis, .x-label1, .x-marker").animate({
            opacity: 1
        }, 500);
        $(".data, .x-label2").css("bottom","");
    });
    
    $(".undo").click(function() {
        $(".undo").animate({
            opacity: 1
        });
        $(".initial").animate({
            opacity: .3
        });
        $(".film, .hold").fadeIn(500);
        $(".y-axis, .y-label1, .y-label2, .y-marker, .arrow-up, .arrow-down, .x-axis, .x-label1, .x-marker").animate({
            opacity: 0
        }, 500);
        $(".data").css("bottom","63%");
        $(".x-label2").css("bottom","47%");
    });
    
    //genre
    $(".data2").css("bottom","63%");
    $(".x-label3-2").css("bottom","47%");
    
    $(".initial2").click(function() {
        $(".initial2").animate({
            opacity: 1
        }, 500);
        $(".undo2").animate({
            opacity: .3
        }, 500);
        $(".film2, .hold2").fadeOut(500);
        $(".y-axis2, .y-label1-2, .y-label2-2, .y-marker2, .arrow-up2, .arrow-down2, .x-axis2, .x-label1-2, .x-marker2").animate({
            opacity: 1
        }, 500);
        $(".data2, .x-label3-2").css("bottom","");
    });
    
     $(".undo2").click(function() {
        $(".undo2").animate({
            opacity: 1
        }, 500);
        $(".initial2").animate({
            opacity: .3
        }, 500);
        $(".film2, .hold2").fadeIn(500);
        $(".y-axis2, .y-label1-2, .y-label2-2, .y-marker2, .arrow-up2, .arrow-down2, .x-axis2, .x-label1-2, .x-marker2").animate({
            opacity: 0
        }, 500);
        $(".data2").css("bottom","63%");
        $(".x-label3-2").css("bottom","47%");
    });
}
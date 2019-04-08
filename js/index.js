$(document).ready(function(){
    setTimeout(blockEnter(), 300);

    function blockEnter(){
        anime({
            targets: '.projects',
            translateY: -250,
            duration: 3000
        });
    }

//type welcome
var options = {
    strings: ["Hey there", "Welcome to my portfolio",
        "I'm a frontend developer with a unique background",
        "I explore the convergence among technology, design, and humanity"],
    typeSpeed: 60,
    loop: true,
    loopCount: Infinity,
    showCursor: false
};
var typed = new Typed(".welcome", options);

//card hover
$('.card').mouseover(function(){
    $(this).css('box-shadow', '#f1f1f1 0.2rem 0.2rem 0.2rem 0');
    $(this).children('img').css('opacity', '0.3');
    $(this).children('.cover').addClass('active');
});

$('.card').mouseenter(function(){
    setTimeout(textEnter(), 80);

    function textEnter(){
        anime.remove('.cover-line');
        anime.remove('.cover-title');
        anime.remove('.cover-content');
        anime.timeline({loop: false})
            .add({
                targets: '.cover-line',
                opacity: [0,1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 600
            })
            .add({
                targets: '.cover-title',
                opacity: [0,1],
                scaleY: [0.5, 1],
                easing: "easeInOutExpo",
                duration: 600,
            })
            .add({
                targets: '.cover-content',
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeInOutExpo",
                duration: 600,
            })
    };

});

$('.card').mouseout(function(){
    $(this).children('img').css('opacity', '1');
    $(this).children('.cover').removeClass('active');
});


});


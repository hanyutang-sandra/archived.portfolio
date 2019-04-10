$(document).ready(function() {
    carousel1();
    carousel2();
    carousel3();
    carousel4();

});

function carousel1(){
    let index=0;
    let isAnimate = false;

    let imgs = $('#carousel1 .carousel-img');
    let container = $('#carousel1 .carousel-container');
    let imgNum = imgs.length;
    let imgWidth = imgs.width();
    let imgHeight = imgs.height();

    container.append(imgs.first().clone());
    container.prepend(imgs.last().clone());
    container.width((imgNum + 2) * imgWidth);
    container.css({left: -imgWidth});

    $('#carousel1 .carousel-control i').css({top: imgHeight/3});

    $('#carousel1 .left').click(function () {
        showPre('#carousel1')
    });

    $('#carousel1 .right').click(function () {
        showNext('#carousel1')
    });

    function showPre(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '+=' + imgWidth
        }, function(){
            index--;
            if (index < 0){
                index = imgNum - 1;
                $(el+' .carousel-container').css({
                    left: -imgNum * imgWidth
                })
            }
        });
        isAnimate = false
    }

    function showNext(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '-=' + imgWidth
        }, function(){
            index++;
            if (index === imgNum) {
                index = 0;
                $(el+' .carousel-container').css({
                    left: -imgWidth
                })
            }
        });
        isAnimate = false
    }
}

function carousel2(){
    let index=0;
    let isAnimate = false;

    let imgs = $('#carousel2 .carousel-img');
    let container = $('#carousel2 .carousel-container');
    let imgNum = imgs.length;
    let imgWidth = imgs.width();
    let imgHeight = imgs.height();

    container.append(imgs.first().clone());
    container.prepend(imgs.last().clone());
    container.width((imgNum + 2) * imgWidth);
    container.css({left: -imgWidth});


    $('#carousel2 .carousel-control i').css({top: imgHeight/3});

    $('#carousel2 .left').click(function () {
        showPre('#carousel2')
    });

    $('#carousel2 .right').click(function () {
        showNext('#carousel2')
    });

    function showPre(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '+=' + imgWidth
        }, function(){
            index--;
            if (index < 0){
                index = imgNum - 1;
                $(el+' .carousel-container').css({
                    left: -imgNum * imgWidth
                })
            }
        });
        isAnimate = false
    }

    function showNext(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '-=' + imgWidth
        }, function(){
            index++;
            if (index === imgNum) {
                index = 0;
                $(el+' .carousel-container').css({
                    left: -imgWidth
                })
            }
        });
        isAnimate = false
    }
}

function carousel3(){
    let index=0;
    let isAnimate = false;

    let imgs = $('#carousel3 .carousel-img');
    let container = $('#carousel3 .carousel-container');
    let imgNum = imgs.length;
    let imgWidth = imgs.width();
    let imgHeight = imgs.height();

    container.append(imgs.first().clone());
    container.prepend(imgs.last().clone());
    container.width((imgNum + 2) * imgWidth);
    container.css({left: -imgWidth});

    $('#carousel3 .carousel-control i').css({top: imgHeight/3});

    $('#carousel3 .left').click(function () {
        showPre('#carousel3')
    });

    $('#carousel3 .right').click(function () {
        showNext('#carousel3')
    });

    function showPre(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '+=' + imgWidth
        }, function(){
            index--;
            if (index < 0){
                index = imgNum - 1;
                $(el+' .carousel-container').css({
                    left: -imgNum * imgWidth
                })
            }
        });
        isAnimate = false
    }

    function showNext(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '-=' + imgWidth
        }, function(){
            index++;
            if (index === imgNum) {
                index = 0;
                $(el+' .carousel-container').css({
                    left: -imgWidth
                })
            }
        });
        isAnimate = false
    }
}

function carousel4(){
    let index=0;
    let isAnimate = false;

    let imgs = $('#carousel4 .carousel-img');
    let container = $('#carousel4 .carousel-container');
    let imgNum = imgs.length;
    let imgWidth = imgs.width();
    let imgHeight = imgs.height();

    container.append(imgs.first().clone());
    container.prepend(imgs.last().clone());
    container.width((imgNum + 2) * imgWidth);
    container.css({left: -imgWidth});

    $('#carousel4 .carousel-control i').css({top: imgHeight/3});

    $('#carousel4 .left').click(function () {
        showPre('#carousel4')
    });

    $('#carousel4 .right').click(function () {
        showNext('#carousel4')
    });

    function showPre(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '+=' + imgWidth
        }, function(){
            index--;
            if (index < 0){
                index = imgNum - 1;
                $(el+' .carousel-container').css({
                    left: -imgNum * imgWidth
                })
            }
        });
        isAnimate = false
    }

    function showNext(el) {
        if(isAnimate) return;
        isAnimate = true;
        $(el+' .carousel-container').animate({
            left: '-=' + imgWidth
        }, function(){
            index++;
            if (index === imgNum) {
                index = 0;
                $(el+' .carousel-container').css({
                    left: -imgWidth
                })
            }
        });
        isAnimate = false
    }
}
$(document).ready(function(){

    let height = $('.img').height();
    $('.background').css({height: height})

    setTimeout(headerEnter(), 300);

    function headerEnter(){
        anime.timeline({loop: false})
            .add({
                targets: '.background',
                width: '100%',
                easing: 'easeInOutQuad',
                direction: 'alternate',
            })
    }
});
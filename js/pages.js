$(document).ready(function(){
    setTimeout(headerEnter(), 300);

    function headerEnter(){
        anime.timeline({loop: false})
            .add({
                targets: '.background',
                width: '100%',
                easing: 'easeInOutQuad',
                direction: 'alternate',
            })
            .add({
                targets: '.objects',
                translateY: 650,
                duration: 3000
            })
    }
});
$(document).ready(function(){
    $(function() {
        $('body').removeClass('fade-out');
    });

    setTimeout(headerEnter(), 300);

    function headerEnter(){
        anime.timeline({loop: false})
            .add({
                targets: '.photo',
                opacity: '1',
                easing: 'easeInOutQuad',
                direction: 'alternate',
            })
            .add({
                targets: '.text',
                opacity: '1',
                easing: 'easeInOutQuad',
                direction: 'alternate',
            })
    }
});
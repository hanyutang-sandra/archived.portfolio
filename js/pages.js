$(document).ready(function(){
    $(function() {
        $('body').removeClass('fade-out');
    });

    if($('.objects').src !== "" && $('.illustration').src !== ""){
        setTimeout(headerEnter(), 300);
    }


    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 1000,
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    function headerEnter(){
        anime.timeline({loop: false})
            .add({
                targets: '.background',
                width: '100%',
                easing: 'easeInOutQuad',
                direction: 'alternate',
            })
            .add({
                targets: '.bg-img',
                opacity: '1',
                duration: 500,
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
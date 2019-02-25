$(document).ready(function(){
    $('.breadcrumb>a').mouseover(function(){
        $(this).children('img').attr('src', '../resources/website/back-g.png')
    });
    $('.breadcrumb>a').mouseleave(function(){
        $(this).children('img').attr('src', '../resources/website/back-w.png')
    });

    $('header>.breadcrumb>ul>li:last-of-type').click(function(){
        window.open('pages/about.html', '_self')
    });

    $('footer>.breadcrumb>ul>li:last-of-type').click(function(){
        window.open('pages/about.html', '_self')
    });

    $('header>.breadcrumb>ul>li:first-of-type').click(function(){
        window.open('../index.html', '_self')
    });

    $('footer>.breadcrumb>ul>li:first-of-type').click(function(){
        window.open('../index.html', '_self')
    });
});
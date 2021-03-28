//smooth scroll
$('nav  a').on('click',function(){
    $('html,body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    },700);
    return false
});

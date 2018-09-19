console.log('hhhh');
$(document).ready (function(){
    $('.view').click(function(){
        $('.info').addClass('active');
    })
    $('.close i').click(function(){
        $('.info').removeClass('active');
    })
});
$('.custom-control-input').on('click', function(){
    if($('body').hasClass('light-theme')){
        $('body').removeClass('light-theme')
    }
    else{
        $('body').toggleClass('light-theme')
    }
})
$(document).ready(function(){
    $('#x3_min').click(function(){
        alert('Вы нажали на логотип!');
        $('#x3_min').animate({
            width: '33%',
            fontSize: '3em'
        }, 1500);            
    });
    let clicknums = 0;
    $('#chng_color').click(function(){
        clicknums++;
        if(clicknums % 2 !== 0){
            $('#chng_color').css('background-color', 'green')
        }else{
            $('#chng_color').css('background-color', 'rgb(56, 56, 56)')
        }
    });
    let srcs = ['https://cdn.mos.cms.futurecdn.net/2aipAM72aBPS7Ny4L2MeNn.jpg', 'https://i.ytimg.com/vi/Go7SeJ-yOL4/maxresdefault.jpg'];
    $('#kaif').click(function(){
        clicknums++;
        if(clicknums % 2 !== 0){
            document.querySelector('#kaif').setAttribute('src', srcs[1]);
        }else{
            document.querySelector('#kaif').setAttribute('src', srcs[0]);
        }
        
    });
    $('#abzac')
});
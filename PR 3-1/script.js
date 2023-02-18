$(document).ready(function(){
    let click = 0;

    // ---------1---------
    (function change(){
        setTimeout(function(){
            $('.logo_text').toggleClass('red_color blue_color');
        }, 10000);
        setTimeout(change, 10000);
    })();

    // ---------2---------

    // ---------3---------

    $('.text3').click(function(){
        if(click < 1){
            click++

            $('.header').animate({
            height: 400
            }, 100)
            $('.itm3').append($('<div>', {
                'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure adipisci expedita rem quibusdam atque officiis sed quae, minima aliquid dolorem ut numquam error?',
                'class': 'added_text'
            }));
            $('.added_text').css('background-color', 'rgb(85, 85, 85)');
            $('.added_text').css('color', 'white') ; 
        }          
    });

    // ---------4---------

    $('.categ3 > img').click(function(){
            $(this).toggleClass('categ_opacity');
    });

    // ---------5---------

    // ---------6---------

    $('.inf1 > p').click(function(){
        $('.inf1 > img').fadeToggle(1000);
    });

    $('.inf2 > p').click(function(){
        $('.inf2 > img').fadeToggle(1000);
    });

    $('.inf3 > p').click(function(){
        $('.inf3 > img').fadeToggle(1000);
    });
    
    // ---------7---------

    $('.inf3 > img').click(function(){
        $(this).toggleClass('fa fa-spin');
    });

    // ---------8---------

    $('.abz1').click(function(){
        $(this).slideUp(500);
    });

    $('.abz3').click(function(){
        $(this).slideUp(500);
    });

    $('.abz2').click(function(){
        $(this).css('color', 'yellow')
    });

    // ---------9---------

    $('.chng_bckgrnd').click(function(){
        click++
        if(click == 1){
            $('.wrapper').css('background-color', 'pink');
        }else if(click == 2){
            $('.wrapper').css('background-color', 'green');
        }else if(click == 3){
            $('.wrapper').css('background-color', 'aqua');
        }else if(click == 4){
            $('.wrapper').css('background-color', 'crimson');
            click = -1
        }else if(click == 0){
            $('.wrapper').css('background-color', 'white');
        }
    });

    // ---------10---------

    $('.ico1').click(function(){
        $(this).toggleClass('ico_style1')
    });

    $('.ico2').click(function(){
            $(this).toggleClass('ico_style2')
    });

    $('.ico3').click(function(){
            $(this).toggleClass('ico_style3')
    });

    $('.ico4').click(function(){
            $(this).toggleClass('ico_style4')
    });

    // ---------11---------

    $('.for_increase').click(function(){
        click++
        if(click % 2 != 0){
            $('.info_text').css('height', '740px');
        }else{
            $('.info_text').css('height', 'auto');
        }
        
    });

    // ---------12---------

    const paragraph1 = $('.par1').clone().removeClass();
    const paragraph2 = $('.par2').clone().removeClass();
    const paragraph3 = $('.par3').clone().removeClass();

    $('.par1').click(function(){
        click++
        if(click <= 3){
            $('.par1').after(function() {
                return paragraph1;
            });
        }
    });
     $('.par2').click(function(){
        click++
        if(click <= 3){
            $('.par2').after(function() {
                return paragraph2;
            });
        }
    });
    $('.par3').click(function(){
        click++
        if(click <= 3){
            $('.par3').after(function() {
                return paragraph3;
            });
        }
    });
    // ---------13---------

    $('.comm').click(function(){
        click++
        if(click % 2 != 0){
            $('.comm').css('color', 'crimson');
            alert('Нажмите ещё раз');
        }else{
            $('.comm').css('color', '#333333')
        }
    });
    // ---------14---------

    $('.categ1_text').click(function(){
        $('.categ1_text > span').css('display', 'block')
    });

    $('.categ2_text').click(function(){
        $('.categ2_text > span').css('display', 'block')
    });

    $('.categ3_text').click(function(){
        $('.categ3_text > span').css('display', 'block')
    });
    
    // ---------15---------

    const img_one_src = $('.img_one').attr('src');
    const img_two_src = $('.img_two').attr('src');

    console.log(img_one_src)
    let srcs = [img_one_src, img_two_src];

    $('.img_one').click(function(){
        click++
        if(click % 2 != 0){
            $('.img_one').attr('src', srcs[1]);
            $('.img_two').attr('src', srcs[0]);
        }else{
            $('.img_one').attr('src', srcs[0]);
            $('.img_two').attr('src', srcs[1]);
        }
    });

    $('.img_two').click(function(){
        click++
        if(click % 2 != 0){
            $('.img_one').attr('src', srcs[1]);
            $('.img_two').attr('src', srcs[0]);
        }else{
            $('.img_one').attr('src', srcs[0]);
            $('.img_two').attr('src', srcs[1]);
        }
    });

    // ---------16---------

    $('.categ_title1').click(function(){
        $(this).css('font-size', '28px');
        $(this).css('color', 'red');
        $(this).css('font-weight', '600');
    });

    $('.categ_title2').click(function(){
        $(this).css('font-size', '28px');
        $(this).css('color', 'red');
        $(this).css('font-weight', '600');
    });

    $('.categ_title3').click(function(){
        $(this).css('font-size', '28px');
        $(this).css('color', 'red');
        $(this).css('font-weight', '600');
    });

    // ---------17---------

    $('.left_btn').click(function(){
        $('.itm3').swap('.itm2');
        $('.itm2').swap('.itm1');
    });

    $('.right_btn').click(function(){
        $('.itm1').swap('.itm2');
        $('.itm2').swap('.itm3');
    });

    
    jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
};

    // ---------18---------

    // ---------19---------
    var p = $('.timer_txt');
    var timer;
    var seconds = 0;
    var minutes = 0;

    function time(){
        seconds++
        
        if(seconds >= 60){
            seconds = 0;
            minutes++
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            var color = 'rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')';
            console.log(color);
            p.css('color', color);
        }
        
    }
    
    function output_time(){
        time();

        if(seconds <= 9 && minutes <= 9){
            p.html('Таймер:<br>' + '0' + minutes + ':' + '0' + seconds);
        }else if(seconds > 9 && minutes <= 9){
            p.html('Таймер:<br>' + '0' + minutes + ':' + seconds);
        }else{
            p.html('Таймер:<br>' + minutes + ':' + seconds);
        }
        countdown();
    }

    function countdown(){
        timer = setTimeout(output_time, 1000);
    }

    countdown();
    
});
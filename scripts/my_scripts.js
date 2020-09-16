$(document).ready(function(){
    var clix = [0, 0, 0, 0];
    var int1, int2, int3;
    var w =367
    var m = 10;
    
    window.onblur = stopLightning;
    window.onfocus = goLightning;
    goLightning();

    function lightning_one() {
        $("#lightning1").fadeIn(250).fadeOut(250);
        
    };
    
    function lightning_two() {
        $("#lightning2").fadeIn(250).fadeOut(250);
        
    };
    
    function lightning_three() {
        $("#lightning3").fadeIn(250).fadeOut(250);
        
    };

    function goLightning(){
        int1 = setInterval(function(){
            lightning_one();
        },4000);
    
        int2 = setInterval(function(){
            lightning_two();
        },5000);
    
        int3 = setInterval(function(){
            lightning_three();
        },7000);
    }


    function stopLightning(){
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    }


    $("#head").click(function(){
        moveMe(0, this);
    });

    $("#eyes").click(function(){
        moveMe(1, this);
    });

    $("#nose").click(function(){
        moveMe(2, this);
    });

    $("#mouth").click(function(){
        moveMe(3, this);
    });

    function moveMe(i, obj){
        if(clix[i]<9){
            $(obj).animate({left:"-=367px"}, 500);
            clix[i] += 1;
        } else {
            clix[i] = 0;
            $(obj).animate({left:"0px"}, 500);
        }
    }

    function getRandom(num){
        var my_random_num = Math.floor(Math.random()*num);
        return my_random_num;
    }

    function randomize(){
        $(".face").each(function(index){
            var target_position = getRandom(m);
            var current_position = clix[index];
            clix[index] = target_position;
            if(target_position > current_position){
                var move_to = (target_position-current_position) * w;
                $(this).animate({left:"-="+move_to+"px"}, 500);
            } else if (target_position < current_position){
                move_to = (current_position-target_position) * w;
                $(this).animate({left:"+="+move_to+"px"}, 500);
            } else{
                //They are the same - Don't move it.
            }
        });
    };

    function reset(){
        $(".face").each(function(index){
            clix[index] = 0;
            $(this).animate({left:"0px"}, 500);
        });
    }

    $("#btnRandom").click( randomize ); 
        
    

    $("#btnReset").click( reset );

    
    

});//end doc.onready function


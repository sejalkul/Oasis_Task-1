(function(){
    let screen = document.querySelector('.screen');
    let buttons =document.querySelectorAll('.btn');
    let equal =document.querySelector('.btn-eq');
    let clear =document.querySelector('.btn-C');
    

    buttons.forEach(function(b){
        b.addEventListener('click',function(e){
            let val=e.target.dataset.num;
            screen.value+=val;
        })
    })

    equal.addEventListener('click',function(){
        if(screen.value===''){
            screen.value="Please Enter";
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })
    clear.addEventListener('click',function(){
        screen.value='';

    })

})();
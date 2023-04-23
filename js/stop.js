const tim1=document.getElementById('t1');
const star=document.getElementById('t2');
const stop1=document.getElementById('t3');
const end=document.getElementById('t4');

let sec=0;
let interval=null;
let secs=0;
let hrs=0;
let mins=0;

let hrs1="0";
let min1="00";
let sec1="00";
//event listener

tim1.innerHTML=hrs1+" : "+min1+" : "+sec1;
star.addEventListener('click',start);
stop1.addEventListener('click',stop2);
end.addEventListener('click',reset);

function timer(){
    sec++;
    secs=sec%60;
    hrs=Math.floor(sec/3600);
    mins=Math.floor(sec/60-hrs*60);

    if(hrs<10){
        hrs1="0"+String(hrs);
    }
    else{
        hrs1=String(hrs);
    }
    if(mins<10){
        min1="0"+String(mins);
    }
    else{
        min1=String(mins);
    }

    if(secs<10){
        sec1="0"+String(secs);
    }
    else{
        sec1=String(secs);
    }
    tim1.innerHTML=hrs1+" : "+min1+" : "+sec1;
}


function stop2(){
    console.log("stop is clicked");
    clearInterval(interval);
    interval=null;
}

function start(){
    if(interval){
        return ;
    }
    interval=setInterval(timer,1000);
}

function reset(){
    stop();
    sec= -1;
    clearInterval(interval);
    interval=null;
    
    timer();
}
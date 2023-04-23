let nd=new Date();
let tim=document.getElementById('time');

let a=nd.getHours();
let b=nd.getMinutes();
let str=a+" : "+b;
console.log(str);
tim.innerText=str;
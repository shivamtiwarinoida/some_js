let count1=document.getElementById('count');

let in1=document.getElementById("t2");
let de1=document.getElementById("t3");
let rs1=document.getElementById("t4");
let count=0;

in1.addEventListener('click',incre);

function incre(){
    console.log("incre called");
    count++;
    count1.innerText=count;
}
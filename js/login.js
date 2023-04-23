const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian =>{
    const ques1=accordian.querySelector('.question');
    const ans1=accordian.querySelector('.answer');

    ques1.addEventListener('click',()=>{
        if(ans1.style.display=='block'){
            ans1.style.display='none';
        }
        else{
            ans1.style.display='block';
        }
    })
})
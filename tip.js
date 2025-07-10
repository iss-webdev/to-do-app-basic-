let inputAmount = document.querySelector('.amount');
let tip = document.querySelector('.tiper');
let btn = document.querySelector('.calc');
let answer = document.querySelector('.ans');

btn.addEventListener('click', () =>{
    let amountt = Number(inputAmount.value); 
    let tipperr = Number(tip.value); 

    if(!amountt || !tipperr){
        alert('please enter a number');
        return;
    }

    let answerr = (amountt * tipperr)/100; 

    let total = amountt + answerr;

    answer.textContent = `your total is $ ${total} & your tip amount is $ ${answerr}`



    
})

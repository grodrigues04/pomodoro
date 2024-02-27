let breakTimeDiv = document.querySelectorAll('.config-focus-time-container');
for(let i=0; i<breakTimeDiv.length;i++){
    increaseNumber = breakTimeDiv[i].querySelector('.increase-timer')
    decreaseNumber = breakTimeDiv[i].querySelector('.decrease-timer')
    increaseNumber.addEventListener('click',function(e){
        increase(e.target.parentNode)
    });
    decreaseNumber.addEventListener('click',function(e){
        decrease(e.target.parentNode)
    });
}

function increase(e){
    let total = e.querySelector('.total-timer');
    let valor = Number(total.textContent); // ou total.innerText;
    total.innerHTML = valor+1
}   
function decrease(e){
    let total = e.querySelector('.total-timer');
    let valor = Number(total.textContent); // ou total.innerText;
    if(valor!==0){
        total.innerHTML = valor-1
    }
    else{
        total.innerHTML = 0

    }
}

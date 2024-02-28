let breakTimeDiv = document.querySelectorAll('.config-focus-time-container');
let buttonStart = document.querySelector('.start');
let buttonReset = document.querySelector('.reset');

let timeDisplay = document.querySelector('.time-display')
let minuts = timeDisplay.querySelector('.minuts')
let seconds = (timeDisplay.querySelector('.seconds'));
let dot = (timeDisplay.querySelector('.dot').textContent);

let increaseSeconds = -1
let timeText = Number(timeDisplay.textContent);
let intervalID = null;


console.log(timeDisplay)
buttonStart.addEventListener('click',function(){
    console.log('fui clicado')
    if(!intervalID){
        minuts.innerHTML = `${UserSelectTotalTIme()-1}`
        minutsNumber = (UserSelectTotalTIme())
        seconds.innerHTML = 59
        secondsNumber = 59
        intervalID = setInterval(updateTime,1000);
        console.log(intervalID)
}})
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
    let valor = Number(total.textContent); 
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
function UserSelectTotalTIme(){ //function to always take the update time selected by user
    return totalTime = Number(document.querySelector('.timerSection').textContent);
}

function updateTime(){
    let secondsRemaing = Number(seconds.textContent);
    let minutsRemaing = Number(minuts.textContent);
    if(secondsRemaing!== 0){
        seconds.innerHTML = secondsRemaing-1
    }
    else{
        minuts.innerHTML = minutsRemaing-1;
        seconds.innerHTML = 59;
        secondsRemaing = 59;
    }
}

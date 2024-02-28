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


buttonStart.addEventListener('click',function(){
    if(!intervalID){
        minuts.innerHTML = `${UserSelectTotalTIme()-1}`
        minutsNumber = (UserSelectTotalTIme())
        seconds.innerHTML = 12 //colocar 59 depois
        secondsNumber = 12
        intervalID = setInterval(updateTime,1000);

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

function fixTimeMinorTen(section, timeRemaning){
    const totalTime = '0'+timeRemaning;
    section.innerHTML = totalTime;
}
function updateTime(){
    let secondsRemaing = Number(seconds.textContent);
    console.log(secondsRemaing)
    let minutsRemaing = Number(minuts.textContent);
    if(secondsRemaing!== 0){
        if(secondsRemaing <= 10){
            fixTimeMinorTen(seconds,(secondsRemaing-1))
        }else{
            seconds.innerHTML = secondsRemaing-1
        }
    }
    else{
        if(minutsRemaing <= 10){
            fixTimeMinorTen(minuts,(minutsRemaing-1))
        }
        seconds.innerHTML = 59;
        secondsRemaing = 59;
        }
}


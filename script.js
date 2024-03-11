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
let stopID = null;


buttonStart.addEventListener('click',function(){
    if(!intervalID){
        minuts.innerHTML = `${UserSelectTotalTIme()-1}`;
        minutsNumber = (UserSelectTotalTIme());
        [secondsRemaing,minutsRemaing] = timeRemaning();
        (minutsRemaing <= 10) ? fixTimeMinorTen(minuts, minutsRemaing) : null; // operador ternario.
        console.log(minutsRemaing,secondsRemaing)
        buttonStart.textContent = 'Pause';
        seconds.innerHTML = secondsRemaing?secondsRemaing:59;
        secondsNumber = secondsRemaing?secondsRemaing:59;
        intervalID = setInterval(updateTime,1000);                   
    }
    else{
        clearInterval(intervalID);
        intervalID = null;
        stopID = null;
        buttonStart.textContent = 'Start';
    }

})

buttonReset.addEventListener('click',function(){ //function to "reset"
    clearInterval(intervalID);
    intervalID = null;
    stopID = null;
    buttonStart.textContent = 'Start';
    minuts.innerHTML = UserSelectTotalTIme();
    seconds.innerHTML = "00";
})

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
    if(valor!==1){
        total.innerHTML = valor-1
    }
    else{
        total.innerHTML = 1

    }
}
function UserSelectTotalTIme(){ //function to always take the update time selected by user
    return totalTime = Number(document.querySelector('.timerSection').textContent);
}

function fixTimeMinorTen(section, timeRemaning){
    const totalTime = '0'+timeRemaning;
    section.innerHTML = totalTime;
}

function timeRemaning(){ // tempo restante no temporizador
    let secondsRemaing = Number(seconds.textContent);
    let minutsRemaing = Number(minuts.textContent);
    return [secondsRemaing, minutsRemaing];
}



function updateTime(){ //da pra transformar tudo isso aqui em varias funções separadas 
    [secondsRemaing,minutsRemaing] = timeRemaning();
    console.log(minutsRemaing,secondsRemaing)
    if(secondsRemaing!== 0){
        if(secondsRemaing <= 10){
            fixTimeMinorTen(seconds,(secondsRemaing-1))
        }else{
            seconds.innerHTML = secondsRemaing-1
        }
    }
    else{
        if(minutsRemaing===0){
            console.log('entrou aqui ===0')
            clearInterval(intervalID)
            intervalID = null;
            return stop(intervalID)
        }else if(minutsRemaing <= 10){
            console.log('entrou aqui')
            fixTimeMinorTen(minuts,(minutsRemaing-1))

        }else{
            console.log('entrou aqui-1')
            minuts.innerHTML = minutsRemaing-1;
        }
        seconds.innerHTML = 59;
        secondsRemaing = 59;
        }
}
let stopId = null;
function stop(){
    stopId = setInterval(function(){
        let color = timeDisplay.style.color;
        timeDisplay.style.color = color == "red" ? "blue":"red";
    },1000);
    setTimeout(function(){
        console.log('parando o pisca pisca')
        clearInterval(stopId);
        timeDisplay.style.color = 'black'
    },5000)
    
}
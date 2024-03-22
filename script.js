let currentSession = document.querySelector('.session')
let breakTimeDiv = document.querySelectorAll('.config-focus-time-container');
let buttonStart = document.querySelector('.start');
let buttonReset = document.querySelector('.reset');

let timeDisplay = document.querySelector('.time-display')
let minuts = timeDisplay.querySelector('.minuts')
let seconds = (timeDisplay.querySelector('.seconds'));
let dot = (timeDisplay.querySelectorAll('.dot').textContent);

let increaseSeconds = -1
let timeText = Number(timeDisplay.textContent);
let intervalID = null;
let stopID = null;
let dialogOk = document.querySelectorAll('.DialogOK')


const modalOne = document.querySelector(".fristDialog")
const lastModal = document.querySelector(".LastDialog")
buttonStart.addEventListener('click',function teste(){ //function "start"
    if(!intervalID){
        decreaseTime('.timerSection')  //function to only decrease time of main painel                 
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
    minuts.innerHTML = UserSelectTotalTIme('.timerSection');
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

function decreaseTime(sessionToTake){
    minuts.innerHTML = `${UserSelectTotalTIme(sessionToTake)-1}`; //minuts, minutsNumber...tem que agora virar parametro
    minutsNumber = (UserSelectTotalTIme(sessionToTake));
    [secondsRemaing,minutsRemaing] = timeRemaning();
    (minutsRemaing <= 10) ? fixTimeMinorTen(minuts, minutsRemaing) : null; // operador ternario.
    console.log(minutsRemaing,secondsRemaing)
    buttonStart.textContent = 'Pause';
    seconds.innerHTML = secondsRemaing?secondsRemaing:59;//tem tempo restante ?se sim, coloca ele. Se n é 59
    secondsNumber = secondsRemaing?secondsRemaing:59;
    intervalID = setInterval(updateTime,1000);
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
function UserSelectTotalTIme(painelSession){ //function to always take the update time selected by user
    return totalTime = Number(document.querySelector(painelSession).textContent);
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
            clearInterval(intervalID)
            intervalID = null;
            return stop(intervalID)
        }else if(minutsRemaing <= 10){
            console.log('entrou aqui')
            fixTimeMinorTen(minuts,(minutsRemaing-1))

        }else{
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
        timeDisplay.style.color = 'black';
    },5000)
    breakTime()
}

function extraTime(){
    window.alert()
}
let extraTimeIDsetInterval = null;
let timepassed = 1;
let testTime = document.querySelector('.testTime');
function breakTime(){
    extraTimeIDsetInterval = setInterval(function(){
        timepassed++
        timepassed
    },1000);
    modalOne.showModal()
}
console.log(dialogOk)
dialogOk[0],dialogOk[1].addEventListener('click',function(e){ //melhorar essa lógica
    modal = e.target.parentNode.className;
    console.log(modal)
    if(modal==="fristDialogContent"){
        modalOne.close()
        extraTimeIDsetInterval = null;
        testTime.innerHTML = timepassed;
        lastModal.showModal()
    }
    else if(modal==="LastModal"){
        lastModal.close()
    }
})


/* to do:
    adicionar número na "session" para mostrar o tempo total.
    criar logica para break time e repeat focus
    ^^, acredito que nao vai ser muito dificil, mas scripts são maldozos
*/

/*
Linha 18 até a 34 deve ser separada em uma função especial
essa função deve ser uma função de especialidade para façar o decremento do tempo. Apenas isso
Não importa se seja decremento da pausa, ou decremento do tempo de foco
AddEventListener não deve ter tanta especialidade

*/

/*
Fluxo da dreaseTime
Decrease time agora vai receber um parametro, indicando que é utilizado para a função
"UserSelectTotalTIme" para pegar a info atualizada do break ou time
Assim, utilizamos a função decreaseTime com a especialidade em diminuir o tempo
do painel principal

*/
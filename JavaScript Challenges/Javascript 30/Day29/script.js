let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const playPause = document.querySelector('#start-stop');
let secondsLeft;
let timerStart = false;

function timer(seconds)
{
    clearInterval(countdown);//clear all previous timers
    timerStart = true;
    const now = Date.now() ;    // milliseconds
    const then = (seconds * 1000) + now ;

    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(()=>{
        secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft < 0)
        {
            timerStart = false;
            clearInterval(countdown);
            return;
        }
        
        displayTimeLeft(secondsLeft);

    },1000)

}

function displayTimeLeft(seconds)
{
    const hours = Math.floor(seconds / 3600) ;
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60) ;
    const remainerSeconds = seconds % 60;

    const displayTime = `${hours<10&&hours>0?'0':''}${hours>0?hours+':':''}${minutes<10 ? '0' : ''}${minutes}:${remainerSeconds<10 ? '0' : ''}${remainerSeconds}`;
    document.title = displayTime;
    timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp)
{
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hours > 12 ? hours-12 : hours}:${minutes<10 ? '0': ''}${minutes}`;
}

function startTimer()
{
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer) )
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();
})


playPause.addEventListener('click', (e)=> {
    if(timerStart)
    {
        clearInterval(countdown);
        timerStart = false;
    }
    else
    {
        timer(secondsLeft)
    }
})

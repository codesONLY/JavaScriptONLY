const player = document.querySelector('.player')
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

// functions
function togglePlay()
{
    if(video.paused)
    {
        video.play();

    }
    else
    {
        video.pause();
    }
}

function updateButton(){
    // const icon = this.paused ? '►' : '❚ ❚';
    // toggle.textContent = icon;
    const icon = this.paused ? '►' : '<b>||</b>';
    toggle.innerHTML = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this);
}

function handleProgress(){
    const percent = ( video.currentTime / video.duration ) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    let scrubTime = ( e.offsetX / progress.offsetWidth ) * video.duration ;
    video.currentTime = scrubTime;
    console.log(e);
}



// eventListeners

// 1.play/pause button
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

window.addEventListener('keydown', (e) => {
    if(e.key === " ")
    {
        togglePlay();
        updateButton();
    }
});

toggle.addEventListener('click', togglePlay);

// skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

window.addEventListener('keydown',(e) => {
    if(e.key === "ArrowLeft")
    {
        skipButtons[0].click();
    }
    if(e.key === "ArrowRight")
    {
        skipButtons[1].click();
    }
})

// range inputs
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

// progressBar
video.addEventListener('timeupdate', handleProgress)

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e) );
progress.addEventListener('mousedown', () => mousedown = true );
progress.addEventListener('mouseup', () => mousedown = false );

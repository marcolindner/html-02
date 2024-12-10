console.log('Hallo Welt!')

const videoElm = document.getElementById('video');
const playButton = document.getElementById('playbutton');
const muteButton = document.getElementById('mutebutton');
const fullscreenButton = document.getElementById('fullscreenbutton')

playButton.addEventListener("click", function () {
    if (videoElm.paused) {
        videoElm.play();
        playButton.innerText = "Pause";
    } else {
        videoElm.pause();
        playButton.innerText = "Play";
    }
})

muteButton.addEventListener('click', function () {
    if (videoElm.muted) {
        videoElm.volume = 1.0
        muteButton.innerText = "Mute"
    } else {
        videoElm.volume = 0.0
        muteButton.innerText = "Unmute"
    }

})

fullscreenButton.addEventListener('click', function () {
    videoElm.requestFullscreen();
})


document.addEventListener('mousemove', function (event) {
    console.log('Mouse Move', event.clientX, event.clientY)

})



console.log('VideoElm:', videoElm);
console.log('PlayButton:', playButton);
console.log('stopButton:', stopButton);
console.log('muteButton:', muteButton);
console.log('fullscreenButton:', fullscreenButton);


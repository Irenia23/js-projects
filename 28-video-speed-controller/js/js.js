var speed, speedBar;

window.onload = function() {
    speed = document.querySelector('.speed');
    speedBar = document.querySelector('.speed-bar');
    video = document.querySelector('.flex');

    speed.addEventListener('mousemove', handleSpeed);
}

function handleSpeed(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const rate = percent * (max - min) + min;
    speedBar.style.height = height;
    speedBar.textContent = rate.toFixed(2) + 'x';
    video.playbackRate = rate;
}
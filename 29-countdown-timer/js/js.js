var timerDisplay, endTime, buttons, countdown;

window.onload = function() {
    timerDisplay = document.querySelector('.display__time-left');
    endTime = document.querySelector('.display__end-time');
    buttons = document.querySelectorAll('[data-time]');
    buttons.forEach(button => button.addEventListener('click', startTimer));
    document.customForm.addEventListener('submit', getMinutes);
}

function timer(seconds) {
    // Remover los timers existentes
    clearInterval(countdown);

    const now = Date.now();
    const then = (now + seconds * 1000);
    showTimeLeft(seconds);
    showEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // Verificar si hay que detener el timer
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        // Mostrar los minutos restantes
        showTimeLeft(secondsLeft)
    }, 1000);
}

function showTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = (seconds % 60);
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function showEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const formatHour = hour > 12 ? (hour - 12) : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${formatHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

function getMinutes(e) {
    e.preventDefault();
    mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
}
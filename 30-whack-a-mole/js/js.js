var holes, scoreBoard, moles, button, done, lastHole, timeUp = false, score = 0;

window.onload = function() {
    holes = document.querySelectorAll('.hole');
    scoreBoard = document.querySelector('.score');
    moles = document.querySelectorAll('.mole');
    button = document.querySelector('.js-button');

    moles.forEach(mole => mole.addEventListener('click', earnPoint));
}

function startGame(time) {
    button.disabled = true;
    resetValues();
    popUp();
    setTimeout(() => {
        timeUp = true;
        button.disabled = false;
    }, (time * 1000));
}

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(list) {
    const index = Math.floor(Math.random() * list.length);
    const hole = list[index];
    if (hole === lastHole) {
      return randomHole(list);
    }
    lastHole = hole;
    return hole;
}

function popUp() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) popUp();
    }, time);
}

function earnPoint(e) {
    if(!e.isTrusted) return;
    score ++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

function resetValues() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
}
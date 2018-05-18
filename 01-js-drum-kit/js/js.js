// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);

// ****************************************************************************

function playAudio(event){
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`); // Otra manera---> 'div[data-key="'+event.keyCode+'"]'
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if(key){
    key.classList.add('play');
    sound.currentTime = 0;
    sound.play();   
  }
}

function noEffect(event){
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if(key){
    key.classList.remove('play'); 
  }
}

window.onload = function(){
  document.addEventListener('keydown', playAudio);
  document.addEventListener('keyup', noEffect);
}
    
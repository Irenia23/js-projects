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
    
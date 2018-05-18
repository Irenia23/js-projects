var msg = new SpeechSynthesisUtterance, voicesDropdown, options, speakButton, stopButton;
let voices = [];

window.onload = function() {
  voicesDropdown = document.querySelector('[name="voice"]');
  options = document.querySelectorAll('[type="range"], [name="text"]');
  speakButton = document.querySelector('#speak');
  stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  speakButton.addEventListener('click', speak);
  stopButton.addEventListener('click', stop);
  voicesDropdown.addEventListener('change', changeVoice);
  options.forEach(option => option.addEventListener('change', setRatePitch));
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function loadVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('es'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  getVoice();
}

function speak() {
  stop();
  speechSynthesis.speak(msg);
}

function stop() {
  speechSynthesis.cancel();
}

function changeVoice() {
  getVoice();
  speak();
}

function getVoice() {
  msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
}

function setRatePitch() {
  msg[this.name] = this.value;
  speak();
}
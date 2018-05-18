var recognition, words, p;

window.onload = function() {
  words = document.querySelector('.words');
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  initRecognition();
  addParagraph();
  recognition.addEventListener('result', writeResults);
  recognition.addEventListener('end', recognition.start);
}

function initRecognition() {
  recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'es-CO';
  recognition.start();
}

function writeResults(e) {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript.replace(/cangrejo/gi, '🦀');

  if (e.results[0].isFinal) {
    addParagraph();
  }
}

function addParagraph() {
  p = document.createElement('p');
  words.appendChild(p);
}

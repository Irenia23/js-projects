var links, span;

window.onload = function() {
  links = document.querySelectorAll('a');
  addSpan();
  links.forEach(link => link.addEventListener('mouseenter', effect));
}

function effect() {
  coords = this.getBoundingClientRect();
  span.style.width = `${coords.width}px`;
  span.style.height = `${coords.height}px`;
  span.style.transform = `translate(${coords.left + window.scrollX}px, ${coords.top + window.scrollY}px)`;
}

function addSpan() {
  span = document.createElement('span');
  document.body.append(span);
  span.classList.add('highlight');
}
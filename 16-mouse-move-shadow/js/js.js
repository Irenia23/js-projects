var hero;
const path = 500;

window.onload = function() {
  hero = document.querySelector('.js-hero');
  text = document.querySelector('.js-text');
  hero.addEventListener('mousemove', moveShadow);
}

function moveShadow(e) {
  const {offsetWidth : width, offsetHeight : height} = hero;
  let {offsetX : x, offsetY : y} = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xPath = Math.round((x / width * path) - (path / 2));
  const yPath = Math.round((y / height * path) - (path / 2));

  text.style.textShadow = `
      ${xPath}px ${yPath}px 0 rgba(255,0,255,0.7),
      ${xPath * -1}px ${yPath}px 0 rgba(0,255,255,0.7),
      ${yPath}px ${xPath * -1}px 0 rgba(0,255,0,0.7),
      ${yPath * -1}px ${xPath}px 0 rgba(0,0,255,0.7)
    `;
}
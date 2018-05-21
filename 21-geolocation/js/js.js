var arrow, speed;

window.onload = function() {
  arrow = document.querySelector('.arrow');
  speed = document.querySelector('.speed-value');
  setPosition();  
}

function setPosition() {
  navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (err) => {
    console.log(err);
    alert('Sorry! You have to allow access for geolocation');
  });
}
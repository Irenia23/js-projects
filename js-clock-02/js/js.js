function runTime(){

  const secHand = document.querySelector('.clock-second-hand');
  const minHand = document.querySelector('.clock-min-hand');
  const hourHand = document.querySelector('.clock-hour-hand');
  
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = (((second / 60) * 360) + 90);

  const min = now.getMinutes();
  const minDegrees = (((min / 60) * 360) + ((second/60)*6) + 90);

  const hour = now.getHours();
  const hourDegrees = (((hour / 12) * 360) + ((min/60)*30) + 90);

  secHand.style.transform = 'rotate('+secondDegrees+'deg)';
  minHand.style.transform = 'rotate('+minDegrees+'deg)';
  hourHand.style.transform = 'rotate('+hourDegrees+'deg)';

  // console.log(hour + " " + min + " " + second);
}

window.onload = function(){  
  setInterval(runTime, 1000); 
}
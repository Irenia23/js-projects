// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// const seconds = timeNodes
//   .map(node => node.dataset.time)
//   .map(timeCode => {
//     const [mins, secs] = timeCode.split(':').map(parseFloat);
//     return (mins * 60) + secs;
//   })
//   .reduce((total, vidSeconds) => total + vidSeconds);

//   let secondsLeft = seconds;
//   const hours = Math.floor(secondsLeft / 3600);
//   secondsLeft = secondsLeft % 3600;

//   const mins = Math.floor(secondsLeft / 60);
//   secondsLeft = secondsLeft % 60;

//   console.log(hours, mins, secondsLeft);

//   Otra manera de convertir el array => times = [].slice.call(document.querySelectorAll('[data-time]')).map((item) => item.dataset.time); 


window.onload = function() {
  times = Array.from(document.querySelectorAll('[data-time]')).map((item) => item.dataset.time);
  var totalSeconds = getTotal(times);
  showTotal(totalSeconds);
}

function getTotal(array) {
  return array.map(item => {
                const [mins, secs] = item.split(":").map(parseFloat);
                return ((mins * 60) + secs);
                })
              .reduce((now, next) => {
              return now + next;
  });
}

function showTotal(totalSeconds) {
  secondsLeft = totalSeconds;
  hours = Math.floor(secondsLeft / 3600);
  secondsLeft = (secondsLeft % 3600);
  minutes = Math.floor(secondsLeft / 60);
  seconfdsLeft = (secondsLeft % 60);

  console.log(hours,minutes,seconfdsLeft);
}
// const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }

// const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// document.querySelector('#bands').innerHTML =
//   sortedBands
//     .map(band => `<li>${band}</li>`)
//     .join('');

// console.log(sortedBands);

var ordered, list;

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
              'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
              'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
              'An Old Dog'];

ordered = bands.sort((a, b) => replace(a) > replace(b) ? 1 : -1);

window.onload = function() {
  list = document.querySelector('.js-list');
  addItems();
}

function addItems() {
  list.innerHTML = ordered.map((item) => `<li>${item}</li>`).join('');
}

function replace(name) {
  return name.replace(/^(a |the |an )/i, '').trim();
}
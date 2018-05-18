/*
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
*/

// ***********************************************************************************************

var data;

const requestURL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  data = request.response;
}

window.onload = function() {

  var input = document.querySelector('.js-input');
  var lista = document.querySelector('.js-suggestions');

  input.oninput = show;

  function show() {

    if ((this.value == "") && (lista)) {
        
      removeItems();        
      addDefaultItems();

    } else {

      removeItems();
      addItems();  
    }

    // Functions
    // **************************************************************************************

    function removeItems() {
        while(lista.firstChild){
          lista.removeChild(lista.firstChild);
        }
    }

    function addDefaultItems() {

        var itemCity = document.createElement("li");
        itemCity.appendChild(document.createTextNode("Filter for a city"));
        lista.appendChild(itemCity);

        var itemState = document.createElement("li");
        itemState.appendChild(document.createTextNode("or a state"));
        lista.appendChild(itemState);
    }

    function addItems() {
      search = input.value.toLowerCase();
      
      for(item in data) {
        if ((data[item].city.toLowerCase().includes(search)) || (data[item].state.toLowerCase().includes(search))) {

          var li = document.createElement("li");
          var span = document.createElement('span');
          li.appendChild(document.createTextNode(data[item].city + ", " + data[item].state));
          span.innerHTML = numberWithCommas(data[item].population);
          span.classList.add('population');
          li.appendChild(span);
          lista.appendChild(li);  
        }
      }
    }
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
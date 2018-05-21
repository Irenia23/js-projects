// const addItems = document.querySelector('.add-items');
//   const itemsList = document.querySelector('.plates');
//   const items = JSON.parse(localStorage.getItem('items')) || [];

//   function addItem(e) {
//     e.preventDefault();
//     const text = (this.querySelector('[name=item]')).value;
//     const item = {
//       text,
//       done: false
//     };

//     items.push(item);
//     populateList(items, itemsList);
//     localStorage.setItem('items', JSON.stringify(items));
//     this.reset();
//   }

//   function populateList(plates = [], platesList) {
//     platesList.innerHTML = plates.map((plate, i) => {
//       return `
//         <li>
//           <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
//           <label for="item${i}">${plate.text}</label>
//         </li>
//       `;
//     }).join('');
//   }

//   function toggleDone(e) {
//     if (!e.target.matches('input')) return; // skip this unless it's an input
//     const el = e.target;
//     const index = el.dataset.index;
//     items[index].done = !items[index].done;
//     localStorage.setItem('items', JSON.stringify(items));
//     populateList(items, itemsList);
//   }

//   addItems.addEventListener('submit', addItem);
//   itemsList.addEventListener('click', toggleDone);

//   populateList(items, itemsList);

var addItems = [], itemsList = [], items = JSON.parse(localStorage.getItem('items')) || [];;

window.onload = function() {
  addItems = document.querySelector('.js-form');
  itemsList = document.querySelector('.plates');
  
  loadItems(items, itemsList);
  addItems.addEventListener('submit', addLi);
  itemsList.addEventListener('click', listenItems);
}

function addLi(e) {
  if (e.target.type = "submit") {
    items.push({text: addItems[0].value, done: false});
    loadItems(items, itemsList);
    if (window.localStorage) localStorage.setItem('items', JSON.stringify(items));
  }
  e.preventDefault();
}

function listenItems(e) {
var target = e.target;

  if (target.className == 'js-label') {
    checkbox = target.parentNode.querySelector("input[type=checkbox]");
    checkbox.checkbox = !checkbox.checkbox;
    items[checkbox.getAttribute("data-id")].done = !items[checkbox.getAttribute("data-id")].done;
    localStorage.setItem('items', JSON.stringify(items));
    loadItems(items, itemsList);
  }
}

function loadItems(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-id=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label class="js-label" for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

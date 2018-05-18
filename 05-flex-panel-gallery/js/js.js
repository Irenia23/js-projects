// const panels = document.querySelectorAll('.panel');

//     function toggleOpen() {
//       console.log('Hello');
//       this.classList.toggle('open');
//     }

//     function toggleActive(e) {
//       console.log(e.propertyName);
//       if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active');
//       }
//     }

//     panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//     panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


window.onload = function(){
  const panels = document.querySelectorAll('.js-panel');
  panels.forEach(panel => panel.addEventListener('click', openPanel));
  panels.forEach(panel => panel.addEventListener('transitionend', activePanels));
}
    
function openPanel() {
    this.classList.toggle('open'); 
}

function activePanels(event) {
    console.log(event.propertyName);
    if (event.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    } 
}


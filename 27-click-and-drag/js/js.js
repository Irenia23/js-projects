var slider, isDown = false, startX, scrollLeft;

window.onload = function() {
    slider = this.document.querySelector('.items');

    slider.addEventListener('mousedown', down);
    slider.addEventListener('mouseleave', leave);
    slider.addEventListener('mouseup', up);    
    slider.addEventListener('mousemove', scroll);    
}

function down(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}
  
function leave() {
    isDown = false;
    slider.classList.remove('active');
}

function up() {
    isDown = false;
    slider.classList.remove('active');
}

function scroll(e) {
    if (!isDown) return; //Detiene la función
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
}
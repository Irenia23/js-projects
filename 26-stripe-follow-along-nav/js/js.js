var items, background, nav;

window.onload = function() {
	items = document.querySelectorAll('.cool > li');
	background = document.querySelector('.js-dropdown');
	nav = document.querySelector('.top');

	items.forEach(link => link.addEventListener('mouseenter', addEffect));
	items.forEach(link => link.addEventListener('mouseleave', removeEffect));
}

function addEffect() {
	dropdown = this.querySelector('.dropdown');
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
	background.classList.add('open');
	
	coords = dropdown.getBoundingClientRect();
	navCoords = nav.getBoundingClientRect();

	background.style.width = `${coords.width}px`;
	background.style.height = `${coords.height}px`;
	background.style.setProperty('transform', `translate(${coords.left - navCoords.left}px, ${coords.top - navCoords.top}px)`);
}

function removeEffect() {
	background.classList.remove('open');
	this.classList.remove('trigger-enter', 'trigger-enter-active');
}
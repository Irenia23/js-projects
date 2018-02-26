var spacing, blur, background, image, hl;

window.onload = function(){
  spacing = document.querySelector('.js-spacing');
  blur = document.querySelector('.js-blur');
  base = document.querySelector('.js-base');
  image = document.querySelector('.js-image');
  hl = document.querySelector('.js-hl');

  spacing.addEventListener('change', customPadding);
  spacing.addEventListener('mousemove', customPadding);

  blur.addEventListener('change', customBlur);
  blur.addEventListener('mousemove', customBlur);

  base.addEventListener('change', customBackground);
}

function customPadding(e){
  document.documentElement.style.setProperty('--spacing', spacing.value+'px');
}

function customBlur(e){
  document.documentElement.style.setProperty('--blur', blur.value+'px');
}

function customBackground(){
  document.documentElement.style.setProperty('--base', base.value);
}
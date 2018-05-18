var img, position;

window.onload = function() {
  images = document.querySelectorAll('.js-img');
  window.onscroll = debounce(handSlide);
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function handSlide(e) {
  images.forEach(img => {
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// return (
//   rect.top >= 0 &&
//   rect.left >= 0 &&
//   rect.bottom <= (window.innerHeight || html.clientHeight) &&
//   rect.right <= (window.innerWidth || html.clientWidth)
// );
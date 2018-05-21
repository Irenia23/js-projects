var lastChecked;

window.onload = function() {
  checks = document.querySelectorAll('.js-check');
  console.log(checks);
  checks.forEach(check => check.addEventListener('click', clickCheck));
}

function clickCheck(e) {
  between = false;
  if ((e.shiftKey) && (this.checked)) {
    checks.forEach(check => {
      if ((check === this) || (check === lastChecked)) {
        between = !between;
      }

      if (between) {
        check.checked = true;
      }
    });
  }
  lastChecked = this;
}
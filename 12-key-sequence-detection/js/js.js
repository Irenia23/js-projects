var keys = [];
var test = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
var secretCode = 'ireniavillalba';

window.onload = function() {
  console.log(test.splice(3, 2));
  document.addEventListener('keyup', getKey);
}

function getKey(e) {
  keys.push(e.key);
  keys.splice(-secretCode.length - 1, keys.length - secretCode.length);

  if (keys.join('').includes(secretCode)) {
    cornify_add();
  }
}
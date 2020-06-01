document.addEventListener('DOMContentLoaded', function(){

let input = document.querySelector('input');
function logConsole(event) {
    console.log(event.key);
  }
  input.addEventListener('keyup', logConsole);

});

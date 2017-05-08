var dropdown = document.getElementById('dropdown-menu');
var menu = document.getElementById('userMenu');
// Get the <span> element that closes the modal
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
dropdown.onclick = function() {
  menu.classList.toggle('active');
}
window.onclick = function(event) {
  if (event.target == menu) {
    menu.classList.toggle('active');
  }
}

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: '<img src="./img/icons/flecha-carrusel.png" class="slider-next cursor-pointer">',
  prevArrow: '<img src="./img/icons/flecha-carrusel-copy.png" class="slider-prev cursor-pointer">',
});
// Get the modal
var modal = document.getElementById('signModal');

// Get the button that opens the modal
var btn = document.getElementById("dashboardBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.classList.add('modal-open');
	body.classList.add('modal-open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.classList.remove('modal-open');
		body.classList.remove('modal-open');
	}
}
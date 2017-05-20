// Get the modal
var alertModal = document.getElementById('alertModal');

// Get the button that opens the modal
var offerBtn = document.getElementById("offerButton");
var closeItBtn = document.getElementById("closeItButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
offerBtn.onclick = function() {
	alertModal.classList.add('modal-open');
	console.log(body);
	body.classList.add('modal-open');
}
closeItBtn.onclick = function() {
	alertModal.classList.add('modal-open');
	body.classList.add('modal-open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	alertModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		alertModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
	}
}
function focusOnInput() {
	var element = document.getElementById('offerPercentage');
	console.log('element');
	element.focus();
	element.selectionStart = element.selectionEnd = element.value.length;
	setTimeout(function () { element.focus(); }, 1);
}
window.onload = function() {
	focusOnInput();
}
function removeHidden() {
	var hiddens = document.getElementsByClassName("hidden");
	var paddings = document.getElementsByClassName("fix-paddings");
		while (hiddens.length)
		    hiddens[0].classList.remove("hidden");
		while (paddings.length)
		    paddings[0].classList.remove("fix-paddings");
}
function greyHidden() {
	removeHidden();
	document.getElementById('hook-with').classList.add('hidden');
	document.getElementById('hook-container-without').classList.add('hidden');
	document.getElementById('hook-value-without').classList.add('hidden');
	document.getElementById('date-with').classList.add('hidden');
	document.getElementById('date-without').classList.add('hidden');
	document.getElementById('delivery-with').classList.add('hidden');
	document.getElementById('delivery-grey-without').classList.add('hidden');
	document.getElementById('delivery-container-without').classList.add('hidden');
	document.getElementById('hook-offer-container').classList.add('fix-paddings');
	document.getElementById('sign-date-container').classList.add('fix-paddings');
	document.getElementById('terms-container').classList.add('fix-paddings');
}
document.getElementById('withGrey').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withoutGrey').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withoutGrey').classList.remove('active');
	}
	withWhite = document.getElementById('withWhite');
	withoutWhite = document.getElementById('withoutWhite');
	if(withWhite.classList.contains('active')){
		removeHidden();
		document.getElementById('hook-without').classList.add('hidden');
		document.getElementById('hook-value-without').classList.add('hidden');
		document.getElementById('date-without').classList.add('hidden');
		document.getElementById('delivery-without').classList.add('hidden');
	}
	else if (withoutWhite.classList.contains('active')){
		removeHidden();
		document.getElementById('hook-with').classList.add('hidden');
		document.getElementById('hook-container-without').classList.add('hidden');
		document.getElementById('date-with').classList.add('hidden');
		document.getElementById('delivery-with').classList.add('hidden');
	}
});
document.getElementById('withoutGrey').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withGrey').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withGrey').classList.remove('active');
	}
	greyHidden();
});
document.getElementById('withWhite').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withoutWhite').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withoutWhite').classList.remove('active');
	}
	withGrey = document.getElementById('withGrey');
	withoutGrey = document.getElementById('withoutGrey');
	if(withGrey.classList.contains('active')){
		removeHidden();
		document.getElementById('hook-without').classList.add('hidden');
		document.getElementById('hook-value-without').classList.add('hidden');
		document.getElementById('date-without').classList.add('hidden');
		document.getElementById('delivery-without').classList.add('hidden');
	}
	else if (withoutGrey.classList.contains('active')){
		greyHidden();
	}
});
document.getElementById('withoutWhite').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withWhite').classList.remove('active');
		document.getElementById('hook-with').classList.add('hidden');
		document.getElementById('hook-without').classList.remove('hidden');
	} else {
		this.classList.add('active');
		document.getElementById('withWhite').classList.remove('active');
		document.getElementById('hook-with').classList.add('hidden');
		document.getElementById('hook-without').classList.remove('hidden');
	}
	withGrey = document.getElementById('withGrey');
	withoutGrey = document.getElementById('withoutGrey');
	if(withGrey.classList.contains('active')){
		removeHidden();
		document.getElementById('hook-with').classList.add('hidden');
		document.getElementById('hook-container-without').classList.add('hidden');
		document.getElementById('date-with').classList.add('hidden');
		document.getElementById('delivery-with').classList.add('hidden');
	}
	else if (withoutGrey.classList.contains('active')){
		greyHidden();
	}
});
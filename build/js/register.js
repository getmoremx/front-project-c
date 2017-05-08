document.getElementById('buyer').addEventListener('click', function () {
	document.getElementById('seller').classList.remove('active');
	document.getElementById('buyer').classList.add('active');
});
document.getElementById('seller').addEventListener('click', function () {
	document.getElementById('buyer').classList.remove('active');
	document.getElementById('seller').classList.add('active');
});
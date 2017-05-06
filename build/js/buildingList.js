var iconHeart = document.getElementsByClassName("icon-love");

for (var i = 0; i < iconHeart.length; i++) {
    iconHeart[i].addEventListener('click', function( e ){
	    e = window.event || e; 
	    if(this === e.target) {
	        e.preventDefault();
	        if(this.classList.contains('fa-heart-o')){
				this.classList.add('fa-heart');
				this.classList.remove('fa-heart-o');
			}
			else if (this.classList.contains('fa-heart')){
				this.classList.add('fa-heart-o');
				this.classList.remove('fa-heart');
			}
	    }
	});
}
function getVals(){
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat( slides[0].value );
  var slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
  var slider1 = document.getElementById('slider-1');
  var slider2 = document.getElementById('slider-2');
      slider1.innerHTML = slide1 + " MDP";
      slider2.innerHTML = slide2 + " MDP";
}

window.onload = function(){
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}

var municipality = document.getElementsByClassName("cierralo-municipality");

var toggleMunicipality = function() {
   if(this.classList.contains('active')){
		this.classList.remove('active');
	}
	else{
		this.classList.add('active');
	}
};

for (var i = 0; i < municipality.length; i++) {
    municipality[i].addEventListener('click', toggleMunicipality, false);
}
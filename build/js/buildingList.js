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
var municipality = document.getElementsByClassName("cierralo-municipality");
function municipalityClick() {
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
}
var sliderRangeValue = [];
municipalityClick();
$.ajax({
        url : 'https://demo6292426.mockable.io/c-properties',
        type: "GET",
        dataType: 'json',
        success:function(data) {
          var buildList = JSON.stringify(data);
          var locationFilter = $('div.cierralo-municipality.cierralo-font-helveltica-neue-light.cursor-pointer');
          for (var i = 0; i < data.Propiedades.length; i++) {
            console.log(data.Propiedades[i].colonia);
            $('.municipality-container').append('<div class="cierralo-municipality cierralo-font-helveltica-neue-light cursor-pointer">'+ data.Propiedades[i].colonia +'</div>');
            var services = '<div class="cierralo-end-container"><div class="cierralo-all-title cierralo-font-helveltica-medium">'+ data.Propiedades[i].calle +'</div><div class="cierralo-all-subtitle cierralo-font-helveltica-thin">'+ data.Propiedades[i].colonia +'</div><div class="cierralo-all-features cierralo-font-helveltica-medium"><p class="feature-text inline-block first-line">'+ data.Propiedades[i].metrosCuadrados +' m2</p><p class="feature-text inline-block middle-line">'+ data.Propiedades[i].cuartos +' cuartos</p><p class="feature-text inline-block middle-line">'+ data.Propiedades[i].toilets +' baños</p><p class="feature-text inline-block last-line">'+ data.Propiedades[i].PisoEnElQueSeEncuentra +' E</p></div></div>';
            var dudeInfo = '<div class="cierralo-inner-container"><div class="cierralo-all-face cierralo-font-helveltica-thin"><div class="cierralo-face-rounder" style="background: url(\'./img/dude.png\')"></div><p class="owner-name">José</p></div><div class="cierralo-all-fav"><i class="fa fa-heart-o icon-love" aria-hidden="true"></i></div><div class="cierralo-all-price">'+ data.Propiedades[i].precio.substring(1, 4) +' MDP</div>'+ services +'</div>';
            var buildBox = '<a class="cursor-pointer building-block-link" href="./buildingDetail.html?build='+i+'"><div class="cierralo-building-feature" style="background: url(\'https://habita.la/images/complete/28b972506123d81bd456afa35b2c37bc.JPG\');">'+ dudeInfo +'</div></a>'
            $('.cierralo-all-buildings').append(buildBox);
            sliderRangeValue.push(data.Propiedades[i].precio.substring(1, 4));
          }
          municipalityClick();
        }
      });
sliderRangeValue.sort();

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
            $('input[type=range]').val(sliderRangeValue[0]);
            $('input[type=range]').prop('min',sliderRangeValue[0]);
            $('input[type=range]').prop('max',sliderRangeValue.pop());
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}

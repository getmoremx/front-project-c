jQuery(document).ready(function() { 
    var dates = ['22/4/2017', '25/4/2017', '29/4/2017', '13/4/2017', '17/4/2017']; //
            //tips are optional but good to have
    var tips  = ['some description','some other description'];      

    $('#datepicker').datepicker({                
        dateFormat: 'dd/mm/yy',
        beforeShowDay: highlightDays
    });

    function highlightDays(date) {
        var m = date.getMonth();
        var d = date.getDate();
        var y = date.getFullYear();
        var calendarDate = d + '/' + m + '/' + y;
        for (var i = 0; i < dates.length; i++) {
            if (dates[i].toString() == calendarDate.toString()) {              
                return [true, 'scheduled-date', tips[i]];
            }
        }
        return [false, ''];
     } 
     $('.scheduled-date').on('click', function(event) {
      console.log('k');
      $('.orange-info-container').addClass('active');
      $('.schedule-address-container').addClass('active');
    });
});
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '<',
    nextText: '>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['D','L','M','M','J','V','S'],
    weekHeader: 'Sm',
    dateFormat: 'yy/mm/d',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['es']);
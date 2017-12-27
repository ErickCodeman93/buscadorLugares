window.addEventListener('load', function( event ) {
	var bandera = true;
	var marker2;
	//configuración maps
	var coordinates = { lat: 19.8201702, lng: -88.9066207 };
	var map = new google.maps.Map( document.getElementById('map'),{
				"center": coordinates,
				"zoom": 7,
	});
	//marcador de maps
	var maker1 = new google.maps.Marker({
		"map":map,
		"position":coordinates,
	});

	//petición al controlador para obtener coordenadas
	$('#formulario').submit(function( event ){
	event.preventDefault();
	maker1.setMap(null);
	var datosRecibidos = $(this).serialize();
	$.post("http://localhost/buscadorLugares/controllers/obtener.php", $('#formulario').serialize(), function(data){
		if (bandera) {
			bandera = false;	
		}else{
			marker2.setMap(null);	
		}
        console.log(data);
        var respuesta = data.msg;
        //Peticion de coordenadas
 		var coordinate = {lat: respuesta[0], lng:respuesta[1]};
		marker2 = new google.maps.Marker( {
		"map": map,
		"position": coordinate,
		} );
	
    });//fin del post
	
});//end query

	
	
		

},false);
function agregarCanciones(data){
	var $tabla=$("#tablaCuerpo");
	$tabla.empty();
		 	
	$.each(data.items, function(index, element) {
		$tabla.append(CrearTabla(element.track_number,element.name, element.preview_url));
	});

}

    CrearTabla=function(num,nombre,preview){
	 var $tr=$("<tr></tr>")
	 $tr.append("<td>"+num+"</td>"+"<td>"+nombre+"</td>"+"<td>"+"<audio src="+preview+" controls>Tu navegador no soporta audio</audio>"+"</td>");
	 return $tr;
	}

function miniatura(img,nombre,id){

	this.img=img;
	this.nombre=nombre;
	this.id=id;
	this.crearMiniatura=function (){

		var $miniatura=$("<div></div>");
		var $img=$("<img>")
		var $decCon=$("<div></div>");
		var $boton=$("<button>Abrir</button>");

		$miniatura.attr("class","thumbnail");
		$decCon.attr("class","caption text-center");
		$img.attr("src",this.img);
		$decCon.append("<h3>"+this.nombre+"</h3>");
		$boton.attr({
			"class":"btn btn-lg btn-block btn-primary center-block btn-Abrir",
			"type":"button",
			"data-toggle":"modal",
			"name" : this.id
		});
		$miniatura.append($img);
		$miniatura.append($decCon);
		$miniatura.append($boton);

		return $miniatura;
	}

}

function inicializarCuadros(data){
		var $albumnes=$("#div-albumnes");
		var $artistas=$("#div-artistas");
		var $canciones=$("#div-canciones");

		var $row=$("<div></div>");
		$row.attr("class","row");
		$row.attr( "id", "conFolder");
		

	 $.each(data.albums.items, function(index, element) {
    	var min= new miniatura(element.images[0].url,element.name,element.id);
    	var $col=$("<div></div>");
		$col.attr("class","col-md-4 col-xs-12 col-sm-6 col-lg-2");
		$col.append(min.crearMiniatura());
		$row.append($col);
		
	});
	
		$albumnes.append($row.clone());
		$artistas.append($row.clone());
		$canciones.append($row.clone());
}




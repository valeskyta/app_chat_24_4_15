function Chat(titulo, desc){
	this.titulo = titulo;
	this.desc = desc;
}
Chat.twits = [];

Chat.aceptar = function(e){
	e.preventDefault(e);
//obtener titulo y dscripcion, y agregar sus valores a un arreglo
	var titulo = document.getElementById('titulo').value;
	var desc = document.getElementById('desc').value;
	var twit = new Twit(titulo, desc);

	Chat.twits.push(twit);
	Chat.cancelar(e);
	Chat.mostrar();
	console.log(Chat.twits);
	// document.write(Twit.twits);

}

Chat.cancelar = function(e){
	e.preventDefault(); //previene el comportamiento por defecto del formulario que es enviarlo
	var titulo = document.getElementById('titulo');
	var desc = document.getElementById('desc');
	titulo.value = '';
	desc.value = '';

}

Chat.mostrar =function(){
	var comentarios = '';
	Chat.twits.map(function(elemento, indice){
		comentarios = comentarios + '<article>'
					+'<h2>' + elemento.titulo + '</h2>'
					+ '<p>' + elemento.desc + '</p>'
					+ '</article>';
	});
	document.getElementById('comentarios').innerHTML = comentarios;
}
// clase viernes 24-4-15
Chat.guardar = function(){
	var Chat = Twit.twits;
	var twitsEnCode = JSON.stringify(twits);
	localStorage.setItem('twits', twitsEnCode);
}

Chat.obtenerTwits = function(){
	var twitsEnCoded = localStorage.getItem('twits');
	var twits = JSON.parse(twitsEnCoded);
	Chat.twits = twits;
	console.log(twitsEnCoded);
	if(twitsEnCoded != null){
		var twits =JSON.parse(twitsEnCoded);
		Twit.twits = twits;
	}
	else{
		var twits = JSON.parse(twitsEnCoded);
		Twit.twits = [];

	}
}
Chat.obtenerTwits();
Chat.mostrar();


//Twit.imprimir(); //este si funciona. Metodo clase
// programacion orientada a eventos... metodos de clase
// clases con mayusculas, instancias con minusculas

// articulos son instancias
// metodos aceptar y cancelar
// aceptar va a generar nuevas instancias
// cancelar toma los input y cancelar los contenidos

// onclick='Twit.cancelar()' tiene parentesis por que es un metodo

// los elementos se iteran con punto map
// arr.map
function Chat(mensaje){
	this.mensaje = mensaje;
}
Chat.enviados = [];

Chat.enviar = function(e){
	e.preventDefault(e);
	var mensaje = document.getElementById('mensaje').value;
	var enviados = new Chat(mensaje);

	Chat.enviados.push(enviados);
	Chat.mostrar();
	console.log(Chat.enviados);
}

Chat.mostrar =function(){
	var comentarios = '';
	Chat.enviados.map(function(elemento, indice){
		comentarios = comentarios + '<article>'
					+'<h2>' + elemento.mensaje + '</h2>'
					+ '</article>';
	});
	document.getElementById('comentarios').innerHTML = comentarios;
}
Chat.guardar = function(){
	var Chat = Chat.enviados;
	var enviadosEnCode = JSON.stringify(enviados);
	localStorage.setItem('enviados', enviadosEnCode);
}

Chat.obtenerChat = function(){
	var enviadosEnCoded = localStorage.getItem('enviados');
	var enviados = JSON.parse(enviadosEnCoded);
	Chat.enviados = enviados;
	console.log(enviadosEnCoded);
	if(enviadosEnCoded != null){
		var enviados =JSON.parse(enviadosEnCoded);
		Chat.enviados = enviados;
	}
	else{
		var enviados = JSON.parse(enviadosEnCoded);
		Chat.enviados = [];

	}
}
Chat.obtenerChat();
Chat.mostrar();



//Twit.imprimir(); //este si funciona. Metodo clase
// programacion orientada a eventos... metodos de clase
// clases con mayusculas, instancias con minusculas

// articulos son instancias
// metodos enviar y cancelar
// enviar va a generar nuevas instancias
// cancelar toma los input y cancelar los contenidos

// onclick='Twit.cancelar()' tiene parentesis por que es un metodo

// los elementos se iteran con punto map
// arr.map
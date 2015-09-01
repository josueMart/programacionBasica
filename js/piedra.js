function patito(minimo,maximo){
	var numero=Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones=["Piedra","Papel","Tijeras"]

ar opcionUsuario;//variable para asignar los valores que ingresa el usuario
var opcionMaquina=patito(0,2);

opcionUsuario= prompt("Que eliges? \n Piedra:0\nPape:l\nTijeras:2",0); //Se presenta el menu de opcion en el prompt

alert("Elegiste"+opciones[opcionUsuario]);
alert("JavaScript eligió"+ opciones[opcionMaquina]);



if(opcionUsuario==piedra){ //se valida el valor del usuaio con el valor asignado para piedra
	if(opcionMaquina==piedra){
		alert("Empate");
	}
	else if(opcionMaquina ==papel){
		alert("Perdiste");

	}
	else if(opcionMaquina==tijera){
		alert("ganaste");
	}
	else if(opcionUsuario==papel){
		alert("empate");
	}
	else if(opcionMaquina==tijera){
		alert("Perdiste");
	}
}else if(opcionUsuario==tijera){
	if(opcionMaquina==piedra){
		alert("Perdiste");
	}else if(opcionMaquina==papel){
		alert("Ganaste!");
	}else if(opcionMaquina==tijera){
		alert("Empate");
	}
}else{
	alert("¿Pos que carajo?");
}
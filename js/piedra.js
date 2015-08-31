var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario= prompt("Que eliges? \n Piedra:0\nPape:l\nTijeras:2",0);

if(opcionUsuario==0){
	alert("Elegiste piedra");
}else if(opcionUsuario==1){
	alert("Elegiste papel");

}else if(opcionUsuario==2){
	alert("Elegiste tijeras!");

}else{
	alert("Error: solo debes elegir entre 0 y 2");
}
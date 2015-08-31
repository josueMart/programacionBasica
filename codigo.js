var peso;
var pesoEnMarte //CamelCase
alert("Quieres saber tu peso en marte?");
//promt es la ventana que aparece como alert pero pide un valor
peso=prompt("¿Cual es tu peso?","70");//el Valor "70" es el que aparece por default en el prompt
peso=Number(peso);//tambien se puede convertir el valor a numerico con parseInt

pesoEnMarte=(peso/9.81)*3.711;

alert("Tu peso en marte es :"+pesoEnMarte+" Kg.");

	// //alert: es una funcion
	// //(): parametros de la funcion
	// // "": Cadenas de texto
	// var nombre="Freddy";
	// var apellido="Vega";
	// var edad=28;
	// //alert(nombre+" "+apellido)+"\n"+edad+" años.";
	// alert("2"+5*8);


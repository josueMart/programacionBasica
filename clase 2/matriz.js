// var menu=["Productos","Ventas","Contacto"];//declaracion de un vector
// document.write(menu[2]);

// var dofa = [ ["Fuerza","Oportunidad"],["Debilidades","Amenazas"] ]; declaracion de matrices
// document.write(dofa[1] [1]);
function explosion(){
	alert("BOOM");
	document.write("<h1>Elegiste un area minada :(</h1>");
}

function ganaste(){
	document.write("Eres un ganador :)");
}
//1=Bomba, 0=No hay bomba
var campo=[[1,0,0],
		   [0,1,0],
		   [1,0,1]];
		  

var textos=["Cesped","Bomba"];

var x,y;
alert("Estas en un campo minado,\n"+
 "elige una posicion entre el 0 y 2 para X y Y");

x=prompt("Posicion en X? (entre 0 y 2)");
y=prompt("Posicion en Y? (Entre 0 y 2)");

if(x<=2&& y<=2){
	var posicion=campo[x][y];
	document.write("Elegiste "+textos[posicion]+"<br/>");
	if(posicion==1){
		explosion();

	}else{
		ganaste();
	}
}else{
	document.write("Te saliste del campo");
	explosion();
}

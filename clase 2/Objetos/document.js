
function Pokemon(){
	var estructuraPokemon= {
	nombre:"Pikachu",
	tipo: "ELectrico",
	vida:100,
	ataque:55
}; 
	return estructuraPokemon;
}

var pikachu=Pokemon;
var bulbasaur=Pokemon;
bulbasaur.nombre="Bulbasaur";
bulbasaur.tipo="Tierra";
bulbasaur.vida=90;
bulbasaur.ataque=50;

document.write(bulbasaur.nombre);










//los objetos se declaran con la primera letra en mayuscula
//DOCUMENT OBJECT MODEL
//navigator, window, document
//Objeto
	//Variables
	//Funciones
// document.write("Hola mama");
// var pi = 3.141592654;
// pi = Math.floor(pi); //floor redondea al minimo numero
// //Math.ceil redondea el numero al siguiente de arriba
// document.write(pi);
//var maxima;
//maxima=Math.max(5,12,13,25,58);
//document.write(maxima);


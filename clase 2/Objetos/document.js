function Pokemon(n,v,a){
	this.grito="Pika!"; //se pone el this para que se puedan ver por el objeto
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar=function(){ //Otra forma de declarar funciones
		alert(this.grito);
	}
}

function inicio(){
	var rattata=new Pokemon("Rattata",40,2);
	rattata.vida=rattata.vida-13;
	nombrePokemon.innerText=rattata.nombre;
	datosPokemon.innerText="El pokemon tiene una vida de:"+rattata.vida+"\nTiene un ataque de: "+rattata.ataque;

}


// function Pokemon(nombrePokemon,vidaPoke, ataPoke){
	
// 	var estructuraPokemon= {
// 	nombre:nombrePokemon,
// 	tipo: "ELectrico",
// 	vida:vidaPoke,
// 	ataque:ataPoke,
// 	datos:{tipo:"Tierra",debilidad:"Fuego"}//Una estructura dentro de una estructura
// }; 
// 	return estructuraPokemon;
// }

// var pikachu=Pokemon("pikachu", 100, 55);
// var bulbasaur=Pokemon("Bulbasaur",90,50);


// //document.write(bulbasaur.datos.tipo);
// console.log(bulbasaur);


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


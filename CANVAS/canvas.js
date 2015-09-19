var dibujo, canvas,t,b;
function inicio(){

	t=document.getElementById("usuario");
	b=document.getElementById("dibujalo");
	dibujo=document.getElementById("dibujito");//funcion del navegador que permite cargar el elemento de HTML
	lienzo=dibujo.getContext("2d");//SE DECLARA EL CONTEXTO O LIENZO
	//dibujarGrilla(lienzo);//Se invoca al metodo para trazar la grilla
	b.addEventListener("click",dibujarGrilla);
	//COLORES RGB Hexadecimal
	// lienzo.moveTo(1,1);
	// lienzo.lineTo(299,1);
	// lienzo.lineTo(299,299);
	// lienzo.lineTo(1,299);
	// lienzo.lineTo(1,1);
	// lienzo.stroke();
	// lienzo.strokeStyle= "#DDD";//COLORES RGB Hexadecimal
	// lienzo.stroke();

	lienzo.beginPath();
	lienzo.strokeStyle="#00F";
	lienzo.arc(150,150,100,(Math.PI*2),false);
	lienzo.closePath();
	lienzo.stroke();

}

function dibujarGrilla(){
	var pony= lienzo;
	var rayas= Number(t.value);
	var ancho=300, alto=300;
	var linea,punto;
	var anchoLinea=ancho/rayas;
	var limiteX=ancho/anchoLinea;
	var limiteY=alto/anchoLinea;
	
	

	for(linea = 0; linea <= limiteX; linea++){
		
		punto=(linea * anchoLinea)+0.5;
		pony.beginPath();//se inicia el camino
		pony.strokeStyle="#AAA";
		pony.moveTo(punto,0.5);//se mueve el cursor de dibujo
		pony.lineTo(punto,ancho-0.5);
		pony.stroke();
		pony.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++){
		punto=(linea*anchoLinea)+0.5;
		pony.beginPath();
		pony.strokeStyle="#AAA";
		pony.moveTo(0.5,punto);
		pony.lineTo(alto-0.5,punto);
		pony.stroke();
		pony.closePath();
		
	}

}
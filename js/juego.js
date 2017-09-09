function dibujarEdificios(){
	var l = document.getElementById("ventanaJuego");
	var modalidad = l.getContext("2d");
	
	modalidad.fillStyle="#73C6B6";
	modalidad.fillRect(0,300,100,200);
	modalidad.fillRect(101,200,100,300);
	modalidad.fillRect(202,230,100,270);
	modalidad.fillRect(303,150,100,350);
	modalidad.fillRect(404,270,100,230);
	modalidad.fillRect(505,170,100,330);
	modalidad.fillRect(606,200,100,300);
	modalidad.fillRect(707,170,100,330);
	modalidad.fillRect(808,270,100,230);
	modalidad.fillRect(909,200,100,300);
	modalidad.fillRect(1010,230,100,270);
	modalidad.fillRect(1111,190,100,310);
	modalidad.fillRect(1212,250,100,250);
}
function CalcularVXyVY(){
	var velocidad = document.getElementById("velocidad").value;
	var angulo= document.getElementById("angulo").value;
	/*
	alert(velocidad);
	alert(angulo);*/
	
	var VoX, VoY, grados;
	grados= angulo*(Math.PI/180); //convertir grados
	VoX= velocidad*Math.cos(grados);
	VoY= velocidad*Math.sin(grados);
	/*
	alert(VoX);
	alert(VoY);*/
}
var x = 350;
 var y = 250;
 var movx = 5;
 var movy = 3;

 function movimiento(){
    var lienzo = document.getElementById("ventanaJuego");
    var contexto = lienzo.getContext("2d");
	
	if( x >= 1280 || x <= 20 )
	   movx = movx*-1;
	if( y >= 480 || y <= 20 )
		movy = movy*-1;
		x = x+movx;
		y = y+movy;
	
	contexto.beginPath();
	contexto.clearRect(0,0,1300,500);
	contexto.fillStyle="rgb(255,0,0)";
	contexto.arc(x, y, 20, 0, 360,false);
	contexto.fill();
	
	setTimeout("movimiento()",5);
}
function hacerTodo(){
	dibujarEdificios();
	CalcularVXyVY();
	movimiento();

}
window.onload = hacerTodo;
	/*
	var x=350;
	var y=250;
	var movx = 5;
	var movy=3;
	
	
	function inicio(){
		movimiento();
	}
	function movimiento(){
		var l = document.getElementById("ventanaJuego");
		var modalidad = l.getContext("2d");
		
		if(x>=680 || x<=20)
			movx= movx*-1;
		if(y>=480 || y<=20)
			movy=movy*-1;
		x=x+movx;
		y=y+movy;
		
		modalidad.beginPath();
		modalidad.clearRect(0,0,700,500);
		modalidad.fillStyle="rgb(255,0,0)";
		modalidad.arc(x,y,0,360,false);
		modalidad.fill();
		
		setTimeout("movimiento()",30);
	}*/
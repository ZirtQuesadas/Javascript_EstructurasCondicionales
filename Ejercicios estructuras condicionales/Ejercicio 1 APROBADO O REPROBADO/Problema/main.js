var n1 = prompt("Primera calificación, en una escala del 1 al 10: ");
var n2 = prompt("Segunda calificación, en una escala del 1 al 10: ");
var n3 = prompt("Tercera calificación, en una escala del 1 al 10: ");
var prom = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;

if (prom>=6){
	alert("Aprobado");
}
else{
	alert("Reprobado");
}
//Escribe aquí tu código

//PSEUDOCÓDIGO
//1.- INICIAR
//2.- PEDIR VALOR DE VARIABLE n1
//3.- PEDIR VALOR DE VARIABLE n2
//4.- PEDIR VALOR DE VARIABLE n3
//5.- SUMAR VARIABLES n1, n2, Y n3 Y DIVIDIR EL RESULTADO ENTRE 3 Y GUARDAR EN VARIABLE prom
//6.- SI VARIABLE prom TIENE UN VALOR MAYOR O IGUAL A 6, MOSTRAR MENSAJE "Aprobado" 
//7.- SI NO, MOSTRAR MENSAJE "Reprobado"
//8.- FIN
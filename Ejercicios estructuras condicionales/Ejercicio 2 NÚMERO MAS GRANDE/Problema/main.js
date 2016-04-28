var n1 = prompt("Primer valor: ")
var n2 = prompt("Segundo valor: ")

if (n1>n2){
	alert("El primer valor " + n1 +" es mayor que el segundo valor, " + n2)
}
else if (n2==n1){
	alert("El primer valor " + n1 +" es igual que el segundo valor, " + n2)
}

else {
	alert("El segundo valor " + n2 +" es mayor que el valor " + n1)
}

//PSEUDOCÓDIGO

//1.- INICIAR
//2.- PEDIR VALOR DE VARIABLE n1
//3.- PEDIR VALOR DE VARIABLE n2
//4.- SI VARIABLE n1 TIENE UN VALOR MAYOR AL VALOR DE LA VARIABLE n2,
//MOSTRAR MENSAJE "El primer valor ", MOSTRAR VALOR DE VARIABLE n1, 
//MOSTRAR MENSAJE "es mayor que el segundo valor, ",
// MOSTRAR EL VALOR DE LA VARIABLE n2.

//5.- SI NO, Y SI SE CUMPLE QUE n2 ES IGUAL A n1, 
//MOSTRAR MENSAJE "El primer valor ", MOSTRAR VALOR DE VARIABLE n1, 
//MOSTRAR MENSAJE " es igual que el segundo valor, "
//MOSTRAR VALOR DE VARIABLE n2.

//6.- SI NO, MOSTRAR MENSAJE "El segundo valor ", MOSTRAR VARIABLE n2, 
//MOSTRAR MENSAJE "es mayor que el primer valor", MOSTRAR EL VALOR
//DE LA VARIABLE n2.
//7.- FIN
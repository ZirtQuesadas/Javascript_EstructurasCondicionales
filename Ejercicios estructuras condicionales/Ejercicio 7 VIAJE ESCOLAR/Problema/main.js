var personas = prompt("¿Para cuántas personas se ofecerá el viaje?")
var costopp = 0

if (    (  personas>=parseInt(100)  )    ) {
	costopp = 65
	alert("El precio del viaje por alumna(o) es de $" + costopp + " pesos")
	viaje = costopp * personas
	alert("El precio total del viaje si asisten " + personas + " alumnas(os) es de $" + viaje)
}
else if ( (personas>=parseInt(50))&&(personas<=parseInt(99))) {
	costopp = 70
	alert("El precio del viaje por persona es de $" + costopp + " pesos")
	viaje = costopp * personas
	alert("El precio total del viaje si asisten " + personas + " personas es de $" + viaje)
}
else if ( (personas>=parseInt(30))&&(personas<=parseInt(49)) ){
	costopp = 95
	alert("El precio del viaje por persona es de $" + costopp + " pesos")
	viaje = costopp * personas
	alert("El precio total del viaje si asisten " + personas + " personas es de $" + viaje)
}
else if ( (personas<parseInt(30))&&(personas>=parseInt(1))    ) {
	viaje = 4000
	alert("El precio total del viaje, si son menos de 30 personas, es de $" + viaje + " pesos a pagar entre las menos de 30 personas")
	costopp = 4000 / personas
	alert("Si asisten" + personas + " les tocará cubrir a cada una $" + costopp)
}
else {
	alert("No se puede calcular")
}
//PSEUDOCÓDIGO
//1.- INICIAR
//2.- SI personas ES MAYOR O IGUAL QUE 100
//ASIGNAR A costopp UN VALOR DE 65.
//3.-MOSTRAR MENSAJE "El precio del viaje por persona es de $", MOSTRAR VALOR DE costopp,
//MOSTRAR MENSAJE " pesos"
//4.- MULTIPLICAR EL VALOR DE costopp POR EL VALOR DE personas
//Y GUARDARLO EN VARIABLE viaje.
//5.- MOSTRAR MENSAJE "El precio del viaje si asisten ", MOSTRAR VALOR DE personas,
//MOSTRAR MENSAJE " personas es de $", MOSTRAR VALOR DE viaje


//6.- SI personas ES MAYOR O IGUAL QUE 50 Y MENOR O IGUAL QUE 99
//ASIGNAR A costopp UN VALOR DE 70.
//7.-MOSTRAR MENSAJE "El precio del viaje por persona es de $", MOSTRAR VALOR DE costopp,
//MOSTRAR MENSAJE " pesos"
//8.- MULTIPLICAR EL VALOR DE costopp POR EL VALOR DE personas
//Y GUARDARLO EN VARIABLE viaje.
//9.- MOSTRAR MENSAJE "El precio del viaje si asisten ", MOSTRAR VALOR DE personas,
//MOSTRAR MENSAJE " personas es de $", MOSTRAR VALOR DE viaje

//10.- SI personas ES MAYOR O IGUAL QUE 30 Y MENOR O IGUAL QUE 49
//ASIGNAR A costopp UN VALOR DE 95.
//11.-MOSTRAR MENSAJE "El precio del viaje por persona es de $", MOSTRAR VALOR DE costopp,
//MOSTRAR MENSAJE " pesos"
//12.- MULTIPLICAR EL VALOR DE costopp POR EL VALOR DE personas
//Y GUARDARLO EN VARIABLE viaje.
//13.- MOSTRAR MENSAJE "El precio del viaje si asisten ", MOSTRAR VALOR DE personas,
//MOSTRAR MENSAJE " personas es de $", MOSTRAR VALOR DE viaje

//14.- SI personas ES MENOR QUE 30 Y MAYOR O IGUAL QUE 1
//ASIGNAR A viaje UN VALOR DE 4000.
//15.-MOSTRAR MENSAJE "El precio total del viaje, si son menos de 30 personas, es de $", 
//MOSTRAR VALOR DE viaje, MOSTRAR MENSAJE " pesos a pagar entre las menos de 30 personas"
//16.- DIVIDIR EL VALOR DE viaje ENTRE personas
//Y GUARDARLO EN VARIABLE viaje.
//17.- MOSTRAR MENSAJE "Si asisten ", MOSTRAR VALOR DE personas,
//MOSTRAR MENSAJE " personas, les tocará cubrir a cada una $", MOSTRAR VALOR DE costopp
//18.- FIN
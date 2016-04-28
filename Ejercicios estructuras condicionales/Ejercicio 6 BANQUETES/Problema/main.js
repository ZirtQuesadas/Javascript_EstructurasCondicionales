var personas = prompt("¿Para cuántas personas se ofecerá el banquete?")


if (    (  personas>parseInt(200)  )&&(personas<=parseInt(300) )   ) {
	var platopp = 85
	alert("El precio del plato por persona es de $" + platopp + " pesos")
	banquete = platopp * personas
	alert("El precio total del banquete si asisten " + personas + " personas es de $" + banquete)
}
else if (personas<parseInt(200)) {
	var platopp = 95
	alert("El precio del plato por persona es de $" + platopp + " pesos")
	banquete = platopp * personas
	alert("El precio total del banquete si asisten " + personas + " personas es de $" + banquete)
}
else if (personas>parseInt(300)) {
	var platopp = 75
	alert("El precio del plato por persona es de $" + platopp + " pesos")
	banquete = platopp * personas
	alert("El precio total del banquete si asisten " + personas + " personas es de $" + banquete)
}
//PSEUDOCÓDIGO
//1.- INICIAR
//2.- SI personas ES MAYOR QUE 200 Y MENOR O IGUAL QUE 300,
//ASIGNAR A platopp UN VALOR DE 85.
//3.-MOSTRAR MENSAJE "El precio del plato por persona es de $", MOSTRAR VALOR DE platopp,
//MOSTRAR MENSAJE " pesos"
//4.- MULTIPLICAR EL VALOR DE platopp POR EL VALOR DE personas
//Y GUARDARLO EN VARIABLE banquete.
//5.- MOSTRAR MENSAJE "El precio del banquete si asisten ", MOSTRAR VALOR DE personas,
//MOSTRAR MENSAJE " personas es de $", MOSTRAR VALOR DE banquete

//6.- SI personas ES MENOR QUE 200, 
//ASIGNAR A platopp UN VALOR DE 95.
//5.-MOSTRAR MENSAJE "El precio del plato por persona es de $", MOSTRAR VALOR DE platopp,
//MOSTRAR MENSAJE " pesos"
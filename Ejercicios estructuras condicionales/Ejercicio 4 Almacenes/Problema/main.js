var precio = prompt("Precio del traje")

if (precio > 2500) {
	alert("Tu descuento es del 15%")
	precio = precio - (precio * 0.15)
	alert("Tu precio final es de $" + precio + " pesos")
}
else{
	alert("Tu descuento es del 8%")
	precio = precio - (precio * 0.08)
	alert("Tu precio final es de $" + precio + " pesos")
}

//PSEUDOCÓDIGO
//1.- INICIAR
//2.- SI precio ES MAYOR A 2500, MANDAR MENSAJE 
//"Tu descuento es del 15%"
//3.- ACTUALIZAR VARIABLE precio AL RESULTADO DE precio POR 0.15, RESTADO A precio
//4.- MANDAR MENSAJE "Tu precio final es de $", ESCRIBIR LA VARIABLE precio, ESCRIBIR TEXTO " pesos"
//4.- SI precio NO ES MAYOR A 2500, MANDAR MENSAJE "Tu descuento es del 8%"
//5.- ACTUALIZAR VARIABLE precio AL RESULTADO DE precio POR 0.08, RESTADO A precio
//6.- MANDAR MENSAJE "Tu precio final es de $", ESCRIBIR LA VARIABLE precio, ESCRIBIR TEXTO " pesos"
//7.- FIN
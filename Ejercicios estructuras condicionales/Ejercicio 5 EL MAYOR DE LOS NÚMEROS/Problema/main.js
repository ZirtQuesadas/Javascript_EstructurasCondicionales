var n1 = prompt("Primer número")//8
var n2 = prompt("Segundo número")//27
var n3 = prompt("Tercer número")//32

if ((parseInt(n1)>parseInt(n2))&&(parseInt(n1)>parseInt(n3))) {
	alert("El número " + n1 + " es mayor que " + n2 + " y que " + n3)
}
else if (     (parseInt(n2)>parseInt(n1) )&&( parseInt(n2)>parseInt(n3) )     ) {
	alert("El número " + n2 + " es mayor que " + n1 + " y que " + n3)
}
else if ((parseInt(n3)>parseInt(n1))&&(parseInt(n3)>parseInt(n2))) {
	alert("El número " + n3 + " es mayor que " + n2 + " y que " + n1)
}
else {
	alert("No se puede ejecutar")
}
//PSEUDOCÓDIGO
//1.- INICIAR
//2.- PEDIR VALOR DE VARIABLE n1
//3.- PEDIR VALOR DE VARIABLE n2
//4.- PEDIR VALOR DE VARIABLE n3
//5.- SI n1 ES MAYOR QUE n2 Y QUE n3, MOSTRAR MENSAJE "El número ", 
//MOSTRAR VALOR DE n1, MOSTRAR MENSAJE " es mayor que ", MOSTRAR VALOR DE n2, 
//MOSTRAR MENSAJE " y que ", MOSTRAR VALOR DE n3
//6.- SI n2 ES MAYOR QUE n1 Y QUE n3, MOSTRAR MENSAJE "El número ", 
//MOSTRAR VALOR DE n2, MOSTRAR MENSAJE " es mayor que ", MOSTRAR VALOR DE n1, 
//MOSTRAR MENSAJE " y que ", MOSTRAR VALOR DE n3
//7.- SI n3 ES MAYOR QUE n2 Y QUE n1, MOSTRAR MENSAJE "El número ", 
//MOSTRAR VALOR DE n3, MOSTRAR MENSAJE " es mayor que ", MOSTRAR VALOR DE n2, 
//MOSTRAR MENSAJE " y que ", MOSTRAR VALOR DE n1
//8.- FIN
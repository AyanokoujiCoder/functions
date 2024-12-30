var numero = 4;

function ejemplo() {
    var numero = 10;
    // numero = 10; En este caso estamos escribiendo sobre el numero que declaramos
    // inicialmente y es una buena practica no crear variables fuera de una funcion.
    console.log(numero);
}

ejemplo();
console.log(numero);
function llamar(enExito, enError) {
    let exito = true;
}
// .......
if (exito) {
    enExito();
} else {
    enError();
}

// Las funciones flecha lo que hacen es remplazar a las funciones tradicionales 

llamar(
    // function() { console.log('Exito'); },
    // function() { console.log('Exito'); }
    () => console.log('Exito'),
    () => console.log('Exito')
);

// "e" es el elemento 
// [1,2,3,40].forEach(e => console.log(e));

// Array [1, 2, 3, 40]: Es un array que contiene cuatro elementos: 1, 2, 3, y 40.

// Método .forEach(): Este método ejecuta una función proporcionada una vez por cada
// elemento del array en orden ascendente. En este caso, la función que se proporciona
// es una función de flecha (e => console.log(e)).

// Función de flecha e => console.log(e): Esta es una función de flecha de una sola línea.
// Toma un argumento e (que representa cada elemento del array durante cada iteración)
// y lo pasa a console.log(), que imprime ese elemento en la consola.
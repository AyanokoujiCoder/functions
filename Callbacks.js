// Callbacks son realmente funciones que son al mismo tiempo argumentos y que son llamados por una funcion 

function llamar(callback, a) {
    callback(33 + a);
}

// Callbacks va a ser console.log, y la "a" va a ser 200
llamar(console.log, 200);

// Hoy en dia es una muy buena practica evitar los Callbacks pero hay muchas 
// situaciones donde los vas a encontrar en el codigo, por ejemplo:

function llamar(enExito, enError) {
    let exito = true;
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar (
    function() { console.log('Exito'); },
    function() { console.log('Error'); }
)

// Ten mucho cuidado cuando estes utilizando Callbacks y realmente trata de evitarlas
// porque hay algo que se llama infierno de Callbacks que sucede cuando una funcion
// llama otra funcion y el codigo se vuleve muy dificil de leer

// function suma(a, b, callback) {
//     let resultado = a + b;
//     callback(resultado);
// }
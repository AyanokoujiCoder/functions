// La estamos declarando. Podemos crear una funcion en forma de un expresion 

// La diferencia entre estas dos es que cuando declaras una funcion puedes declararla en
// cualquier parte de tu codigo y puedes utilizarla antes de que haya sido declarada,
// la espresion de una funcion no puede ser utilizada antes de ser declarada y esto funciona
// de esta manera porque el motor de JavaScript se asegura de mover todas las funciones
// al comienzo de tu codigo cuando empieza el codigo.

// console.log(sumar(1,2));

function sumar(a,b) {
    return a + b;
}

// Estamos creando una expresion 
let sumar2 = function(a,b) {
    return a + b;
}

// console.log(sumar(1,2));

console.log(sumar(1,2)); // Comentar 
console.log(sumar(1,2));// Comentar 
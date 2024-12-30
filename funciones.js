// Las funciones te permiten reutilizar código de una forma dinamica una vez que escribas
// una funcion puedes invocarla muchas veces en tu codigo y este te puede dar diferentes
// resultados. Una de las funcionalidades mas importantes de JavaScript.

function sumar() {
    return 2 + 4;
}
console.log(sumar());

// let inicial = 3;

// function sumar() {
//     inicial += 4;
//     return inicial;
// }
// console.log(sumar());
// console.log(sumar());
// console.log(sumar());

// function sumar(a,b) {
//     return a + b;
// }

// console.log(sumar(0,3));
// console.log(sumar(4,5));
// console.log(sumar(100,2));

// function sumar() {
//     let suma = 0;
//     for (let numero of arguments) {
//         suma += numero;
//     }
//     return suma;
// }

// console.log(sumar(1,2,3,4,5,6,7,8));
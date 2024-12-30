// Hoy en dia no se recomienda mucho utilizat "var" ahora se recomienda utilizar mas let.

// La diferencia entre "var" y "let" es que var trabaja en el ambito de la funcion pero
// "let"  trabaja en el ambito de un bloque osea con llaves {}
var numero = 4;

function ejemplo() {
    var numero = 10;
    // console.log(numero);
    function dentro() {}
    dentro();

    let numero2 = 2;

    // if (true) { }
    // while (false) { }
    // for (let i in []) {}

}

ejemplo();
console.log(numero);

var x = 5; // Declaración de la variable 'x' con valor inicial 5.
var y;     // Declaración de la variable 'y' sin inicializar (valor 'undefined').

{
    let y = 5; // Declaración de una nueva variable 'y' (diferente de la anterior) con valor 5, dentro del bloque.
    x = 10;    // Asignación de un nuevo valor 10 a la variable 'x' (global).
    y = 10;    // Asignación de un nuevo valor 10 a la variable 'y' declarada dentro del bloque.
}

console.log(x, y); // Imprime el valor de 'x' y 'y'.

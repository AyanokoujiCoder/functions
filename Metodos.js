// "console" es un objeto "log" es un metodo, este metodo me permite imprimir un argumento.
// console.log(3);
// let texto = 'hola';
// console.log(texto.toUpperCase());

// Las etiquetas como perro, nombre y ladra son una propiedad. Ladra parese ser una propiedad
// pero no va a ser una propiedad apenas ponga una funcion.
let perro = {
    nombre: 'Firulais',
    ladra: function() {
        console.log('Woof!');
    }
};

perro.ladra();
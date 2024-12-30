function sumar() {
    // Pero hay tambien funciones que no necesariamente returnan nada 
    // return a + b;
    console.log(a + b);
}

sumar(1,2);
// console.log(sumar(1,2));

// Ya cuando empiezas a trabajar con proyectos de la vida real vas a encontrar
// que muchas veces que no quieres cambiar los datos originales y quieres mantenerlos.
// Es muy buena practica no modificar los objetos originales y en lugar
// de eso retornar copias de los valores para mejorar tu codigo.

// let usuario = {
//     nombre 'Ana',
//     apellido: 'Perez'
// };

// function cambiarApellido(objeto) {
//     let copia = JSON.parse(JSON.stringify(objecto));
//     copia.apellido = 'Ochoa';
//     return copia;
// }

// console.log(cambiarApellido(usuario));
// console.log(usuario);
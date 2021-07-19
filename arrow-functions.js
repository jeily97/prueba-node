// Función convencional 

function sumar(n1,n2) {
    return n1 + n2
  }
  console.log(2 +3)
// Arrow function

 let sumar = (n1,n2) => n1 + n2

////////////////////////////////////////////////

let laMitad = numero => numero / 2;
//cuando tiene un solo parámetro no lleva parentesis
 console.log (laMitad(8));
 
let dividir = (numeroA, numeroB) => numeroA / numeroB;
//cuando son más de uno, sí.
console.log(dividir(20, 4));

// dependiendo del día voy a decir que días trabajo 
let tengoQueTrabajar = día => {
    if (día == 'Sábado' || día == 'Domingo'){
        return 'no tengo que trabajar';
    } else {
        return 'Si, tenés que ir a trabajar'
    }
}

console.log(tengoQueTrabajar('Sábado'));

// PG actividades 
// 1

let dameCinco = () => [1,2,3,4,5]

let multiplicarPorDos = () => 123 * 2;

let mostrarNombre = () => 'Mi nombre es Hernán';

//2

let saludar = nombre => 'Hola, Ezequiel!';


//3

let saludar = (nombre , apellido) => 'Hola, ' + nombre + ' ' + apellido + '!'

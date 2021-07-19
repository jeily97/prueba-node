// IF TERNARIO (no lleva if ni else)

let fruta = 'Manzana';

let resultado = fruta == 'Manzana'? 'Buenisimo, me gustan las manzanas' : 'Ufam quería manzana';
console.log(resultado);

 // SWICH

 let semaforo = 'verde';
 switch(semaforo){
    case 'verde' : 
     console.log('Puedo cruzar');
     break;
    case 'Amarillo':
     console.log('Precaución');
     break;
    case 'Rojo' :
     console.log ('No cruces')
     break;
    default : 
    console.log('No funciona el semaforo');
    break;
 }

 let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}


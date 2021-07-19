/*/ejemplo length 

let mensaje = 'Gran día para practicar javasscript';
console.log(mensaje.length);

//Ejemplo IndexOf

console.log(mensaje.indexOf('día'));

//Ejemplo de slice

console.log(mensaje.slice(0, 24));
console.log(mensaje);

//Ejemplo de trim 

let mensaje = '       Gran día para practicar javasscript';
console.log(mensaje.trim());

//Ejemplo de split

console.log(mensaje.split(' '));

//Ejemplo de replace

console.log(mensaje.replace)('javasscript', 'todo')

//////////////////////////////////////////////////////////
/* Para JS un string es un array de caracteres. 
Para acceder a un carácter puntual de un string,
dentro de los corchetes escribimos el índice al que queremos accerder

.Length : retorna la cantidad total de caracteres de un string,
icluidos los espacios*/

let miSerie = 'Mad men';
miSerie.length; //devuelve 7

let arrayNombres = ['Bart', 'Lisa', 'Moe']; 
arrayNombres.length; // devuelve 3

arrayNombres[0].length; // corresponde a 'Bart', devuelve 4


/* 
.indexOf() : Busca, en el string, 
el string que recibe como parámetro.
Recibe un elemento a buscar en el array.
Retorna el primer índice donde encontró lo que buscamos
Si no lo encuentra retorna -1
*/

let saludo = '¡Hola! Estamos programando';

saludo.indexOf('Estamos'); // devuelve 7
saludo.indexOf('vamos'); //devuelve -1, no lo encontró
saludo.indexOf('o'); // encuentra la letra 'o' que esta en la posición 2, devuelve 2 y corta la ejecucución

//Cuando una función pertenece a un objeto (string) la llamamor método


/* .Slice : Corta un string y devuelve la parte
del sring donde se aplica.
Recibe 2 números como parámetros (pueden ser negarivos): desde dónde hasta dónde debe hacer el corte
Retorna la parte que corresponde al corte.
*/

let frase = 'Breaking Bad Rules!'; 
frase.slice(9, 2); // devuelve 'Bad'
frase.slice(13); // devuelve 'Rules!'
frase.slice(-10); //  vacio

/* .trim() : Elimina los espacios que estén al principio y al final de un string.
NO RECIBE PARÁMETROS 
No quita los espacios del medio. */

let nombreCompleto = '    Homero Simpson   ';
nombreCompleto.trim(); // devuelve 'Homero Simpson'

let nombreCompleto = '   Homero   J.   Simpson   ';
nombreCompleto.trim(); // devuelve 'Homero   J.   Simpson'

/* .split()
Divide un string en partes.
Recibe un string que usará como separador
Devuelve un array con las partes del string
*/

let cancion = 'And bingo was his name, oh!';

cancion.split('  ');
//devuelve ['And',  'bingo',  'was',  'his',  'name', , 'oh!']

cancion.split (', ')
// devuelve ['And bingo was his name', 'oh!']

/*
.replace()
Reemplaza una parte del string por otra
Recibe dos estrings como parámetro:
retorna un nuevo estring con el reemplazo 
*/

let frase = 'Aguante Phyton!';
frase.replace('Phyton', 'JS'); //devuelve 'Aguante JS!'
frase.replace('Phy', 'JS'); // devuelve 'Aguante JSton!'

/////////////////////////////////////////////////////////

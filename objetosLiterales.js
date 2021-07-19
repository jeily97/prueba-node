/* Una objeto puede tener dentor varias propiedades y valores
let objeto = {
    propiedad : valor,

    propiedad : valor,

    propiedad : valor
}
*/
let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Pepe", "Juanito" ],
    horarios : "de 19 a 21 hs."
}

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Pepe", "Juanito" ],
    horarios : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + curso.horarios;
    }
}

// Agregar mas cursos 

function Curso (cantidadDeAlumnos, docentes, horarios){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horarios = horarios;
}

let cursoDeProgramacion = new Curso (50 , ["Javier", "Gerardo"], "de 19 a 21 hs.");
let cursoDeProgramacion = new Curso (45 , ["Diego", "Debbie"], "de 17 a 19 hs.");

console.log(cursoDeProgramacion);


//console.log(curso.notificaciones());
//condole.log(curso);
//console.log ("la cantidad de alumnos en este curso es de",  + curso.cantidadDeAlumnos);



// los Métodos son funciones que se asignan como valor a una clave.
//Si una propiedad almacena una función, diremos que es un método del objeto

//////////////////////////////////////////////////////////////

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras : function (cantidadHoras){
        this.energia = this.energia - (cantidadHoras*5);
        this.experiencia = this.experiencia + (cantidadHoras*2);   
     }
};


console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
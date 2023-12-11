/* Crea una clase pelicula que permita gestionar esta informacion: nombre, duracion, año de estreno,genero, 6 actores,url del cartel promocional y director, y una accion que permita mostrar por pantalla toda la informacion. el constructor debera recibir los datos en una cadena JSON de la que debera sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba */

let datospeli = {
    nombre: 'las vacaciones',
    duracion: 150,
    estreno: 2017,
    actores: [
        "juan",
        "pedro",
        "ana",
        "julia",
        "ramon",
        "maria"
    ],
    url: "http://...",
    director: "pedro almodobar"
}

datosJSON = JSON.stringify(datospeli);

class Pelicula {
    constructor(cadenaJSON){
        this.datos = JSON.parse(cadenaJSON);
        this.nombre = this.datos.nombre;
        this.duracion = this.datos.duracion;
        this.estreno = this.datos.estreno;
        this.actores = this.datos.actores;
        this.url = this.datos.url;
        this.director = this.datos.director;
    }

    mostrarInfo(){
        console.log(`La pelicula ${this.nombre} dura ${this.duracion} minutos y se estreno en ${this.estreno}, en ella participaron ${this.actores} y su director fue ${this.director}, puedes ver el cartel promocional en ${this.url}.`);
    }
}

let laPelicula = new Pelicula(datosJSON);
laPelicula.mostrarInfo();

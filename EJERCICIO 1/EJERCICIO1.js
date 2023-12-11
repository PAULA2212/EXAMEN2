/* Diseña una jerarquia de clases donde musica y tecnologia sean clases derivadas de aula, para modelar las instlaciones de un instituto de enseñanza secundaria. Elige un metodo con el que evidenciar el concepto de polimorfismo */

//creamos la clase aula:
class Aula{
    //con el constructor le asignamos atributos:
    constructor(capacidad, sillas, puertas){
        this.capacidad = capacidad;
        this.sillas = sillas;
        this.puertas = puertas;
    }
    //un sencillo metodo para mostrar el valor de sus atributos:
    mostrarInfo(){
        console.log(`Este aula tiene capacidad para ${this.capacidad} alumnos, cuenta con ${this.puertas} puertas y con ${this.sillas} sillas.`);
    }
}

//instanciamos un objeto para comprobar el funcionamiento del metodo:
let aula1 = new Aula(23,23,1);
aula1.mostrarInfo();

//creamos la clase musica que hereda de aula:
class Musica extends Aula{
    constructor(capacidad, sillas, puertas, instrumentos, insonorizada){
        //atributos heredados de la clase aula:
        super(capacidad,sillas,puertas);
        //atributos propios de esta clase:
        this.instrumentos = instrumentos;
        this.insonorizada = insonorizada;
    }
    //reescribimos el metodo de la clase aula para que se adapte mejor a esta nueva clase, lo cual es posible gracias al polimorfismo:
    mostrarInfo(){
        console.log(`Este aula de musica tiene capacidad para ${this.capacidad} alumnos, cuenta con ${this.puertas} puertas y con ${this.sillas} sillas. En ella, puedes tocar ${this.instrumentos} instrumentos musicales y ${this.insonorizada} esta insonorizada`);
    }
}

//instanciamos un objeto para comprobar el correcto funcionamiento del
let aulaMusica = new Musica(20,20,1,4,'si');
aulaMusica.mostrarInfo();

//creamos la clase sistemas que tambien hereda de aula:
class Sistemas extends Aula{
    constructor(capacidad,sillas,puertas,ordenadores){
        //atrributos heredados de aula:
        super(capacidad,sillas,puertas);
        //atributos propios de la clase:
        this.ordenadores = ordenadores;
    }
    //sobre escribimos el metodo:
    mostrarInfo(){
        console.log(`Este aula de sistemas tiene capacidad para ${this.capacidad} alumnos, cuenta con ${this.puertas} puertas y con ${this.sillas} sillas. En ella, puedes utilizar ${this.ordenadores} ordenadores para estudiar. `);
    }
}
//instanciamos un objeto para comprobar el funcionamiento del metodo:
let aulaSistemas = new Sistemas(20,20,2,20);
aulaSistemas.mostrarInfo();
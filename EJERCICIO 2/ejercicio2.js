/* 5. Crea un script que pregunte tu nombre, apellidos tu ciclo formativo (indicando “DAW” como texto por defecto) y módulo favorito, y
muestre ambos en una ventana emergente, a traves de la consola y traves del documento:
 */

//usamos la funcion prompt para preguntar al usuario los datos y los guardamos en una variable:

let nombre = prompt("Escribe tu nombre: ");
let apellidos = prompt("Escribe tus apellidos: ");
let asignaturaFavorita = prompt("Dime cual es tu asignatura favorita: ");

//si introducimos un segundo parametro en la funcion prompt, conseguimos asignarle un valor por defecto:

let cicloFormativo = prompt("Escribe tu ciclo formativo: ", "DAW");

//mostramos el valor a traves de una ventana emergente:
alert(`Hola ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);

//mostramos los datos a traves de la consola del navegador:
console.log(`Hola ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);

//mostramos los datos en el documento HTML:
document.write(`Hola ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);

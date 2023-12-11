/* Crea un script que te salude con buenos dias, buenas tardes o buenas noches, en funcion de la hora del dia que sea */

//usando el objeto javascript date() almacenamos en una variable el valor de la fecha y la hora actual:
let hoy = new Date();

//usamos el metodo getHours de este objeto para extraer un numero entero con la hora:

let ahora = hoy.getHours();

//creamos un bloque concional que nos ayude a decidir el saludo en funcion del valor que tenga la variable ahora:

if (ahora > 6 && ahora <= 14){
    console.log(`Buenos dias, son las ${ahora} horas. `);
}else if (ahora > 14 && ahora <= 22){
    console.log(`Buenas tardes, son las ${ahora} horas. `);
}else{
    console.log(`Buenas noches, son las ${ahora} horas. `);
}

// almacenamos en una variable el elemento del html con clase hamburguer (el menu hamburguesa):
const hamburguer = document.querySelector('.hamburguer');

//almacenamos en una variable el elemento con clase nav-links que es el menu de navegacion:
const navLink = document.querySelector('.nav-links');

/* //creamos una funcion que permita cambiar a active la clase del navlink para que este se despliegue:

function desplegarNav(){
    navLink.classList.toggle('active');
}

//creamos un evento sobre el menu hamburguesa que dispare la función desplegarNav:

hamburguer.addEventListener('click', desplegarNav);
 */

//el mismo proceso incrustando la funcion dentro del evento con una funcion flecha:

hamburguer.addEventListener('click', ()=>{
    navLink.classList.toggle('active');
}) 

//lo mismo pero utilizando una funcion anonima:

hamburguer.addEventListener('click', function(){
    navLink.classList.toggle('active');
})
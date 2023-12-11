//guardamos en una lista de nodos todos los elementos del html con clase .arrow que son las flechas:

let flechas = document.querySelectorAll('.arrow');

//recorremos la lista de nodos con un bucle foreach:

flechas.forEach(flecha =>{
    //lanzamos un evento sobre cada flecha:
    flecha.addEventListener('click', function(){
        //guardamos en una varible los submenus que queremos desplegar basandonos en su posicion relativa a la flecha:
        const subMenu = this.parentElement.nextElementSibling;

        //cambiamos la clase de submenu a show para que este se despliegue:
        subMenu.classList.toggle('show');

        //cambiamos la clase del contenedor de la flecha a expanded para que esta rote:
        this.parentElement.classList.toggle('expanded');
    });
})
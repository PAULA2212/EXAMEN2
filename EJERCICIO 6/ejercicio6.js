/*Crea un script que pida al usuario 15 números, y muestre en pantalla únicamente la suma de los que son
números primos. */
//declaramos una variable donde acumularemos el valor de los primos introducidos:
let sumaPrimos = 0;
//con esta variable controlaremos la iteracion del bucle while:
let numeroPreguntas = 0;


//iniciamos un bucle while que itere 15 veces:
while (numeroPreguntas < 15){

    //preguntamos al usuario por el numero:
    let numero = parseInt(prompt("Escribe un numero: "));

    //el numero es primo hasta que se demuestre lo contrario:
    let esPrimo = true;


    //establecemos un algoritmo que identifica los numeros que no son primos:
    if(numero <= 1){
        esPrimo = false;
    } else {
        for (let i = 2; i <= numero / 2; i++){
            if (numero % i === 0){
                esPrimo = false;
                break;
            }
        }
    }
    //solo si el numero es primo, lo acumulamos en la variable sumaPrimos
    if (esPrimo){
        sumaPrimos += numero;
    }
    //incrementamos numeroPreguntas para que continue la iteracion:
    numeroPreguntas++;
}

//mostramos por pantalla el valor de la suma de los primos:
document.write(`La suma de los numeros primos que has introducido es ${sumaPrimos}.`);
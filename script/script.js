/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/


const computer = document.getElementById("cpu");
const persona = document.getElementById("user");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const result = document.getElementById("winner");


play.addEventListener("click", function () {

    let content = "";
    let contentUser = "";

    let cpu = Math.floor(Math.random() * 6) + 1;
    let user = Math.floor(Math.random() * 6) + 1;

    content = `${cpu}`;
    contentUser = `${user}`;
    computer.innerHTML = content;
    persona.innerHTML = contentUser;


    if (cpu > user) {
        // alert("il Computer ha vinto!");
        setTimeout(function () { alert("il Computer ha vinto!"); }, 500);
    } else if (user > cpu) {
        // alert("hai vinto!");
        setTimeout(function () { alert("hai vinto!"); }, 500);
    } else {
        alert("Pareggio!");
        setTimeout(function () { alert("Pareggio!"); }, 500);
    }

    reset.addEventListener("click", function () {
        computer.innerHTML = "";
        persona.innerHTML = "";
    })

})



/*-----------------------------------------------------------------------------------*/

               // SECONDO ESERCIZIO

/*---------------------------------------------------------------------------------- */


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
const result = document.getElementById("vincitore");


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
        winner = "Hai perso!";
    } else if (user > cpu) {
        winner = "Hai vinto!";
    } else {
        winner = "Pareggio!";

    }
    result.innerHTML = winner;


    reset.addEventListener("click", function () {
        computer.innerHTML = "";
        persona.innerHTML = "";
    })

})



/*-----------------------------------------------------------------------------------*/

// SECONDO ESERCIZIO

/*---------------------------------------------------------------------------------- */

/*
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
*/




const emails = ["user@email.com", "ali@email.com", "broly@email.com", "user@email.it", "my@email.com"];

const emailElement = document.getElementById("useremail");
console.log(emailElement.value)
const accesso = document.getElementById("esito");
const btn = document.getElementById("login");

btn.addEventListener("click", function () {

    if (emails.indexOf(emailElement.value)) {
        esito = "Welcome!";
    } else {
        esito = "Wrong Email!";
    }


    accesso.innerHTML = esito;
})



















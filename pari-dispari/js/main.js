// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*------------------
    FUNCTIONS
-------------------*/
/*
    dato un min e un max genera un numero random in questo range
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*
    dato un numero come argomento restitiusce "pari" se il numero è pari oppure "dispari" se il numero è dispari
*/
function evenOdd(num) {
    if(num % 2 === 0) {
        return "pari";
    }
    return "dispari";
}
/*------------------
    MAIN
-------------------*/
// 1. utente inserisce pari o dispari
let userChoice;
do {
    userChoice = prompt("Scegli fra pari e dispari");
} while(userChoice !== "pari" && userChoice !== "dispari");
// do {
//     userChoice = prompt("Scegli fra pari e dispari");
// } while(!(userChoice === "pari" || userChoice === "dispari"));
// 2. utente inserisce un numero da 1 a 5
let userNumber;
do {
    userNumber = Number(prompt("Inserisci un numero fra 1 e 5"));
} while(isNaN(userNumber) || userNumber < 1 || userNumber > 5);
// do {
//     userNumber = Number(prompt("Inserisci un numero fra 1 e 5"));
// } while(isNaN(userNumber) || !(userNumber >= 1 && userNumber <= 5));
// 3. generiamo un numero random per la CPU
const cpuNumber = getRndInteger(1,5);
// 4. sommiamo i due numeri
const sum = cpuNumber + userNumber;
console.log(sum);
// 5. verifico se la somma è pari o dispari
const result = evenOdd(sum);
// 6. Dichiariamo chi ha vinto, se l'utente ha scelto pari e la somma è pari oppure se ha scelto dispari e la somma è dispariha vinto l'utente
//  ALTRIMENTI l'utnete ha perso
if(result === userChoice) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!");
}
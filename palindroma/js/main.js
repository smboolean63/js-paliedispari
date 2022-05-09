// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// 1. chiedere la parola all'utente
// 2. prendo la parola e la capovolgo
// 3. SE la parola originale === alla parola capovolta allora la parole è palindroma
//    ALTRIMENTI non è palindorma

/*------------------
    FUNCTIONS
-------------------*/
/*
    data una parola in ingresso, restituisce true se la parola è palindroma false se la parola non è palindroma
*/
function isPalindrome(word) {
    let wordReverse = "";
    for( let i = word.length - 1; i >= 0; i-- ) {
        wordReverse += word[i];
    }

    if ( word === wordReverse ) {
        return true;
    }

    return false;
}

/*------------------
    MAIN
-------------------*/
const word = prompt("inserisci la parola");

if ( isPalindrome(word) ) {
    alert("parola palindroma");
} else {
    alert("parola non palindroma");
}
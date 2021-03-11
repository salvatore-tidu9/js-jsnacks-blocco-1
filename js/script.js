// ---ESERCIZIO_1---

// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


// var zucchine = [

//     zucchina_1 = {

//         tipo : "zuc_1",

//         peso : 50,

//         lunghezza : 21
//     }, 

//     zucchina_2 = {

//         tipo : "zuc_2",

//         peso : 40,

//         lunghezza : 12
//     },

//     zucchina_3 = {

//         tipo : "zuc_3",

//         peso : 45,

//         lunghezza : 25
//     },

//     zucchina_4 = {

//         tipo : "zuc_4",

//         peso : 30,

//         lunghezza : 17
//     },

//     zucchina_5 = {

//         tipo : "zuc_5",

//         peso : 35,

//         lunghezza : 14
//     },

//     zucchina_6 = {

//         tipo : "zuc_6",

//         peso : 60,

//         lunghezza : 27
//     },

//     zucchina_7 = {

//         tipo : "zuc_7",

//         peso : 50,

//         lunghezza : 21
//     },

//     zucchina_8 = {

//         tipo : "zuc_8",

//         peso : 55,

//         lunghezza : 14
//     },

//     zucchina_9 = {

//         tipo : "zuc_9",

//         peso : 60,

//         lunghezza : 12
//     },

//     zucchina_10 = {

//         tipo : "zuc_10",

//         peso : 55,

//         lunghezza : 25
//     }

// ]

// console.log(zucchine);

// var pesoTotale = 0;

// for (var i = 0; i < zucchine.length; i++) {

//     pesoTotale += zucchine[i].peso;
// }

// console.log("Peso Totale" + " : " + pesoTotale);


// ---ESERCIZIO_2---

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine


// var gruppoZucchine_1 = [

//     zucchina = {

//         tipo : "zuc_2",

//         peso : 30,

//         lunghezza : 12
//     },

//     zucchina = {

//         tipo : "zuc_5",

//         peso : 40,

//         lunghezza : 14
//     },

//     zucchina = {

//         tipo : "zuc_8",

//         peso : 35,

//         lunghezza : 14
//     },

//     zucchina = {

//         tipo : "zuc_9",

//         peso : 35,

//         lunghezza : 12
//     }
// ]

// console.log(gruppoZucchine_1);

// var pesoTotale1 = 0;

// for (var i = 0; i < gruppoZucchine_1.length; i++) {

//     pesoTotale1 += gruppoZucchine_1[i].peso;
// }

// console.log("Il primo gruppo di zucchine pesa" + " : " + pesoTotale1);


// var gruppoZucchine_2 = [

//     zucchina = {

//         tipo : "zuc_1",

//         peso : 40,

//         lunghezza : 21
//     },

//     zucchina = {

//         tipo : "zuc_3",

//         peso : 55,

//         lunghezza : 25
//     },

//     zucchina = {

//         tipo : "zuc_4",

//         peso : 45,

//         lunghezza : 17
//     },

//     zucchina = {

//         tipo : "zuc_6",

//         peso : 60,

//         lunghezza : 27
//     },

//     zucchina = {

//         tipo : "zuc_7",

//         peso : 50,

//         lunghezza : 21
//     },

//     zucchina = {

//         tipo : "zuc_10",

//         peso : 55,

//         lunghezza : 25
//     }
// ]

// console.log(gruppoZucchine_2);

// var pesoTotale2 = 0;

// for (var i = 0; i < gruppoZucchine_2.length; i++) {

//     pesoTotale2 += gruppoZucchine_2[i].peso;
// }

// console.log("Il secondo gruppo di zucchine pesa" + " : " + pesoTotale2);


// var pesoTotaleZucchine = pesoTotale1 + pesoTotale2;

// console.log("Peso Totale Zucchine" + " : " + pesoTotaleZucchine);


// ---ESERCIZIO_3---

// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC).


function reverseString(str) {

    // Suddividiamo una stringa in un array di stringhe formato da sotto-stringhe della stringa iniziale.

    var splitString = str.split("");

    // Invertiamo la disposizione degli elementi che compongono l' array.

    var reverseArray = splitString.reverse();

    // Uniamo tutti gli elementi dell' array invertiti per generare una stringa.

    return reverseArray.join("");
}

var newString = reverseString(prompt("Inserisci la stringa di cui vuoi invertire la disposizione dei caratteri che la compongono."));

console.log(newString);
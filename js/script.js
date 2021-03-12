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
// di zucchine.


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


// function reverseString(str) {

//     var splitString = str.split("");

//     var reverseArray = splitString.reverse("");

//     return reverseArray.join("");
// }

// var newString = reverseString(prompt("Inserisci la stringa di cui vuoi invertire la disposizione dei caratteri che la compongono."));

// console.log(newString);

// document.write(newString);


//--------------------------------------------------------------------------------------------------


// ---ESERCIZIO_1---

// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.


var listaNomi = ["Antonio", "Lorenzo", "Gianluca", "Fabrizio", "Paolo"];

var listaCognomi = ["Bianchi", "Moretti", "Rinaldi", "Marini", "Visconti"];

var listaInvitati = [];


for (var i = 0; i < 3; i++) {

    nomeRandom = Math.floor(Math.random() * listaNomi.length);

    cognomeRandom = Math.floor(Math.random() * listaCognomi.length);

    listaInvitati.push(listaNomi[nomeRandom] + " " + listaCognomi[cognomeRandom]);

}

console.log(listaInvitati);


// ---ESERCIZIO_2---

// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari.


var listaNumeri = [10, 35, 40, 72, 64, 52];

console.log(listaNumeri);

var somma = 0;

for ( var i = 0; i < listaNumeri.length; i++) {

    if(i % 2 != 0) {

        somma += listaNumeri[i];
    }
}

console.log("La somma dei numeri dell' array in posizione dispari è: " + somma);


// ---ESERCIZIO_3---

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


var array_1 = [10, 35, 58, 64, 32, 70, 13, 75, 80, 45];

var array_2 = [11, 50, 30, 65];


while (array_2.length < array_1.length) {

    array_2.push(randomNumbers(1,100));
}

console.log(array_1, array_2);


function randomNumbers(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;
}


// ---ESERCIZIO_4---

// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


var array1 = ["a", "b", "c"];

var array2 = [1, 2, 3];

console.log(mergedArray(array1, array2));


function mergedArray(arr1, arr2) {

    var array3 = [];

    for (var i = 0; i < 3; i++) {

        array3.push(arr1[i]);

        array3.push(arr2[i]);

    }

    return array3;

};


// ---ESERCIZIO_5---

// // Scrivi una funzione che accetti tre argomenti:
// // un array e due numeri (“a” più piccolo di “b” e “b” grande al
// // massimo quanto il numero di elementi dell’array).
// // La funzione ritornerà un nuovo array con i valori che
// // hanno la posizione compresa tra “a” e “b”.


var mainArray = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];

console.log(genArray(mainArray, 1, 6));


function genArray(array, a, b) {

    var nextArray = [];

    if ((a < b) && (b < array.length)) {

        for (var i = a; i <= b; i++) {

            nextArray.push(array[i]);
        }

        return nextArray;
    }

    else {

        return false;
    }

};


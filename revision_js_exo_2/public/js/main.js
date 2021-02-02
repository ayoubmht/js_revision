// EXO 2 :
let tableau = ["element un", "element deux", "element trois","element quatre", "element cinq"]

// 1
console.log(tableau[2]);

// 2
console.log(tableau[0],tableau[tableau.length-1]);

// 3
// console.log(tableau[1].substring(0, tableau[1].length - 1).toUpperCase() + tableau[1].slice(-1).toLowerCase()) // FAUX

// 4
console.log(tableau[3].charAt(0));

// 5
console.log(tableau[4].slice(1));

// 6
console.log(tableau[0].substring(0,1).toUpperCase()+tableau[0].substring(1,2).toLowerCase());

//7
console.log(tableau[0]+tableau[2]);

//8 
// console.log(tableau[1].substring(0, Math.round(tableau[1].length / 2))+tableau[1].substring(0)); // FAUX

//9
console.log(tableau[3].substring(0,2).toUpperCase(), tableau[4].toLowerCase());

//10
let nom = ""
tableau.forEach((item) => {
    nom += item.charAt(0).toLowerCase() + item.charAt(1).toUpperCase();
});
console.log(nom);
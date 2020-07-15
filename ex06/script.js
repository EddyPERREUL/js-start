"use strict"
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?"
let answer = prompt(question)
// utilise console.log pour vérifier le type de answer
console.log(typeof(answer))
// On peut utiliser la fonction isNaN(answer) ou isFinite(number) pour vérifier si la saisie est numérique
let message 

if (isNaN(answer)){
    message = "Vous n'avez pas saisi de valeur numérique correcte"
}
else if (answer > 2015){
    message = "Non, c'était avant"
}
else if (answer < 2015){
    message = "Non, c'était plus tard"
}
else {
    message = "Bravo, c'est une bonne réponse !"
}

alert (message)
// affiche un de messages suivants selon le cas :
// Vous n'avez pas saisi de valeur numérique correcte
// Non, c'était plus tard
// Non, c'était avant
// Bravo, c'est une bonne réponse !

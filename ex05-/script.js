"use strict"
/* Créer une variable question 'De quelle année date ECMA6 (ECMAScript-2015) ?'
Créer une variable answer, affecter lui la réponse à la question */
let question = "De quelle année date ECMA6 ?"
const answer = prompt(question)
const ECMA2015 = 2015
console.log(question)
/* Créer la variable message qui va prender 'Bravo, c'est une bonne réponse !
ou 'Ce n'est pas une bonne réponse 🤔'
*/
let message

if (answer == ECMA2015) {
    message = "Bravo, c'est une bonne réponse !"
} else {
    message = "Ce n'est pas une bonne réponse 🤔"
} 
/* afficher message */

alert(message)

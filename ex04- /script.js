"use strict"
/* demander confirmation 'Confirmez-vous d'être majeur ?' 
et affecter la réponse à la variable answer */
const answer = confirm(`Confirmez-vous d'être majeur ?`)
console.log(answer)
/* créer la variable message
affecter-lui 'Bienvenue !' si la réponse et positive ou 
'Vous n'être pas autorisé !' dans le cas contraire */
let message 
if (answer) {
    message = 'Bienvenue !'
} else {
    message = `Vous n'êtes pas autorisé !`
}
console.log(message)
/* Afficher le message */
/* 2 solutions avec if et avec l'opérateur conditionnel (ternary operator) */

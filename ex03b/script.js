/* refactor le code d'ex.03a en introduisant 3ème variable jsAge
si ce n'était pas le cas utilise template litterals `... ${} ....`
*/
// mets en place mode strict
`use strict`
// déclare la variable message
let message
// déclare la variable age
let age
let ageJs = 25
// pose la question "Quel age as-tu ?" et affecte la réponse à la variable age
age = prompt("Quel age as-tu ?")
// affecte à la variable message le texte suivant "Tu as .. ans et JavaScript a 25 ans."
message = (`Tu as ${age} ans et JavaScript a ${ageJs} ans.`)
// affiche le message
alert(message)
// augemente l'age de 1
Number(++age)
Number(++ageJs)
// change la valeur de message "L'année prochaine t'auras .. ans et JavaScript aura 26 ans."
message = `l'année prochaine tu auras ${age} ans et JavaScript aura ${ageJs} ans.`
// affiche le message
alert(message)
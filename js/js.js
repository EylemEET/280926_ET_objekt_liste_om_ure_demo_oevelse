/**
* fil: js.js
* formål: demo af Trolden Valdemar, lister og loops
*/

console.log('Success: JavaScriptet sender noget usynligt til konsollen!')




// ure objektet:
let ure = [
{
id: 1,
navn:'Rolex',
land: 'Schweiz',
modeller: ['submariner','outdoor','datejust'],
materialer: ['stainless steel','18-karat gold','platinum','oestersteel']
},
{
id: 2,
navn:'Skagen',
land: 'Danmark',
modeller: ['Signatur','Anita','Freja'],
materialer: ['stainless steel','titanium','mesh-lænker']
},
{
id: 3,
navn:'Belonni',
land: 'Tyrkiet'
modeller: ['hverdag','mode'],
materialer: ['stainless steel','laeder','krystaller']
}
]

//querySelector den går ind og finder ider og classes
// vi skriver troldens navn i dokumentet
// våbennummer starter med 1 
// vi har et objekt --> trold.vaaben [0]
// det vi sender ud i html'en "Du ser trolden " 
// anførselstegn''

// ure.length = antal ure i listen
// i = 0 = første ur
// ure[i].navn = navnet på det aktuelle ur*/


// roed farve virker ikke 

// jeg skriver urenes navn i dokumentet
document.querySelector("#demo").innerHTML = "<h2 class='roed'>Du ser urene</h2><p>" 
+ ure[1].modeller[i] 
+ " Udvalg til Dem  " 
+ ure.mærke[1] 
+ "</p>"

// forklarende tekst
document.querySelector("#demo").innerHTML += "<ul>"

// vi udskriver en liste med troldens våben
// loop
for (i=0; i<trold.vaaben.length; i++){
	document.querySelector("#demo").innerHTML += "<li>" + trold.vaaben[i] + "<li>"
}

document.querySelector("#demo").innerHTML += "</ul>"
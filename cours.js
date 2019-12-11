var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

if(document.body.childNodes[0].nodeType === document.TEXT_NODE){
	console.log("Le premier élément est un noeud textuel");
}
// Accès au premier enfant du noeud body
console.log(document.body.childNodes[1]);

/*******************************************************************/

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent
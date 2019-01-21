console.log(typeof Math); // object tout le temps
console.log(typeof console); // object dans node/browser

console.log(typeof document); // undefined dans le node / object dans browser
console.log(typeof process); // undefined dans le browser / object dans node

// Modèle objet de PHP/Java est statique (PHP hybride)

// Modèle objet de JS est dynamique
// équivalent PHP : tableau associatif
// Java : Map

// extensibilité d'un objet (on peut ajouter/modifier/supprimer des clés)

// test unitaires d'une fonction pile ou face
const assert = require('assert');

function pileOuFace() {
  return Math.random() > 0.5 ? 'pile' : 'face';
}

console.log(pileOuFace());
try {
  Math.random = () => 0.75;
  assert.strictEqual(pileOuFace(), 'pile');
  delete Math.random;
  console.log('OK');
}
catch {
  console.log('KO');
}

// bloquer l'extension
Object.preventExtensions(Math);

// Créer son objet
// object literal
const coords = {
  x: 10,
  y: 20,
  infos: function() { // avec object literal, cette fonction sera dupliquée
    // dans chaque objet
    return 'x : ' + this.x;
  }
};

coords.z = 30;
coords['z'] = 30;

console.log(coords.x);
console.log(coords.infos());

global.MyMath = {
  sum(a, b) {
    return a + b;
  }
};

console.log(MyMath.sum(1, 2));

/*
const readline = require('readline');
readline.createInterface({
  input: process.stdin,
  prompt: '> ',
});
*/


// factory function
function coordsFactory(x = 0, y = 0, z = 0) {
  return {
    x,
    y,
    z,
    // les fonctions sont dupliquées
  };
}

// constructor function

function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

/* ES6, sucre syntaxique de constructor function :
class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return 'Bonjour je m\'appelle ' + this.prenom;
  }
}
*/

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain.prenom); // Romain

console.log(romain.hello());
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
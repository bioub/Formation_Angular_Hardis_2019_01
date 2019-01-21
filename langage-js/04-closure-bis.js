function externe(msg) {
  // si interne est appelé en dehors, msg est sauvegardé
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');
helloFct();
console.log(typeof interne); // undefined


// pile d'appels
// ^
// |                
// |
// |externe - interne
// +----------------------------------------> temps
//

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// pile d'appels
// ^
// |
// |
// |for { st - st - st } ••• => - => - => 
// +-------------------------100ms-----------------> temps
// sortie                    3    3    3

// file d'attente (100ms) : => - => - => 
// file d'attente (103ms) : 

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 100);
}
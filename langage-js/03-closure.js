function externe(msg) {
  // pour interne, externe est une portée de closure
  // (pas besoin de repasser msg à interne, on y a déjà accès)
  function interne() {
    console.log(msg);
  }
  interne();
}

externe('Hello');
console.log(typeof interne); // undefined


// pile d'appels
// ^
// |                
// |interne
// |externe
// +----------------------------------------> temps
//
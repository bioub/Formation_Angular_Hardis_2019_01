setTimeout(function cbA() {
  console.log('A');
}, 50);

setTimeout(function cbB() {
  console.log('B');
}, 0);

setTimeout(function cbC() {
  console.log('C');
}, 100);

setTimeout(function cbD() {
  console.log('D');
  // setTimeout(function cbD() {
  //   console.log('D');
  // }, 50);
}, 50);

/*
setTimeout(function() {
  console.log('F');
}, Math.random() * 101);

setTimeout(function() {
  console.log('G');
}, Math.random() * 101);
*/

console.log('E');


// pile d'appels
// ^
// |
// |
// |st - st - st - st - lg ••• cbB ••• cbA - cbD ••• cbC
// +---------------------------2ms-----51ms--52ms----101ms------------------> temps
// sortie               E

// file d'attente (0ms) : cbB
// file d'attente (2ms) : 
// file d'attente (50ms) : cbA - cbD
// file d'attente (51ms) : cbD
// file d'attente (52ms) : 
// file d'attente (100ms) : cbC
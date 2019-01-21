const nbs = [2, 3, 4];

// function declaration
// function cb() {
//   console.log('nb');
// }

// function expression
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb, i) => console.log(nb, i));


console.log('fin');

// pile d'appels
// ^
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg 
// +----------------------------------------> temps
// sortie                    4    16   fin
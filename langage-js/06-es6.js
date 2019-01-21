const sum = (a, b, c, d, e) => a + b + c + d + e;
const nbs = [2, 3, 4, 5, 6];
// Spread operator (~ conversion tableau -> liste)
console.log(sum(...nbs));

const newNbs = [1, ...nbs, 7];
const clone = [...nbs];
const nbs2 = nbs; // passage par référence
const cloneES5 = nbs.slice();

// Rest operator (~ conversion liste -> tableau)
const sum2 = (...nbs) => nbs.reduce((acc, n) => acc + n);
console.log(sum2(2, 3, 4, 5, 6));

const dateSql = '2018-01-21';
const re = /(\d{4})-(\d{2})-(\d{2})/;
const [ , year, month, day] = dateSql.match(re);
console.log(day, month, year);
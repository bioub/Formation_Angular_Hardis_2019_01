// regexp named group
const dateSql = '2018-01-21';
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
//const {groups: {day, month, year}} = dateSql.match(re);
//console.log(day, month, year);

// Rest object
const {groups: {day, ...date}} = dateSql.match(re);
console.log(date);

// Spread object
const coords = {x: 0, y: 10};
const clone = {...coords};
const xyz = require("./people");

console.log(xyz);
// console.log(people); // reference error
console.log(xyz.people, xyz.ages);

const { people, ages } = require("./people");
console.log("----------");
console.log(people, ages);

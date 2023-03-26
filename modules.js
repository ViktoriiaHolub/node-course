global.xyz = require("./people");

console.log(xyz);
// console.log(people); // reference error
console.log(xyz.people, xyz.ages);

const { people, ages } = require("./people");
console.log("----------");
console.log(people, ages);

// setTimeout(() => {

// }, 1e8)

const os = require("os");
console.log(os);
const platform = os.platform();
const homeDirectory = os.homedir();
console.log("platform", platform);
console.log("homeDirectory", homeDirectory);


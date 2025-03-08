const name = "Nan"
const repoCount = 80
// console.log(name + repoCount + " Value");
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('iot')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-3 ,1)
console.log(anotherString);

const newString1 = "      nan     "
console.log(newString1.replace('a', '-'));
console.log(newString1.trim());
console.log(gameName.split('-'));







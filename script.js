console.log('Hello World');

const operand = 12;
const operand2 = 45;


let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);

let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();


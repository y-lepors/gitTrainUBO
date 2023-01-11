console.log('Hello World');

const a = 12;
let b = 45;

b += a ;
console.log("resultat de a + b = " + b);

let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();
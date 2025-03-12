
// Creacion de funcion para separar los retos en la consola
let reto = 0; //Variable reto con valor inicial 0

const separador = () => {
    reto++;// aumenta el conteo en 1 cada vez que se invoque la funcion
    console.log('************************************');
    console.log(`Reto ${reto}`);
    console.log('------------------------------------');
}


// Reto 1
separador();  // Llamado a la funcion separador

const colorMessage = (favoriteColor, shirtColor) => {
    if (favoriteColor === shirtColor) {
        return 'The shirt is your favorite color!';
    } else if (favoriteColor !== shirtColor) {
        return 'That is a nice color.';
    }
}

console.log(colorMessage('blue', 'blue')); // The shirt is your favorite color!
console.log(colorMessage('green', 'green')); // The shirt is your favorite color!
console.log(colorMessage('yellow', 'yellow')); // The shirt is your favorite color!
console.log(colorMessage('red', 'blue')); // That is a nice color!
console.log(colorMessage('purple', 'green')); // That is a nice color!
console.log(colorMessage('orange', 'yellow')); // That is a nice color!



// Reto 2
separador();  // Llamado a la funcion separador

const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false


// Reto 3
separador();  // Llamado a la funcion separador

const numberDigits = x => {
    if (x < 10 && x >= 0) {
        return 'One digit: ' + x;
    } else if (x >= 10 && x < 100) {
        return 'Two digits: ' + x;
    } else {
        return 'The number is: ' + x;
    }
}

console.log(numberDigits(2)); // One digit: 2
console.log(numberDigits(12)); // Two digits: 12
console.log(numberDigits(123)); // The number is: 123
console.log(numberDigits(-100)); // The number is: -100


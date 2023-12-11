'use strict';
console.log('script.js file was loaded');

class Calculator {
    sum(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            throw new Error("Dalyba iš nulio negalima");
        }
        return a / b;
    }
}

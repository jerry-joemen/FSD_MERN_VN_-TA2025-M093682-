
let delper1 = 300;
let delper2 = 500;

let result = 
    delper1 > delper2
        ? `Person 1 earns more by ₹${delper1 - delper2}`
        : `Person 2 earns more by ₹${delper2 - delper1}`;

console.log(result);
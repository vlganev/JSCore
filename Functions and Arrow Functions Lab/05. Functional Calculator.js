function funcCalculator(a, b, op) {
    let add = function (c, d) {return c+d;}
    let subtract = function (c, d) {return c-d;}
    let multiply = function (c, d) {return c*d;}
    let divide = function (c, d) {return c/d;}
    switch (op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}
function jansNotation(arr) {
    let savedNums = [];

    for (let instruction of arr) {
        let isNumber = typeof instruction == 'number';
        if(isNumber) {
            savedNums.push(Number(instruction));
        } else {
            if(savedNums.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
                let num1 = savedNums.pop();
                let num2 = savedNums.pop();
            switch (instruction) {
                case "+":
                    savedNums.push(num1 + num2);
                    break;
                case "-":
                    savedNums.push(num2 - num1);
                    break;
                case "*":
                    savedNums.push(num1 * num2);
                    break;
                case "/":
                    savedNums.push(num2 / num1);
                    break;
                default:
                    break;
            }
        }
    }
    if(savedNums.length == 1) {
        console.log(savedNums.pop())
    } else {
        console.log("Error: too many operands!");
    }
}

jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
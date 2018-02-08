function printEveryNElement(input) {
    let n = input.pop();
    console.log(input.filter((el, i) => i % n == 0).join('\n'))
}
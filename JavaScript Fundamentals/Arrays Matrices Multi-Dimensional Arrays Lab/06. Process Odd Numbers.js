function processOddNumbers(input) {
    let newArr = input.map(x => Number(x)).filter((el, index) => index % 2 == 1).map(x => x * 2).reverse();
    console.log(newArr.join(' '));
}
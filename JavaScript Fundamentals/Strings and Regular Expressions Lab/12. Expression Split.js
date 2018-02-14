function expressionSplit(input) {
    let regex = /[,;()\. ]+/;
    input.split(regex).forEach(s => console.log(s));
}
function evenPositionElement(input) {
    console.log(input.filter((el, i) => {return i % 2 === 0}).join(' '));
}
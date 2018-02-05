function modifyAverage(number) {
    let average = getAverage(number);
    let addNine = x => x + "9";
    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
        }
    console.log(number);

    function getAverage(number) {
        let sum = 0;
        let len = number.toString().length;
        while (number > 0) {
            let digit = number % 10;
            sum += digit;
            number = Math.floor(number / 10).toFixed(0);
        }
        return sum / len;
    }
}
modifyAverage(101);
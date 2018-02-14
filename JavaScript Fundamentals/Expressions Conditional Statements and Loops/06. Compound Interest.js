function compoundInterest(input) {
    let sum = Number(input[0]);
    let interestRate = Number(input[1])/100;
    let compoundingPeriod = 12 / Number(input[2]);
    let totalTimespan = Number(input[3]);
    let totalValue = sum * Math.pow((1 + interestRate / compoundingPeriod), (compoundingPeriod * totalTimespan));
    console.log(totalValue.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);
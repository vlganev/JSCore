function isPrime(number) {
    let prime = true;
    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(prime && number > 1);
}
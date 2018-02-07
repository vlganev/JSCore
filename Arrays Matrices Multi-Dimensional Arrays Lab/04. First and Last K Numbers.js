function firstAndLastKNumbers(input) {
        let k = Number(input.shift());
        console.log(input.slice(0, k))
        console.log(input.slice(input.length-k))
}
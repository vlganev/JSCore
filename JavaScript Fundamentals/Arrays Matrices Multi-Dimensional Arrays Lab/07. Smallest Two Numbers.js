function smallestTwoNumbers(input) {
    console.log(input.sort((a,b) => a-b).slice(0, Math.min(2, input.length)))
}
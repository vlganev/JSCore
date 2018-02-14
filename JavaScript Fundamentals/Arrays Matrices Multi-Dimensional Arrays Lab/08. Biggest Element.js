function biggestElement(input) {
    let maxEl = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < input.length; i++) {
//       for (let j = 0; j < input[i].length; j++) {
//           if(input[i][j] > maxEl)
//               maxEl = input[i][j]
//       }
//   }
    input.forEach(
        r => r.forEach(
            c => maxEl = Math.max(maxEl, c)
        )
    );
    console.log(maxEl);
}
function diagonalSums(input) {
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;
     for (let row = 0; row < input.length; row++) {
       for (let col = 0; col < input[row].length; col++) {
           if(row == col) {
               diagonal1Sum += input[row][col];
               diagonal2Sum += input[row][input.length - 1 - row];
           }
       }
   }
    console.log(diagonal1Sum + ' ' + diagonal2Sum);
}
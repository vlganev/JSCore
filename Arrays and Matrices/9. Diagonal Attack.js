function diagonalAttack(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row == col) {
                primaryDiagonalSum += matrix[row][col];
            }
            if (col === matrix[row].length - row - 1) {
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }

    if(primaryDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix[row].length - row - 1) {
                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}
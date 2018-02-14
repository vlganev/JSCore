function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0);
        if(rowSum != sum)
            return false;
        for (let col = 0; col < matrix[row].length; col++) {
            let sumCol = 0;
            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }
            if(sumCol != sum)
                return false;
        }
    }
    return true;
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
function airPollution(arrMatrix, commands) {
    let matrix = [];
    for (let row = 0; row < 5; row++) {
        matrix[row] = [];
        let tokensArr = arrMatrix[row].split(' ');
        for (let col = 0; col < 5; col++) {
            matrix[row].push(Number(tokensArr[col]));
        }
    }
    for (let commandIndex of commands) {
        let [command, index] = commandIndex.split(' ');
        index = Number(index);
        if(command == 'breeze') {
            for (let col = 0; col < 5; col++) {
                matrix[index][col] -= 15;
                if(matrix[index][col] < 0) matrix[index][col] = 0;
            }
        } else if(command == 'gale') {
            for (let row = 0; row < 5; row++) {
                matrix[row][index] -= 20;
                if(matrix[row][index] < 0) matrix[row][index] = 0;
            }
        } else if(command == 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += index;
                }
            }
        } else {
            console.log('Invalid command');
            return;
        }
    }
    let pollutedAreas = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if(matrix[row][col] >= 50) {
                pollutedAreas.push(`[${row}-${col}]`);
            }
        }
    }
    if(pollutedAreas == '') {
        console.log('No polluted areas');
    } else {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    }
}

//airPollution([ '5 7 72 14 4',
//    '41 35 37 27 33',
//    '23 16 27 42 12',
//    '2 20 28 39 14',
//    '16 34 31 10 24' ], [ 'breeze 1', 'gale 2', 'smog 25' ]);
airPollution([ '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24' ], [ 'smog 11', 'gale 3', 'breeze 1', 'smog 2' ]);
//airPollution([ '5 7 2 14 4',
//    '21 14 2 5 3',
//    '3 16 7 42 12',
//    '2 20 8 39 14',
//    '7 34 1 10 24' ], [ 'breeze 1', 'gale 2', 'smog 35' ]);
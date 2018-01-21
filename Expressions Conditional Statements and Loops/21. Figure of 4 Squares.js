function figureOf4Squares(n) {
    let output = '+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+\n';
    for (let i = 0; i < n/2-2; i++) {
        output += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|\n';
    }
    output += '+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+\n';
    for (let i = 0; i < n/2-2; i++) {
        output += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|\n';
    }
    output += '+' + '-'.repeat(n-2) + '+' + '-'.repeat(n-2) + '+\n';
    console.log(output);
}
figureOf4Squares(4);
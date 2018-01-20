function Chessboard(number) {
    console.log('<div class="chessboard">');
    for (let i = 0; i < number; i++) {
        console.log('<div>')
        for (let j = 0; j < number; j++) {
            let color = (i + j) % 2 === 0 ? 'black' : 'white';
            console.log(`<span class="${color}"></span>`);
        }
        console.log('</div>')
    }
    console.log('</div>')
}
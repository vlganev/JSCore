function rotateArray(input) {
    let rotations = Number(input.pop()) % input.length;
    for (let i = 0; i < rotations; i++) {
        let element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
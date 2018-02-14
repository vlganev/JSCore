function capitalizeTheWords(input) {
    console.log(input.split(' ').map(x => x.toLowerCase()).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' '));
}
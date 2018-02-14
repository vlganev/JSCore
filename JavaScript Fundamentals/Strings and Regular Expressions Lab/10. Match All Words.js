function matchAllWord(input) {
    let regex = /[a-zA-Z0-9_]+/g;
    console.log(input.match(regex).join('|'));
}
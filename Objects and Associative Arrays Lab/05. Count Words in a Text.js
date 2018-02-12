function countWordsInText(arr) {
    let result = {};
    for (let str of arr) {
        let currentWord = str.split(/[^0-9a-zA-Z_]+/).filter(w => w != '');
        for (let word of currentWord) {
            if(result.hasOwnProperty(word)) {
                result[word]++;
            } else {
                result[word] = 1;
            }
        }
    }
    console.log(JSON.stringify(result))
}
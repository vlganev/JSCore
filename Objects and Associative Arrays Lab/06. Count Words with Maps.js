function countWordsWithMap(arr) {
    let myMap = new Map();
    for (let str of arr) {
        let currentWord = str.split(/[^0-9a-zA-Z_]+/)
            .filter(w => w != '');
        for (let word of currentWord) {
            word = word.toLowerCase()
            if(myMap.has(word)) {
                myMap.set(word, (myMap.get(word)+1));
            } else {
                myMap.set(word, 1);
            }
        }
    }
    let sortedKeys = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times');
    }
}
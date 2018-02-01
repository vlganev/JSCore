function findOccurrences(sentence, word) {
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    count = 0;

    let match = regex.exec(sentence);

    while(match) {
        count++;
        match = regex.exec(sentence);
    }
    console.log(count);
}
function countOccurences(target, str) {
    let counter = 0;
    while(true) {
        let startIndex = str.indexOf(target);
        if(startIndex < 0) {
            break;
        }
        counter++;
        str = str.substr(startIndex+1);
    }
    console.log(counter);
}
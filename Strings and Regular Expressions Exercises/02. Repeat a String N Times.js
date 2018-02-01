function repeatStringNTimes(str, repeatedTimes) {
    let result = '';
    for(let i = 0; i < repeatedTimes; i++) {
        result += str;
    }
    console.log(result);
    console.log(str.repeat(repeatStringNTimes));
}
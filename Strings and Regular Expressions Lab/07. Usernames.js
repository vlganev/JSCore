function usernames(arr) {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('@');
        let domains = token[1].split('.');
        let result = token[0] + '.';
        for (let str of domains) {
            result += str[0];
        }
        arrResult.push(result)
    }
    console.log(arrResult.join(', '));
}
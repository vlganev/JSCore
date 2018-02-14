function extractText(input) {
    let result = [];

    while(true) {
        let start = input.indexOf('(');
        if(start < 0)
            break;
        let end = input.indexOf(')');
        if(end < 0 || end < start)
            break;
        result.push(input.substring(start+1, end));
        input = input.substring(end+1);
    }
    console.log(result.join(', '));
}
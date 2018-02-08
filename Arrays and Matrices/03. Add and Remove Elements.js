function addAndRemoveElements(input) {
    let result = [];
    let count = 1;
    for(let command of input) {
        if(command == "add") {
            result.push(count);
            count++;
        }
        if(command == "remove") {
            result.pop();
            count++;
        }
    }
    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
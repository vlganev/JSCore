function findVariableNamesInSentences(input) {
    let variables = input.match(/\b_[a-zA-Z]+\b/g).map(x => x.substr(1));
    console.log(variables.join(','));
}
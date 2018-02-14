function extractLinks(sentences) {
    let regex = /(www)\.([A-Za-z][A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let matches, result = [];
    for (let s of sentences)
        while (matches = regex.exec(s))
            result.push(matches[0]);
    console.log(result.join('\n'));
}
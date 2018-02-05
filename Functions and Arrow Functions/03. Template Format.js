function templateFormat(input) {
    let xml = '';
    xml += `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;
    for (i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i+1];
        xml += `\t<question>\n\t\t${question}\n\t</question>\n`;
        xml += `\t<answer>\n\t\t${answer}\n\t</answer>\n`;
    }
    xml += `</quiz>\n`;
    console.log(xml);
}
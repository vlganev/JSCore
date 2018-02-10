function JSONsTable(input) {
    let result = '<table>\n';
    for(let line of input) {
        let obj = JSON.parse(line);
        result += '    <tr>\n';
        result += `       <td>${escapeChars(obj.name)}</td>\n`;
        result += `       <td>${escapeChars(obj.position)}</td>\n`
        result += `       <td>${obj.salary}</td>\n`;
        result += '    <tr>\n';
    }
    result += '</table>';
    console.log(result);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

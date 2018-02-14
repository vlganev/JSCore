function jsonToHtmlTable(strArr) {
    let arr = JSON.parse(strArr);
    let str = '<table>\n';
    str += '    <tr>';
    let keys = Object.keys(arr[0]);
    for (let key of keys) {
        str += `<th>${key}</th>`;
    }
    str += '</tr>\n';
    for (let obj of arr) {
        str += '    <tr>';
        let values = Object.values;
        for (let i = 0; i < keys.length; i++) {
            str += `<td>${escapeChars(obj[keys[i]]+'')}</td>`;
        }
        str += '</tr>\n';
    }
    str += '</table>';
    console.log(str);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
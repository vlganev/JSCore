function scoreToHtml(strArr) {
    let arr = JSON.parse(strArr);
    let str = '<table>\n';
    let keys = Object.keys(arr[0]);
    str += `\t<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;
    for (let obj of arr) {
        str += `\t<tr><td>${escapeChars(obj[keys[0]]+'')}</td><td>${escapeChars(obj[keys[1]]+'')}</td></tr>\n`;
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

scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
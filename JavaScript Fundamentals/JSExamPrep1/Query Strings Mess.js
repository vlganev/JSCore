function queryStringsMess(arr) {
//    let pattern = /([A-Za-z+]+)=([a-zA-Z-\.:\/0-9%\*+\-]+)/g;
    let pattern = /([^=&?]+)=([^=&?]+)/g;

    for (let line of arr) {
        let data = {};
        let tokens = pattern.exec(line);
        while (tokens) {

            let [match, key, value] = tokens;
            value = value.replace(/\+/g, '').replace(/%20/g, ' ').trim();
            key = key.replace('%20', ' ').replace('+', ' ').trim();
            if (!data.hasOwnProperty(key)) {
                data[key] = [];
            }
            data[key].push(value);

            tokens = pattern.exec(line);

        }

        let outputText = "";
        for (let key in data) {
            outputText +=`${key}=[${data[key].join(", ")}]`;
        }
        console.log(outputText);
//        Object.keys(data).forEach(k => outputText+= `${k}=[${data[k].join(", ")}]`);

    }
}

queryStringsMess([ 'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php' ]);
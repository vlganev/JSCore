function matchTheDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})/gm;
    let m = regex.exec(input);
    while(m) {
        console.log(`${m[0]} (Day: ${m[1]}, Month: ${m[2]}, Year: ${m[3]})`)
        m = regex.exec(input);
    }
}
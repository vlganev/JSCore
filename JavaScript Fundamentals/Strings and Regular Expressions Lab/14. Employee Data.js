function employeeData(input) {
    let regex = /([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([[a-zA-Z0-9- ]+)/gm;
    let m = regex.exec(input);
    while(m) {
        console.log(`Name: ${m[1]}`);
        console.log(`Position: ${m[3]}`);
        console.log(`Salary: ${m[2]}`);
        m = regex.exec(input);
    }
}
function convertImperialUnits(inches) {
    let feet = Number.parseInt(inches / 12);
    let convertedInches = inches % 12;
    console.log(`${feet}'-${convertedInches}"`)
}
function thePyramidOfKingDjoser(baseNumber, increment) {
    baseNumber = Number(baseNumber);
    increment = Number(increment);
    let steps = Math.ceil(Number(baseNumber)/2);
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisRequired = 0;
    let goldRequired = 0;
    for (let i = 0; i < steps; i++) {
        currentBaseNum = baseNumber - i*2;
        if(i === (steps - 1)) {
            goldRequired += Math.pow(currentBaseNum, 2) * increment;
        } else {
            stoneRequired += Math.pow((currentBaseNum - 2), 2) * increment;
            if((i+1) % 5 === 0 && i > 0) {
                lapisRequired += (currentBaseNum -1) *4 * increment;
            } else {
                marbleRequired += (currentBaseNum -1) *4 * increment;
            }
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}

thePyramidOfKingDjoser(23,0.5);
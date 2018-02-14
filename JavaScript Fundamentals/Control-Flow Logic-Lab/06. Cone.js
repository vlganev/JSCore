function ConeVolSurf(radius, height) {
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    console.log("volume = " + volume);
    let area = Math.PI * radius * (radius + slantHeight);
    console.log("area = " + area);
}
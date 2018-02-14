function distance3DDots(points) {
    let x1 = points[0];
    let y1 = points[1];
    let z1 = points[2];
    let x2 = points[3];
    let y2 = points[4];
    let z2 = points[5];
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
    console.log(distance);
}
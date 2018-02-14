function quadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x2.toFixed(2));
        console.log(x1.toFixed(2));
    } else if (discriminant == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log('no');
    }
}
quadraticEquation(6, 11, -35);
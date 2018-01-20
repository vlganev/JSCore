function TriangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let triangleArea = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(triangleArea)
}
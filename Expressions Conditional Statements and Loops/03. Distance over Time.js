function distanceOverTime(input) {
    let v1MeterPerSecond = Number(input[0]) * 1000/3600;
    let v2MeterPerSecond = Number(input[1]) * 1000/3600;
    let distance1 = v1MeterPerSecond * input[2];
    let distance2 = v2MeterPerSecond * input[2];
    let delta = Math.abs(distance1 - distance2);
    console.log(delta);
}

distanceOverTime(0, 60, 3600);
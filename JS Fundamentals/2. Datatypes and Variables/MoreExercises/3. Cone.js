function solve(r, h) {
    let volume = (1 / 3) * Math.PI * r ** 2 * h;
    let area = Math.PI * r * (r + Math.sqrt(r ** 2 + h ** 2));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(3, 5)
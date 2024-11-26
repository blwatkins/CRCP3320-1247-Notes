import P5Lib from 'p5';

export function getMinX(p5: P5Lib) {
    return -(p5.width / 2.0);
}

export function getMaxX(p5: P5Lib) {
    return (p5.width / 2.0);
}

export function getMinY(p5: P5Lib) {
    return -(p5.height / 2.0);
}

export function getMaxY(p5: P5Lib) {
    return (p5.height / 2.0);
}

export function getRandomPosition(p5: P5Lib): P5Lib.Vector {
    const x: number = p5.random(getMinX(p5), getMaxX(p5));
    const y: number = p5.random(getMinY(p5), getMaxY(p5));
    return (p5.createVector(x, y));
}

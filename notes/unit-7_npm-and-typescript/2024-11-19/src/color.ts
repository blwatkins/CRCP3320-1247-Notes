import P5Lib from 'p5';

export function getColor(p5: P5Lib): P5Lib.Color {
    const r: number = p5.random(255);
    const g: number = p5.random(255);
    const b: number = p5.random(255);
    return p5.color(r, g, b);
}

import P5Lib from 'p5';

export function getColor(p5: P5Lib): P5Lib.Color {
    const r: number = p5.random(255);
    const g: number = p5.random(255);
    const b: number = p5.random(255);
    return p5.color(r, g, b);
}

export type Range = {
    min: number;
    max: number;
}

export function getColorFromRange(
    p5: P5Lib,
    rRange: Range, 
    gRange: Range, 
    bRange: Range) 
{
    const r: number = p5.random(rRange.min, rRange.max);
    const g: number = p5.random(gRange.min, gRange.max);
    const b: number = p5.random(bRange.min, bRange.max);
    return p5.color(r, g, b);
}

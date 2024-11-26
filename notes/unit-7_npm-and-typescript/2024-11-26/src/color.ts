import P5Lib from 'p5';

export function getColor(p5: P5Lib): P5Lib.Color {
    const r: number = p5.random(255);
    const g: number = p5.random(255);
    const b: number = p5.random(255);
    return p5.color(r, g, b);
}

export type Range = {
    readonly min: number;
    readonly max: number;
}

export type Compatible = {
    readonly type: string;
}

export type RGBBuilder  = Compatible & {
    readonly red: Range,
    readonly green: Range,
    readonly blue: Range,
    readonly type: 'RGB_BUILDER'
}

export function isRGBBuilder(object: unknown): object is RGBBuilder {
    let hasMatch: boolean = false;

    if (object && typeof object === 'object') {
        hasMatch = (object as Compatible).type === 'RGB_BUILDER';
    }

    return hasMatch;
}

export type HSLBuilder = Compatible & {
    readonly hue: Range,
    readonly sat: Range,
    readonly light: Range
    readonly type: 'HSL_BUILDER'
}

export function isHSLBuilder(object: unknown): object is HSLBuilder {
    let hasMatch: boolean = false;

    if (object && typeof object === 'object') {
        hasMatch = (object as Compatible).type === 'HSL_BUILDER';
    }

    return hasMatch;
}

export function getColorFromRange(p5: P5Lib, builder: RGBBuilder | HSLBuilder): P5Lib.Color {
    let color: P5Lib.Color = p5.color(0);
    
    if (isRGBBuilder(builder)) {
        const r: number = Math.floor(p5.random(builder.red.min, builder.red.max));
        const g: number = Math.floor(p5.random(builder.green.min, builder.green.max));
        const b: number = Math.floor(p5.random(builder.blue.min, builder.blue.max));
        color = p5.color(r, g, b);
    } else if (isHSLBuilder(builder)) {
        const h: number = Math.floor(p5.random(builder.hue.min, builder.hue.max));
        const s: number = Math.floor(p5.random(builder.sat.min, builder.sat.max));
        const l: number = Math.floor(p5.random(builder.light.min, builder.light.max));
        color = p5.color(`hsl(${h.toString()}, ${s.toString()}%, ${l.toString()}%)`);
    }

    return color;
}

import P5Lib from 'p5';

export interface Drawable {
    draw(): void;
    move(): void;

    // setColor should accept either a color parameter
    // or a color array parameter
    // union type / type union
    setColor(color: P5Lib.Color | P5Lib.Color[]): void;
}

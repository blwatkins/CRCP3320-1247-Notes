import { Shape } from "./shape";
import { getColor } from "./color";
import P5Lib from 'p5';

export class Circle extends Shape {
    #color: P5Lib.Color;

    public constructor(p5: P5Lib) {
        super(p5);
        this.#color = getColor(p5);
    }

    public override draw(): void {
        this.P5.fill(this.#color);
        this.P5.ellipse(this.POS.x, this.POS.x, this.SIZE, this.SIZE);
    }

    public override setColor(color: P5Lib.Color | P5Lib.Color[]): void {
        console.log(color);
    }
}

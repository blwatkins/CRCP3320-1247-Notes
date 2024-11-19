import P5Lib from 'p5';
import { Drawable } from './drawable';
import { getColor } from './color';

export class Spiral implements Drawable {
    readonly #P5: P5Lib;
    readonly #SPIRAL_ANGLE: number;
    readonly #POS: P5Lib.Vector = new P5Lib.Vector();
    readonly #POSITIONS: P5Lib.Vector[] = [];
    readonly #COLORS: P5Lib.Color[] = [];
    readonly #POINT_TOTAL: number;
    readonly #POINT_SIZE: number;
    readonly #C: number;
    readonly #DELTA_THETA: number;

    #theta: number = 0;
    #colA: P5Lib.Color;
    #colB: P5Lib.Color;

    constructor(p5: P5Lib);
    constructor(p5: P5Lib,
                pos: P5Lib.Vector, 
                pointTotal: number,
                pointSize: number,
                c: number,
                spiralAngle: number);
    constructor(
        p5: P5Lib,
        pos?: P5Lib.Vector,
        pointTotal?: number,
        pointSize?: number,
        c?: number,
        spiralAngle?: number
    ) {
        this.#P5 = p5;
        // nullish coalescing operator (??)
        // left side ?? right side
        // - if left side is null or undefined, return the right side.
        this.#POINT_TOTAL = pointTotal ?? Math.floor(p5.random(100, 300));
        this.#POINT_SIZE = pointSize ?? p5.random(2, 10);
        this.#C = c ?? p5.random(4, 20);
        const vector: P5Lib.Vector = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.#POS.set(pos ?? vector);
        this.#colA = getColor(p5);
        this.#colB = getColor(p5);
        this.#SPIRAL_ANGLE = p5.constrain(spiralAngle ?? p5.random(135, 139), 135, 139);
        this.#DELTA_THETA = p5.random(-0.01, 0.01);
        this.#buildPoints();
    }

    #buildPoints(): void {
        for (let i: number = 0; i < this.#POINT_TOTAL; i++) {
            const a: number = i * this.#SPIRAL_ANGLE;
            const theta: number = this.#P5.radians(a);
            const r: number = this.#C * Math.sqrt(i);
            const x: number = (Math.cos(theta) * r);
            const y: number = (Math.sin(theta) * r);
            const lerpAmount: number = this.#P5.map(i, 0, (this.#POINT_TOTAL - 1), 0, 1);
            const c: P5Lib.Color = this.#P5.lerpColor(this.#colA, this.#colB, lerpAmount);
            this.#COLORS.push(c);
            this.#POSITIONS.push(new P5Lib.Vector(x, y));
        }
    }

    public draw(): void {
        this.#P5.push();
        this.#P5.translate(this.#POS.x, this.#POS.y);
        this.#P5.rotate(this.#theta);
        this.#POSITIONS.forEach((pos: P5Lib.Vector, index: number): void => {
            this.#P5.noStroke();
            this.#P5.fill(this.#COLORS[index]);
            this.#P5.ellipse(pos.x, pos.y, this.#POINT_SIZE, this.#POINT_SIZE);
        });
        this.#P5.pop();
    }

    public move(): void {
        this.#theta += this.#DELTA_THETA;
    }

    public setColor(color: P5Lib.Color | P5Lib.Color[]) {
        if (color instanceof P5Lib.Color) {
            this.#colA = color;
            this.#colB = color;
        } else {
            if (color.length >= 2) {
                this.#colA = color[0];
                this.#colB = color[1];
            } else if (color.length == 1) {
                this.#colA = color[0];
                this.#colB = color[0];
            }
        }
    }
}

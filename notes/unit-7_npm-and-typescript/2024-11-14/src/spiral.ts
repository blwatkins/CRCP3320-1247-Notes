import P5Lib from 'p5';

export class Spiral {
    readonly #P5: P5Lib;
    readonly #SPECIAL: number = 137.5;
    readonly #POS: P5Lib.Vector = new P5Lib.Vector();
    readonly #POSITIONS: P5Lib.Vector[] = [];
    readonly #COLORS: P5Lib.Color[] = [];
    readonly #POINT_TOTAL: number;
    readonly #POINT_SIZE: number;
    readonly #C: number;
    readonly #COL_A: P5Lib.Color;
    readonly #COL_B: P5Lib.Color;

    constructor(p5: P5Lib, pos: P5Lib.Vector, pointTotal: number, pointSize: number, c: number) {
        this.#P5 = p5;
        this.#POINT_TOTAL = pointTotal;
        this.#POINT_SIZE = pointSize;
        this.#C = c;
        this.#POS.set(pos);
        this.#COL_A = this.#getColor();
        this.#COL_B = this.#getColor();
        this.#buildPoints();
    }

    #buildPoints(): void {
        for (let i: number = 0; i < this.#POINT_TOTAL; i++) {
            const a: number = i * this.#SPECIAL;
            const theta: number = this.#P5.radians(a);
            const r: number = this.#C * Math.sqrt(i);
            const x: number = (Math.cos(theta) * r) + this.#POS.x;
            const y: number = (Math.sin(theta) * r) + this.#POS.y;
            const lerpAmount: number = this.#P5.map(i, 0, (this.#POINT_TOTAL - 1), 0, 1);
            const c: P5Lib.Color = this.#P5.lerpColor(this.#COL_A, this.#COL_B, lerpAmount);
            this.#COLORS.push(c);
            this.#POSITIONS.push(new P5Lib.Vector(x, y));
            console.log(x + ", " + y);
        }
    }

    public draw(): void {
        this.#POSITIONS.forEach((pos: P5Lib.Vector, index: number): void => {
            this.#P5.noStroke();
            this.#P5.fill(this.#COLORS[index]);
            this.#P5.ellipse(pos.x, pos.y, this.#POINT_SIZE, this.#POINT_SIZE);
        });
    }

    #getColor(): P5Lib.Color {
        const r: number = this.#P5.random(255);
        const g: number = this.#P5.random(255);
        const b: number = this.#P5.random(255);
        return this.#P5.color(r, g, b);
    }
}

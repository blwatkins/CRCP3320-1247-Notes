import P5Lib from 'p5';
import { Drawable } from "./drawable";

export abstract class Shape implements Drawable {
    protected readonly P5: P5Lib;
    protected readonly POS: P5Lib.Vector;
    protected readonly SPEED: P5Lib.Vector;
    protected readonly SIZE: number;

    protected constructor(p5: P5Lib) {
        this.P5 = p5;
        this.POS = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.SPEED = p5.createVector(p5.random(-4, 4), p5.random(-4, 4));
        this.SIZE = p5.random(10, 100);
    }
    
    public abstract draw(): void;

    public abstract setColor(color: P5Lib.Color | P5Lib.Color[]): void;

    public move(): void {
        this.POS.add(this.SPEED);

        if (this.POS.x > this.P5.width + this.SIZE) {
            this.POS.x = -this.SIZE;
        } else if (this.POS.x < -this.SIZE) {
            this.POS.x = this.P5.width + this.SIZE
        }

        if (this.POS.y > this.P5.height + this.SIZE) {
            this.POS.y = -this.SIZE;
        } else if (this.POS.y < -this.SIZE) {
            this.POS.y = this.P5.height + this.SIZE
        }
    }
}

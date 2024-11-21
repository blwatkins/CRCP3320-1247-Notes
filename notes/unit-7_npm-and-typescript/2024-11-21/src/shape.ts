import P5Lib from 'p5';
import { Drawable } from "./drawable";
import { getMaxX, getMaxY, getMinX, getMinY, getRandomPosition } from './canvas';

export abstract class Shape implements Drawable {
    protected readonly P5: P5Lib;
    protected readonly POS: P5Lib.Vector;
    protected readonly SPEED: P5Lib.Vector;
    protected readonly SIZE: number;

    protected constructor(p5: P5Lib) {
        this.P5 = p5;
        this.POS = getRandomPosition(p5);
        this.SPEED = p5.createVector(p5.random(-4, 4), p5.random(-4, 4));
        this.SIZE = p5.random(5, 250);
    }
    
    public abstract draw(): void;

    public abstract setColor(color: P5Lib.Color | P5Lib.Color[]): void;

    public move(): void {
        this.POS.add(this.SPEED);

        if (this.POS.x > getMaxX(this.P5) + this.SIZE) {
            this.POS.x = getMinX(this.P5) - this.SIZE;
        } else if (this.POS.x < getMinX(this.P5) - this.SIZE) {
            this.POS.x = getMaxX(this.P5) + this.SIZE
        }

        if (this.POS.y > getMaxY(this.P5) + this.SIZE) {
            this.POS.y = getMinY(this.P5) - this.SIZE;
        } else if (this.POS.y < getMinY(this.P5) - this.SIZE) {
            this.POS.y = getMaxY(this.P5) + this.SIZE
        }
    }
}

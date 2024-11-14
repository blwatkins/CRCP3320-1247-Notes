import P5Lib from 'p5';
import { Spiral } from './spiral';

let s1: Spiral;

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25);
        s1 = new Spiral(p5, new P5Lib.Vector(p5.width / 2.0, p5.height / 2.0), 250, 4, 10);
    }

    p5.draw = (): void => {
        p5.background(0);
        s1.draw();
    }
}

new P5Lib(sketch);

import P5Lib from 'p5';

import { Circle } from './circle';
import { getColor, getColorFromRange, Range } from './color';
import { Drawable } from './drawable';
import { Spiral } from './spiral';

function sketch(p5: P5Lib): void {
    const drawings: Drawable[] = [];
    const drawingsTotal: number = 100;

    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth - 25, p5.windowHeight - 25, p5.WEBGL);

        for (let i: number = 0; i < drawingsTotal; i++) {
            const r: number = p5.random(0, 2);

            if (r < 1) {
                drawings.push(new Spiral(p5));
            } else {
                drawings.push(new Circle(p5));
            }
        }
    }

    p5.draw = (): void => {
        p5.background(0);
        
        drawings.forEach((drawing: Drawable) => {
            drawing.draw();
            drawing.move();
        });
    }

    p5.keyPressed = (): void => {
        
        if (p5.key === 'a') {
            const c: P5Lib.Color = getColor(p5);
            drawings.forEach((drawing: Drawable) => {
                drawing.setColor(c);
            });
        } else if (p5.key === 's') {
            drawings.forEach((drawing: Drawable) => {
                const c: P5Lib.Color = getColor(p5);
                drawing.setColor(c);
            });
        } else if (p5.key === 'd') {
            const c1: P5Lib.Color = getColor(p5);
            const c2: P5Lib.Color = getColor(p5);
            drawings.forEach((drawing: Drawable) => {
                drawing.setColor([c1, c2]);
            });
        } else if (p5.key === 'f') {
            const rRange: Range = {min: 100, max: 255};
            const gRange: Range = {min: 0, max: 100};
            const bRange: Range = {min: 100, max: 255};
            drawings.forEach((drawing: Drawable) => {
                const c: P5Lib.Color = getColorFromRange(
                    p5,
                    rRange,
                    gRange,
                    bRange);
                drawing.setColor(c);
            });
        } else if (p5.key === 'g') {
            const rRange: Range = {min: 100, max: 255};
            const gRange: Range = {min: 0, max: 100};
            const bRange: Range = {min: 100, max: 255};
            drawings.forEach((drawing: Drawable) => {
                const c1: P5Lib.Color = getColorFromRange(
                    p5,
                    rRange,
                    gRange,
                    bRange);
                const c2: P5Lib.Color = getColorFromRange(
                        p5,
                        {min: 0, max: 100},
                        {min: 100, max: 255},
                        {min: 100, max: 255});
                drawing.setColor([c1, c2]);
            });
        }
    }
}

new P5Lib(sketch);

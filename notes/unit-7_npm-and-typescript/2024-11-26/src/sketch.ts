import P5Lib from 'p5';

import { Circle } from './circle';
import { getColor, getColorFromRange, HSLBuilder, Range, RGBBuilder } from './color';
import { Drawable } from './drawable';
import { Spiral } from './spiral';

import '../assets/style/sketch.css';

function sketch(p5: P5Lib): void {
    const drawings: Drawable[] = [];
    const drawingsTotal: number = 100;

    p5.setup = (): void => {
        const size: number = Math.min(p5.windowWidth, p5.windowHeight);
        p5.createCanvas(size, size, p5.WEBGL);

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
            const builder: RGBBuilder = getRGBBuilder();
            drawings.forEach((drawing: Drawable) => {
                const c: P5Lib.Color = getColorFromRange(p5, builder);
                drawing.setColor(c);
            });
        } else if (p5.key === 'g') {
            const builder: HSLBuilder = getHSLBuilder();
            drawings.forEach((drawing: Drawable) => {
                const c1: P5Lib.Color = getColorFromRange(p5, builder);
                const c2: P5Lib.Color = getColorFromRange(p5, builder);
                drawing.setColor([c1, c2]);
            });
        }
    }

    function getRGBBuilder(): RGBBuilder {
        const range: Range = {min: 0, max: 255};
        return {
            red: range,
            green: range,
            blue: range,
            type: 'RGB_BUILDER'
        }
    }

    function getHSLBuilder(): HSLBuilder {
        const hRange: Range = {min: 90, max: 270};
        const sRange: Range = {min: 80, max: 100};
        const lRange: Range = {min: 50, max: 100};
        return {
            hue: hRange,
            sat: sRange,
            light: lRange,
            type: 'HSL_BUILDER'
        }
    }
}

new P5Lib(sketch);

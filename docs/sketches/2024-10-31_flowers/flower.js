// Flower class

class Flower {
    #position;
    #petalColor;
    #petalCount;
    #size;

    constructor() {
        this.#position = createVector(random(width), random(height));
        this.#petalColor = color(random(100, 255), random(100), random(100, 255));
        this.#petalCount = Math.floor(random(4, 10));
        this.#size = random(10, 50);
    }

    draw() {
        push();
        translate(this.#position.x, this.#position.y);
        this.#drawPetals();
        this.#drawCenter();
        pop();
    }

    #drawPetals() {
        let theta = 0;
        fill(this.#petalColor);
        noStroke();

        for (let i = 0; i < this.#petalCount; i++) {
            let x = cos(theta) * (this.#size / 1.5);
            let y = sin(theta) * (this.#size / 1.5);
            ellipse(x, y, this.#size, this.#size);
            theta += TWO_PI / this.#petalCount;
        }
    }

    #drawCenter() {
        fill(0);
        noStroke();
        ellipse(0, 0, this.#size, this.#size);
    }
}

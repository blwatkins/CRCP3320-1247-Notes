// Flower class

class Flower {
    static #weight = 2;
    static #stroke;

    #position;
    #petalColor;
    #size;

    constructor(x, y, petalColor) {
        this.#position = createVector(x, y);
        this.#petalColor = petalColor;
        this.#size = 50;
    }

    get petalColor() {
        return this.#petalColor.toString();
    }

    set petalColor(petalColor) {
        this.#petalColor = petalColor;
    }

    static get strokeWeight() {
        return Flower.#weight;
    }

    static set strokeWeight(w) {
        Flower.#weight = w;
    }

    static get stroke() {
        return Flower.#stroke;
    }

    static set stroke(s) {
        Flower.#stroke = s;
    }

    draw() {
        strokeWeight(Flower.#weight);

        if (Flower.#stroke) {
            stroke(Flower.#stroke);
        } else {
            stroke(0);
        }
        
        fill(this.#petalColor);
        ellipse(this.#position.x,
                this.#position.y,
                this.#size,
                this.#size);
    }
}

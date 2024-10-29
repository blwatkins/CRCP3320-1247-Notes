// Flower class

class Flower {
    position;
    color;

    constructor(x, y) {
        console.log(x);
        console.log(y);
        this.position = createVector(x, y);
        this.color = color(255, 0, 0);
    }
}

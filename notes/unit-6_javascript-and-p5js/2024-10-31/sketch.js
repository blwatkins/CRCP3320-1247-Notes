// p5.js Sketch

let f;
let f2;

function setup() {
    createCanvas(500, 500);
    Flower.stroke = color(0, 255, 0);
    f = new Flower(100, 100, color(255, 0, 0));
    f2 = new Flower(200, 400, color(0, 0, 255));
    console.log(f.petalColor);
}

function draw() {
    background(255);
    f.draw();
    f2.draw();
}

function keyPressed() {
    f.petalColor = color(random(255),
                         random(255),
                         random(255));

    if (key === 's') {
        Flower.stroke = color(255, 0, 255);
    }
}

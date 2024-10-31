// p5.js Sketch

let f;
let flowers = [];
let flowerCount = 50;

function setup() {
    createCanvas(500, 500);
    
    for (let i = 0; i < flowerCount; i++) {
        flowers.push(new Flower());
    }
}

function draw() {
    background(255);
    
    flowers.forEach((flower) => flower.draw());
}

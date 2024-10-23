// my p5.js sketch
/*
* created Tuesday, October 22, 2024
* green background
*/

let bgColor;

function setup() {
    createCanvas(500, 500)
    bgColor = color(random(255), random(255), random(255));
}

function draw() {
    background(bgColor);
}

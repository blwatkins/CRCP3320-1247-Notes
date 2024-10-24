let x;
let y;
let size;
let speedX;
let speedY;
let dateText;
let score;
let isStar;
let drawShape;

let shapeCount;
let xs = [];
let ys = [];
let sides = [];
let sizes = [];
let speedXs = [];
let speedYs = [];
let colors = [];
let drawShapes = [];
let isOutlines = [];

function setup() {
    createCanvas(500, 500);
    x = random(width);
    y = random(height);
    size = 75;
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    dateText = 'Thursday, October 24';
    score = 0;
    isStar = false;
    drawShape = polygon;

    shapeCount = 10;
    for (let i = 0; i < shapeCount; i++) {
        xs.push(random(width));
        ys.push(random(height));
        sides.push(floor(random(3, 12)));
        sizes.push(random(5, 100));
        speedXs.push(random(-5, 5));
        speedYs.push(random(-5, 5));
        colors.push(color(random(150), random(100, 255), random(100, 255)));
        let r = floor(random(2));
        if (r === 0) {
            drawShapes.push(polygon);
        } else {
            drawShapes.push(star);
        }

        r = floor(random(2));
        if (r === 0) {
            isOutlines.push(false);
        } else {
            isOutlines.push(true);
        }
    }
}

function draw() {
    background(175, 0, 200);
    fill(250, 180, 50);
    noStroke();
    drawShape(x, y, 5, size);

    for (let i = 0; i < shapeCount; i++) {
        if (isOutlines[i]) {
            noStroke();
            fill(colors[i]);
        } else {
            strokeWeight(3);
            stroke(colors[i]);
            noFill();
        }

        drawShapes[i](xs[i], ys[i], sides[i], sizes[i]);

        xs[i] += speedXs[i];
        ys[i] += speedYs[i];

        if (xs[i] > width + (sizes[i] * 2)) {
            xs[i] = -(sizes[i] * 2);
            speedXs[i] = random(0.5, 5);
        } else if (xs[i] < -(sizes[i] * 2)) {
            xs[i] = width + (sizes[i] * 2);
            speedXs[i] = random(-5, -0.5);
        }

        if (ys[i] > height + (sizes[i] * 2.0)) {
            ys[i] = -(sizes[i] * 2.0);
            speedYs[i] = random(0.5, 5);
        } else if (ys[i] < -(sizes[i] * 2.0)) {
            ys[i] = height + (sizes[i] * 2.0);
            speedYs[i] = random(-5, -0.5);
        }
    }

    strokeWeight(3);
    stroke(200);
    for (let i = 1; i < 10; i++) {
        line(0, i * (height / 10), width, i * (height / 10));
    }

    fill(0);
    textSize(20);
    noStroke();
    textAlign(RIGHT, BOTTOM);
    text(`score: ${score}`, width - 10, height - 35);
    text(dateText, width - 10, height - 10);

    x += speedX;
    y += speedY;

    if (x > width + size) {
        x = -size;
    } else if (x < -size) {
        x = width + size;
    }

    if (y > height + size) {
        y = -size;
    } else if (y < -size) {
        y = height + size;
    }
}

function keyPressed() {
    dateText += '!';
    score += 10;

    if (key === ' ') {
        isStar = !isStar;

        if (isStar) {
            drawShape = star;
        } else {
            drawShape = polygon;
        }
    }
}

let star = function(x, y, sides, radius) {
    push();
    translate(x, y);
    beginShape();
    let theta = 0;
    let points = sides * 2;

    for (let i = 0; i < points; i++) {
        let r;

        if (i % 2 === 0) {
            r = radius;
        } else {
            r = radius / 2.0;
        }
        
        let x = cos(theta) * r;
        let y = sin(theta) * r;
        vertex(x, y);
        theta += TWO_PI / points;
    }

    endShape(CLOSE);
    pop();
};

let polygon = function(x, y, sides, radius) {
    push();
    translate(x, y);
    beginShape();
    let theta = 0;

    for (let i = 0; i < sides; i++) {
        let x = cos(theta) * radius;
        let y = sin(theta) * radius;
        vertex(x, y);
        theta += TWO_PI / sides;
    }

    endShape(CLOSE);
    pop();
};

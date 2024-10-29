// p5.js Sketch
// Tuesday, October 29

function setup() {
    createCanvas(500, 500);
    truthyAndFalsy();
    forIn();
    forOf();
    weirdFunctionCalls();
    typeCheckFunctionCalls();
    objectExample();
}

function draw() {
    background(0, 100, 200);
}

function sum(x, y) {
    return x + y;
}

function truthyAndFalsy() {
    let func = sum;

    if (func) {
        console.log(`func is truthy`);
    } else {
        console.log(`func is falsy`);
    }

    let value = 2;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }

    if (value == true) {
        console.log(`${value} is equal to true`);
    } else {
        console.log(`${value} is not eqaul to true`);
    }

    value = undefined;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }

    value = 0;

    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
}

function forIn() {
    console.log('for...in');
    let numbers = [3, 4, 6, 9];
    let indices = '';

    for (const index in numbers) {
        indices += index + ' ';
    }

    console.log(indices);

    let myObject = {'name': 'Bill', 'age': 46};
    let keys = '';
    let values = '';

    for (const key in myObject) {
        keys += key + ' ';
        const value = myObject[key];
        values += value + ' ';
    }

    console.log(`keys: ${keys}`);
    console.log(`values: ${values}`);
}

function forOf() {
    console.log('for...of');
    let numbers = [3, 4, 6, 9];
    let indices = '';

    for (const index of numbers) {
        indices += index + ' ';
    }

    console.log(indices);
}

function squareThird(value) {
    return Math.sqrt(value) ** 3;
}

function weirdFunctionCalls() {
    console.log(`squareThird(5) = ${squareThird(5)}`);
    console.log(`squareThird('river') = ${squareThird('river')}`);
    console.log(`squareThird() = ${squareThird()}`);
    console.log(`squareThird(16, 9, 'boat') = ${squareThird(16, 9, 'boat')}`);
    console.log(`squareThird('hi', 5) = ${squareThird('hi', 5)}`);
}

function squareFifth(value) {
    console.log(`typeof ${value} = ${typeof value}`);
    if (typeof value === 'number') {
        return Math.sqrt(value) ** 5;
    } else {
        return undefined;
    }
}

function typeCheckFunctionCalls() {
    console.log(`squareFifth(5) = ${squareFifth(5)}`);
    console.log(`squareFifth('river') = ${squareFifth('river')}`);
    console.log(`squareFifth() = ${squareFifth()}`);
    console.log(`squareFifth(16, 9, 'boat') = ${squareFifth(16, 9, 'boat')}`);
    console.log(`squareFifth('hi', 5) = ${squareFifth('hi', 5)}`);

    let result = squareFifth(67);
    console.log(`squareFifth(67) = ${squareFifth(67)}`);

    if (result) {
        console.log('result is truthy');
    } else {
        console.log('result is falsy');
    }

    if (typeof result === 'number') {
        console.log('result is a number');
    } else {
        console.log('result is not a number');
    }

    result = squareFifth(0);
    console.log(`squareFifth(0) = ${squareFifth(0)}`);

    if (result) {
        console.log('result is truthy');
    } else {
        console.log('result is falsy');
    }

    if (typeof result === 'number') {
        console.log('result is a number');
    } else {
        console.log('result is not a number');
    }

    result = squareFifth('rain');
    console.log(`squareFifth('rain') = ${squareFifth('rain')}`);

    if (result) {
        console.log('result is truthy');
    } else {
        console.log('result is falsy');
    }

    if (typeof result === 'number') {
        console.log('result is a number');
    } else {
        console.log('result is not a number');
    }
}

function objectExample() {
    let myCar = {
        'tires': 'Goodyear',
        'year': '2019',
        'make': 'Ford',
        'miles traveled': 10_500
    };

    console.log(`myCar.tires = ${myCar.tires}`);
    console.log(`myCar['make'] = ${myCar['make']}`);
    console.log(`myCar['miles traveled'] = ${myCar['miles traveled']}`);
}

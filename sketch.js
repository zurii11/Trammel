let w = 400;
let h = 400;
let c;

function setup() {
    createCanvas(w, h);
    c = new Circle(createVector(w/2, h/2), 300);
}

function draw() {
    background(25);

    c.show();
}
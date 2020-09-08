let p;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    background(255);
    circle(mouseX, mouseY, 80);
  }
}

class Particle {
  constructor() {
    //position
    //width and height are native variables in p5
    this.pos = createVector(random(0, width, random(0, height)));
    this.size = 10;
  }
  draw = () => {
    fill(0, 0, 0, 255);
    circle(this.pos.x, this.pos.y, this.size);
  };
}

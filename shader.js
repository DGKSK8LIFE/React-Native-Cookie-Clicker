let p;
function setup() {
  createCanvas(width, height);
  p = new Particle();
}

function draw() {
    p.draw()
}
class Particle {
  constructor() {
    //position
    //width and height are native variables in p5
    this.pos = createVector(random(0, width), random(0, height));
    this.size = 10;
  }
  draw = () => {
    fill(0, 0, 0, 255);
    circle(this.pos.x, this.pos.y, this.size);
  };
}

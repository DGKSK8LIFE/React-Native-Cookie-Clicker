let p;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();
}

function draw() {
    background(220)
    p.update()
  p.draw();
}
class Particle {
  constructor() {
    //position
    //width and height are native variables in p5
    this.pos = createVector(random(0, width), random(0, height));
    this.size = 10;
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }
  draw = () => {
    fill(0, 0, 0, 255);
    circle(this.pos.x, this.pos.y, this.size);
  };
  update = () => {
    this.pos.add(this.vel);
    this.edges()
  };
  edges = () => {
    if(this.pos.x<0 || this.pos.x >width){
        this.vel.x*=-1
    }
    if(this.pos.y<0 || this.pos.y >height){
        this.vel.y*=-1
    }
  }
}

let p;
let particles = [];
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  const particlesLen = floor(window.innerWidth / 7);
  for (let i = 0; i < particlesLen; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(220);
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    particle.connect(particles.slice(index));
  });
}
class Particle {
  constructor(color) {
    //position
    //width and height are native variables in p5
    this.pos = createVector(random(0, width), random(0, height));
    this.size = 13;
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.dx = width / 2;
    this.dy = height / 2;
    //dm/dt
  }
  draw = () => {
    noStroke();
    fill(
      map(this.pos.x, 0, window.innerWidth, 0, 255),
      map(this.pos.y, 0, window.innerHeight, 0, 255),
      map(this.pos.x, window.innerWidth, 0, 0, 255)
    );
    circle(this.pos.x, this.pos.y, this.size);
  };

  update = () => {
    //how do I want to do this
    //I want there to be a rate and when it slows down the rate -> 0
    this.pos.add(
      (-(mouseX - this.dx) / 50) * this.vel.x,
      (-(mouseY - this.dy) / 50) * this.vel.y
    );
    this.edges();
  };
  edges = () => {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  };
  //connections
  connect = (particles) => {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        //stroke(map(this.pos.x,window.innerWidth,0,0,255),map(this.pos.x,0,window.innerWidth,0,255),map(this.pos.x,0,window.innerHeight,0,255), 100);
        stroke(0, 70);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  };
}

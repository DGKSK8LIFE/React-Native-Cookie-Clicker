function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
      
    if (mouseIsPressed) {
      fill(0);
      background(255)
      circle(mouseX, mouseY, 80);
    }
    
  }
  class particle {
constructor(){
    //position 
    this.pos = createVector(random(0,window.innerWidth,random(0,innerHeight)))

}





  }
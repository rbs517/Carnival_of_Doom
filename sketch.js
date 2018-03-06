var ppl = [];
var count = 0;
var cart = [];
var dy = 0;
var angle = 0;
var state = false;

function setup() {
  createElement("h1", "Carnival of Doom");
  createCanvas(600, 400);
  angleMode(DEGREES);
  cart = new Cart();
  for (var i = 0; i < 8; i++) {
    ppl[i] = new People();
  }
}

function draw() {
  background(120, 200, 255);
  push();
  noStroke();
  fill(50, 200, 50);
  rect(0, 270, width, 200);
  pop();
  
  push();
  noFill();
  ellipse(300, 150, 250, 250);
  ellipse(300, 150, 200, 200);
  line(300, 160, 370, 330);
  line(300, 160, 240, 330);
  translate(300, 150);
  rotate(angle); 
  let count = 0;
  for (var degs = 0; degs < 360; degs += 45) {
    push();
    rotate(degs);
    line(115, 0, 0, 0);
    cart.show();
    pop();
    
    push();
    ppl[count].show(degs, dy);
    pop();
  }
  
  pop();
    if (state) {
    angle = angle - 1;
  	} else {
    angle = angle + 1;
  	}
  fill(200, 100, 200);
  ellipse(300, 150, 30, 30);
  stroke(200, 100, 200);
  rect(210, 330, 190, 5);
}
  function mousePressed() {
  	if (dist(mouseX, mouseY, 300, 150) < 20/2) {
  		state = !state;
    	count++;
    
      if (count >=8){
	  		print(count); 
    		ppl[0].fall();
      }
    }
}
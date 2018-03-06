class Person {

  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.rotation = _r;
  }

  show(degs, dy) {
    push();
    rotate(degs);
    translate(this.x, this.y);
    this.body = line(0, -137, 9, -120);
    this.arm1 = line(-4, -132, 9, -125);
    this.arm2 = line(9, -132, 9, -125);
    this.leg1 = line(-4, -115, 9, -120);
    this.leg2 = line(5, -115, 9, -120);
    this.head = ellipse(0, -140, 7, 7);
    pop();
  }

  fall(degs, dy) {
  	this.y = (600);
  }
} 
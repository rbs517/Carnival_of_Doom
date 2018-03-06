class Cart {
  
  constructor(_x, _y, _r) { 
    this.x = _x;
    this.y = _y;
    this.rotation = _r;
   
  }  
  
    show() {
  	rectMode(CENTER);
    rect(115, 0, 30, 35);
  }
  
}
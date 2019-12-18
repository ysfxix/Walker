var walker1;

function setup() {
  createCanvas(600, 600);
  walker1 = new Walker(width/2, height/2);
  // walker1.sayHello();
}

function draw() {
  background(100,100,100,100);
  
  walker1.move();
  //console.log(walker1.x + " : " + walker1.y);
  walker1.display();  
}
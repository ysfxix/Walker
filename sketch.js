// var walker1;
var walkers = [];

function setup() {
  createCanvas(600, 600);
  // walker1 = new Walker(width/2, height/2);
  // walker1.sayHello();
}

function draw() {
  background(100,100,100,100);
  
  // walker1.move();
  // walker1.display();  

  // fetch all the walkers from the array and display them on the canvas
  walkers.forEach((w) => {
    // console.log(w);
    w.move();
    w.display();
  });
}

// Create a new Walker object and push it into walkers[] array
function spawnWalker() {
  walkers.push(new Walker(width/2, height/2));
  document.getElementById("walkerCount").innerHTML = walkers.length;
}
function Walker(x, y){ 
  this.x = x;
  this.y = y;
}

Walker.prototype.move = function(){
  
  var choice =  Math.floor((Math.random() * 4));
  // console.log("Moving " + choice);
  
  switch(choice){
   
    case 0: 
      this.x++; 
      // console.log("Moving 0 - x:" + this.x);
      break;
      
    case 1: 
      this.x--; 
      // console.log("Moving 1 - x:" + this.x);
      break;
      
    case 2: 
      this.y++; 
      // console.log("Moving 2 - y:" + this.y);
      break;
      
    case 3: 
      this.y--; 
      // console.log("Moving 3 - y:" + this.y);
      break;
    
    default: 
      this.x++;
  } 
}

Walker.prototype.display = function(){ 
  noStroke(0);
  ellipse(this.x, this.y, 5);
}

Walker.prototype.sayHello = function(){
  console.log("Hello from Walker!");
}


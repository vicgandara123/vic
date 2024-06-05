function setup() {
  createCanvas(400, 400);
background("pink"); 
}

function draw() {
  
  stroke("blue");
  fill("white");
  
  if(mouseIsPressed){
  rect(mouseX, mouseY,10,15)
  }
}

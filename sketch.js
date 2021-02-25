
var movingRect,fixedRect;
var g1,g2,g3,g4;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(600, 200, 60, 50);
  fixedRect.shapeColor = "blue";

  g1= createSprite(400,100,50,50);
  g1.shapeColor = "orange";

  g2= createSprite(400,800,50,50);
  g2.shapeColor = "orange";

  g3= createSprite(300,100,50,50);
  g3.shapeColor = "orange";

  g4= createSprite(400,100,50,50);
  g4.shapeColor = "orange";

  movingRect.velocityX = 5;
fixedRect.velocityX = -5;
g1.velocityY = 5;
g2.velocityY = -5;
}


function draw() {
  background(0); 
  bounceOff(g1,g2);

  console.log(); // movingRect.x/2 + fixedRect.x/2
  /*if(isTouching(movingRect,g3)){
    console.log("touched");
  }
  else {
    
    console.log("not touched")
  } */
bounceOff(movingRect,fixedRect);
  drawSprites();
}


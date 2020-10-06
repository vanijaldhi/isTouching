var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
   rect1 = createSprite(400, 200, 50, 50);
   rect1.shapeColor = "white";

   rect2 = createSprite(400,300,80,30); 
   rect2.shapeColor = "green";

   rect3 = createSprite(400,50,80,30); 
   rect3.velocityY = 4;
   rect3.shapeColor = "yellow";

  // rect3.velocityX = 5;
 
   rect4 = createSprite(400,350,80,30); 
   rect4.velocityY = -6;
   rect4.shapeColor = "purple";

  // rect4.velocityX = -8;
 
}

function draw() {
  background(0,0,0);  
  

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if(rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 
    && rect2.x - rect1.x <= rect1.width/2 + rect2.width/2
    && rect1.y - rect2.y <= rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y <= rect1.height/2 + rect2.height/2 ){
   rect2.shapeColor = "blue";
   rect1.shapeColor = "red";
  }
 else {
  rect1.shapeColor = "white";
  rect2.shapeColor = "green";

 }
  if( rect3.y - rect4.y <= rect3.height/2 + rect4.height/2
  && rect4.y - rect3.y <= rect3.height/2 + rect4.height/2 ){
  rect3.velocityY = (-1)*rect3.velocityY;

  rect4.velocityY = (-1)*rect4.velocityY;
  
  
  }
 
  drawSprites();
}
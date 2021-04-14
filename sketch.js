function setup() {
  createCanvas(800,800);
 car = createSprite(400, 200, 50, 50);
 car.shapeColor="green"
 wall = createSprite(200,200,80,40);
 wall.shapeColor="green"
 ladder = createSprite(300,300,50,50);
ladder.shapeColor="yellow"
 door = createSprite(300,450,50,50);
 door.shapeColor="blue";
 door.velocityY=-2
 ladder.velocityY=2
}

function draw() {
  background("black");  
car.y=World.mouseY
car.x=World.mouseX
if (isTouching(car,wall))
{
  car.shapeColor="red"
  wall.shapeColor="red"
}
else
{
  car.shapeColor="green"
  wall.shapeColor="green"
}
/*if (isTouching (car,ladder)){
  ladder.shapeColor="red";
}*/
bounceOff(ladder,window)
  drawSprites();





}

var car,wall;
var speed, weight; 

function setup() {
  createCanvas(1600, 800);
   
  speed=random(50,96);
  weight=random(400,1500)

  car=createSprite(50, 200, 50,50);   
  car.velocityX = speed;
  car.shapeColor="white";

  wall=createSprite(1000,200, 60, 500)
  wall.shapeColor="black";
		
}


function draw() {
  background("white");

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=(0.5 * weight * speed* speed)/22500;
	if(deformation>180)
	{
		car.shapeColor="red";
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
		car.shapeColor="green";
	}
  }  
  
  drawSprites();
 
}



var bullet;
var damage;
var weight ,speed,thickness;
var invisibleWall1;




function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,200,50,20);
  bullet.shapeColor = "white";

  thickness = random(22,83);
  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = "grey";

  invisibleWall1 = createSprite(wall.x,200,thickness-10,1000);
  invisibleWall1.visible = false;
  
  
  speed = random(223,321);
  weight = random(30,52);

  
}

function draw() {
  background(0,0,0);  

  bullet.collide(invisibleWall1);
  
 
  if (keyDown("1")) {
    bullet.velocityX = speed;
  }

 

 if (bullet.isTouching(wall)) {
    checkDamage();
  } 

 

  drawSprites();
}
function checkDamage(){

damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

 if (damage>10) {
    bullet.shapeColor= "red";
  } 
   if (damage<=10) {
    bullet.shapeColor = "green";
  }
 
}




  


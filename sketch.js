var bullet1;
var bullet2;
var bullet3;
var bullet4;
var speed;
var weight;
var thickness;
var sideWall1
var sideWall2;
var sideWall3;
var sideWall4;
var damage;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed1 = random(223,321)
  speed2 = random(223,321)
  speed3 = random(223,321)
  speed4 = random(223,321)
  thickness = random(23,83)
  thickness1 = random(25,85)
  thickness2 = random(10,70)
  thickness3 = random(5,100)
  weight1 = random(30,52)
  weight2 = random(30,52)
  weight3 = random(30,52)
  weight4 = random(30,52)
  bullet1 = createSprite(50,50,10,5)
  sideWall1 = createSprite(100,100,3200,10);
  bullet2 = createSprite(50,150,10,5)
 sideWall2 = createSprite(100,200,3200,10);
 bullet3 = createSprite(50,250,10,5)
 sideWall3 = createSprite(100,300,3200,10);
 bullet4 = createSprite(50,350,10,5)
 sideWall4 = createSprite(100,400,3200,20);
wall1 = createSprite(1500,50,thickness,70);
wall2 = createSprite(1500,150,thickness,70);
wall3 = createSprite(1500,250,thickness,70);
wall4 = createSprite(1500,350,thickness,70);

}

function draw() {
  background(255,255,255);  
  bullet1.velocityX = speed1
  bullet2.velocityX = speed2
  bullet3.velocityX = speed3
  bullet4.velocityX = speed4
 
  if(hasCollided(bullet1,wall1))
  {
  bullet1.velocityX = 0;
  var damage = 0.5*weight1*speed1*speed1/(thickness*thickness*thickness);

if(damage>10)
{
  wall1.shapeColor = color(255,0,0);
}
if(damage<10)
{
  wall1.shapeColor = color(0,255,0);
}

  }
  if(hasCollided(bullet2,wall2))
  {
  bullet2.velocityX = 0;
  var damage = 0.5*weight2*speed2*speed2/(thickness1*thickness1*thickness1);

if(damage>10)
{
  wall2.shapeColor = color(255,0,0);
}
if(damage<10)
{
  wall2.shapeColor = color(0,255,0);
}

  }
  if(hasCollided(bullet3,wall3))
  {
  bullet3.velocityX = 0;
  var damage = 0.5*weight3*speed3*speed3/(thickness2*thickness2*thickness2);

if(damage>10)
{
  wall3.shapeColor = color(255,0,0);
}
if(damage<10)
{
  wall3.shapeColor = color(0,255,0);
}

  }
  if(hasCollided(bullet4,wall4))
  {
  bullet4.velocityX = 0;
  var damage = 0.5*weight4*speed4*speed4/(thickness3*thickness3*thickness3);

if(damage>10)
{
  wall4.shapeColor = color(255,0,0);
}
if(damage<10)
{
  wall4.shapeColor = color(0,255,0);
}

  }


  drawSprites();
}
function hasCollided(a,b)
{
bulletRightEdge = a.x + a.width;
wallLeftEdge = b.x;
if(bulletRightEdge >= wallLeftEdge)
{
  return true
}else{
  return false;
}
}
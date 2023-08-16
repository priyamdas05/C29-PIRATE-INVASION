const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraint;
const Body = Matter.Body;

let engine;
let world;

var tower;
var angle, cannon;
var cannonball;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle = -PI/30;

  tower = new Tower(150,375,160,310);
  cannon = new Cannon(180,110,110,50,angle);
  cannonball = new CannonBall(cannon.x+10,cannon.y+35);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
 //display tower(challenge 4)
  tower.display();
  cannon.display();
  cannonball.display();
 
}

function keyReleased(){
  if(keyCode ===(DOWN_ARROW)){
    cannonball.shoot();
  }
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var groundObj,leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options ={
		isStatic:false,
		restitution:0.4,
		friction:0,
		density:1.2 
	}

	
	ball=Bodies.circle(100,5,20,ball_options)
	World.add(world,ball)
	Engine.run(engine);


	groundObj=new ground(width/2,680,width,20)
	leftSide = new ground(500,620,20,120)
	rightSide = new ground(600,620,20,120)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.display()
  leftSide.display()
  rightSide.display()
  
	keyPressed()
  drawSprites();
 
}


function keyPressed(){
	if(keyCode ===UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:1,y:0.9})
	}
}
















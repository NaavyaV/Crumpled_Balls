var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(600,700,1200,50);
	ground2 = new Ground(650,600,20,200);
	ground3 = new Ground(550,675,200,20);
	ground4 = new Ground(450,600,20,200);
	paper = new Paper(100, 600, 20);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground3.display();
  ground.display();
  ground2.display();
  ground4.display();
  paper.display();
  text('Recycling bin', 500, 250);
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y: -60});
  }
}



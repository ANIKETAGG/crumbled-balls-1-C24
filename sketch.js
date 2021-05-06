
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= Bodies.rectangle(400,680,800,20, {isStatic:true} );
	World.add(world,ground);



	paper = new Paper(150,500,20);

	dustbin = new Dustbin(550,660);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin.display();

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:50, y:-50});
	}
}

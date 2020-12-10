const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,140,300,30);
	
	bob1 = new Bob(300,400,25);
	bob2 = new Bob(350,400,25);
	bob3 = new Bob(400,400,25);
	bob4 = new Bob(450,400,25);
	bob5 = new Bob(500,400,25);

	rope1 = new Rope(bob_1.body,ROOF.body,-100,0);
	rope2 = new Rope(bob_2.body,ROOF.body,-50,0);
	rope3 = new Rope(bob_3.body,ROOF.body,0,0);
	rope4 = new Rope(bob_4.body,ROOF.body,50,0);
	rope5 = new Rope(bob_5.body,ROOF.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  fill("pink");
  stroke("pink");
  textSize(73);
  text("NEWTON'S CRADLE",65,75);
  stroke("yellow");
  fill("yellow");
  textSize(40);
  text("Press Right Arrow to Apply Force",65,550);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob_1.body,bob_1.body.position,{x:-50,y:-50});
	}
}
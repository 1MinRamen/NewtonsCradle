
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/3,20);

	bob1 = new Bob(630,500,80);
	bob2 = new Bob(710,500,80);
	bob3 = new Bob(790,500,80);
	bob4 = new Bob(870,500,80);
	bob5 = new Bob(950,500,80);

	rope1 = new Rope(bob1.body,roof.body,-175,0);
	rope2 = new Rope(bob2.body,roof.body,-90,0);
	rope3 = new Rope(bob3.body,roof.body,-10,0);
	rope4 = new Rope(bob4.body,roof.body,70,0);
	rope5 = new Rope(bob5.body,roof.body,150,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-125});
	}
}


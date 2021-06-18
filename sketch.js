
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1400,650);
	engine = Engine.create();
	world = engine.world;
paper = new Paper(200,40,10);
ground = new Ground(400,680,800,20);

//leftSide = new Dustbin(650,620,20,100);
//bottom = new Dustbin(610,660,20,100);
//rightSide = new Dustbin(690,620,100,20);
boxPosition = width/2+400;
boxY = 510;
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);



	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  paper.display();
  boxleftSprite.display();
  boxBase.display();
  drawSprites();
 
}


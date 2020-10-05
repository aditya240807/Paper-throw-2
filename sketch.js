var papere
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  paper1IMG = loadImage("paper.png");
  dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);
groundSprite = createSprite(width/2,415,1900,30);
groundSprite.shapeColor = color(255,0,0)
 

 
 

paper1 = createSprite(1201,12031,50,50)
paper1.addImage(paper1IMG)
paper1.scale=0.5
 
 dustbinSprite = createSprite(1020,320,200,20);
 dustbinSprite.shapeColor = "green";
 dustbinSprite.addImage(dustbinIMG)
 dustbinSprite.scale = 0.5

 
 sidebin1 = createSprite(955,335,10,100);
 sidebin1.shapeColor = "green";

 sidebin2 = createSprite(1085,335,10,100);
 sidebin2.shapeColor = "green";
 
	engine = Engine.create();
	world = engine.world;

 
	//Create the Bodies Here.
Ground = Bodies.rectangle(100,415,2500,30);
World.add(world, Ground)

Dustbin = Bodies.rectangle(1000,385, 200, 10)
World.add(world, Dustbin)

Dustbin2 = Bodies.rectangle(955,350, 20, 100)
World.add(world, Dustbin2)

Dustbin3 = Bodies.rectangle(1085, 335 , 10, 100)
World.add(world, Dustbin3)

papere = Bodies.circle(100,250,30,30);
World.add(world, papere);
	Engine.run(engine);
  
}


function draw() {
	background("white")
  Engine.update(engine);
  rectMode(CENTER);
  paper1.x=papere.position.x
  paper1.y = papere.position.y
  Matter.Body.setStatic(Ground, true);
  Matter.Body.setStatic(Dustbin, true);
  Matter.Body.setStatic(Dustbin2, true);
  Matter.Body.setStatic(Dustbin3, true);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
	Matter.Body.applyForce(papere,papere.position,{x:0.16,y:-0.16})
  }

}



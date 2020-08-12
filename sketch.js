
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball = new Ball(100,300,10)
     box1 = new Box(600,650,150,20);
     box2 = new Box(525,610,20,100);
     box3 = new Box(675,610,20,100);

     groundSprite=createSprite(width/2, height-35, width,10);
     groundSprite.shapeColor=color(255)
   
   
     
   
    
     
   
     //Create a Ground
     ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
      World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
  }
}


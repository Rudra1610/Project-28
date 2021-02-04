
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground,tree,boy;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var slingshot; 

function preload() {

  boy = loadImage("Plucking mangoes/boy.png")
  tree = loadImage("Plucking mangoes/tree.png")
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,1200,50);
	mango1 = new Mango(810,400,50,50);
	mango2 = new Mango(840,370,50,50);
	mango3 = new Mango(900,350,50,50);
	mango4 = new Mango(940,370,50,50);
	mango5 = new Mango(1000,350,50,50);
  stone = new Stone(200,300,50,50);
  slingshot = new Slingsgot(stone.body,{x:300,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 // Engine.update(engine);

 image(boy ,200,340,200,300);
 image(tree ,780,275,275,300);

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  //slingshot.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:100, y:420}) 
	  slingshot.attach(stone.body);
	}
  }

  function detectollision(stone,mango){
	
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=mango.r+stone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(mango.body,true);
    }

  }

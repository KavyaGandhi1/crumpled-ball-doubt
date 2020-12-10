
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground1;
var paper1;


function setup() {
	rectMode(CENTER);
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	//Create the Bodies Here.
ground1 = new ground(400,690,1800,20);
box1 = new box(900,670,190,20);
box2 = new box(810,630,20,100);
box3 =new box(990,630,20,100);
paper1= new paper(200,250,20);
console.log(paper1);

}


function draw() {
 
  background(0);
  

  ground1.display();
 box1.display();
 box2.display();
 box3.display();
 
 keypressed();
 paper1.display();
}

function keypressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x: 10, y: -10});
	}
}





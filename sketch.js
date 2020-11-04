const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4
var block5,block6,block7,block8
var block9,block10,block11,block12
var block13,block14,block15,block16
var ground;
var polygon,slingShot;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
    world = engine.world;

  ground=new Ground(660,650,280,20)
   
  block1=new Block(580,625,30,40)
  block2=new Block(610,625,30,40)
  block3=new Block(640,625,30,40)
  block4=new Block(670,625,30,40)
  block5=new Block(700,625,30,40)
  block6=new Block(730,625,30,40)
  block7=new Block(760,625,30,40)

  block8=new Block(610,585,30,40)
  block9=new Block(640,585,30,40)
  block10=new Block(670,585,30,40)
  block11=new Block(700,585,30,40)
  block12=new Block(730,585,30,40)

  block13=new Block(640,545,30,40)
  block14=new Block(670,545,30,40)
  block15=new Block(700,545,30,40)

  block16=new Block(670,505,30,40)

  polygon=new Polygon(100,500,10);
  

  slingShot=new SlingShot(polygon.body,{x:150,y:500})
  Engine.run(engine)
}

function draw() {
  background("white"); 
  Engine.update(engine); 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();
  polygon.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

  
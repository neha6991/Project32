const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon, polygonImg;
var slingshot;

var score =0;


function preload(){

  polygonImg=loadImage("polygon.png");

} 
function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450,390,900,20);

  //stand one blocks

  stand1 = new Stand(390,300,320,10);
  stand2 = new Stand(700,200,220,10);

  block1 = new Block(280,275,40,40);
  block2 = new Block(320,275,40,40);
  block3 = new Block(360,275,40,40);
  block4 = new Block(400,275,40,40);
  block5 = new Block(440,275,40,40);
  block6 = new Block(480,275,40,40);
  block7 = new Block(520,275,40,40);

  block8 = new Block(320,235,40,40);
  block9 = new Block(360,235,40,40);
  block10 = new Block(400,235,40,40);
  block11 = new Block(440,235,40,40);
  block12 = new Block(480,235,40,40);

  block13 = new Block(360,195,40,40);
  block14 = new Block(400,195,40,40);
  block15 = new Block(440,195,40,40);

  block16 = new Block(400,155,40,40);

  //stand2 blocks

  blocks1 = new Block(620,175,40,40);
  blocks2 = new Block(660,175,40,40);
  blocks3 = new Block(700,175,40,40);
  blocks4 = new Block(740,175,40,40);
  blocks5 = new Block(780,175,40,40);

  blocks6 = new Block(660,135,40,40);
  blocks7 = new Block(700,135,40,40);
  blocks8 = new Block(740,135,40,40);

  blocks9 = new Block(700,95,40,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

} 

function draw() {
  background(56,44,44); 
 
  Engine.update(engine);

  ground.display();

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.score();
  block6.display();
  block7.score();
  block7.display();
  
  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  fill("grey");
  block16.display();

  fill("skyblue");
  blocks1.display();
  blocks1.score();
  blocks2.display();
  blocks2.score();
  blocks3.display();
  blocks3.score();
  blocks4.display();
  blocks4.score();
  blocks5.display();
  blocks5.score();

  fill("pink");
  blocks6.display();
  blocks6.score();
  blocks7.display();
  blocks7.score();
  blocks8.display();
  blocks8.score();

  fill("turquoise")
  blocks9.display();
  blocks9.score();

  textSize(20);
  
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("SCORE : "+score,790,30);
  //adding image to polyogon
  

  fill("gold");
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingshot.display();

  
  

}

function mouseDragged(){
    
    Matter.Body.setPosition(this.polygon, {x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

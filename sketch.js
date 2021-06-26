const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var bg,snow

var snowfall=[]

function preload(){
  bg = loadImage("snow3.jpg");
  
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  background(bg); 
  Engine.update(engine)
  if(frameCount%5===0)
  {
  snowfall.push(new Snow(random(0,800),0))
  }
  for(var i = 0;i<snowfall.length;i++)
  {
    snowfall[i].display()
  }
  drawSprites();
}
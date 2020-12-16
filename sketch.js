const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box1;
var box2;
 
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,390,400,20);
    box1 = new Box(250,150,50,60);
    box2=  new Box(258,60,40,50);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    box1.display();
    box2.display();
}
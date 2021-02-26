const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var ground;
var particle;
var gameState="play";
var count=0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  if (gameState==="end"){
    textSize(60);
    text("GAME OVER",200,460);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (particle!=null)
   {
     particle.display();
     if (particle.body.position.y>500)
     {
       if (particle.body.position.x<300)
       {
         score=score+500;
         particle=null;

       }
      else if (particle.body.position.x>300 && particle.body.position.x<560)
       {
         score=score+100;
         particle=null;

       }
      else if (particle.body.position.x>560)
       {
         score=score+200;
         particle=null;

       }
     }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
   textSize(15);
   text("500",30,530);
   text("500",100,530);
   text("500",180,530);
   text("500",260,530);
   text("100",340,530);
   text("100",410,530);
   text("100",500,530);
   text("200",585,530);
   text("200",660,530);
   text("200",750,530);
stroke("yellow");
line(0,500,800,500);
text("SCORE: "+score,50,50);
}
function mousePressed(){
  if (gameState!=="end")
  {
    particle= new Particle(mouseX,10,10,10);
    count=count+1;
    if (count>=5) {
      gameState="end";
    }
  }
}
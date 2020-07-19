
var fixedrectangle;
var movingrectangle;
var gameobject1;
var gameobject2;
function setup() {
  createCanvas(800,400);
  
   movingrectangle= createSprite(100,100,50,60);
   fixedrectangle= createSprite(100,200,20,80);
  movingrectangle.velocityY=5;
  fixedrectangle.velocityY=-3;


}

function draw() {
  background(255,255,255);  


  

    if(bounceoff(movingrectangle,fixedrectangle))
  {
    movingrectangle.shapeColor='blue';
  fixedrectangle.shapeColor='blue';
  }else{
    movingrectangle.shapeColor='yellow';
  fixedrectangle.shapeColor='yellow';
  }


  drawSprites();
}

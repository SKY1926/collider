var fixedrectangle;
var movingrectangle;
var gameobject1;
var gameobject2;
function setup() {
  createCanvas(800,400);
  
   movingrectangle= createSprite(300,300,50,60);
   fixedrectangle= createSprite(500,300,20,80);
  movingrectangle.shapeColor='yellow';
  fixedrectangle.shapeColor='yellow';
}

function draw() {
  background(255,255,255);  

movingrectangle.x=World.mouseX;
movingrectangle.y=World.mouseY;

    if(istouching(movingrectanglet,fixedrectangle))
  {
    movingrectangle.shapeColor='blue';
  fixedrectangle.shapeColor='blue';
  }else{
    movingrectangle.shapeColor='yellow';
  fixedrectangle.shapeColor='yellow';
  }


  drawSprites();
}

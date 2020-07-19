function bounceoff(object1,object2)
{
  if((object1.x-object2.x<object1.width/2+object2.width/2 )&& (object2.x-object1.x<object1.width/2+object2.width/2)){
   fixedrectangle.velocityX=fixedrectangle.velocityX* (-1);
   movingrectangle.velocityX=movingrectangle.velocityX* (-1);
  }
  if((object1.y-object2.y<object1.height/2+object2.height/2)&&(object2.y-object1.y<object1.height/2+object2.height/2)){
    fixedrectangle.velocityY=fixedrectangle.velocityY* (-1);
   movingrectangle.velocityY=movingrectangle.velocityY* (-1);
  
}
}
function istouching(object1,object2)
{
  if((object1.x-object2.x<object1.width/2+object2.width/2 )&& (object2.x-object1.x<object1.width/2+object2.width/2)&&(object1.y-object2.y<object1.height/2+object2.height/2)&&(object2.y-object1.y<object1.height/2+object2.height/2)){
   return true;
  }else {
  return  false;
}
}
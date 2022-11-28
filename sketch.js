var sea,ship;
var seaImg,shipImg;
// create and name the variable for the sprites we are going to use

function preload(){
  // things that computer should do before the game is started
  seaImg = loadImage("sea.png");
  // make the image for the sea
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
  //make the image and animation for the ship

}

function setup(){
  createCanvas(400,400);
  // create the canvas
  background("blue");
  // change the backgorund of the canvas

  // Moving background
  sea=createSprite(400,200);
  // create the sea
  sea.addImage("moving_sea", seaImg);
  // add image for the sea
  sea.scale=0.3;
  // change the scale of the sea image

  
  ship = createSprite(130,200,30,30);
  // create the ship
  ship.addAnimation("movingShip",shipImg1);
  // add the image and the animation for the ship
  ship.scale =0.25;
  // change the size of the ship
  
}

function draw() {
  background(0);
  
  
  
  sea.velocityX = -3;
  // make a running animation for the the background.
 
  

  
    
  drawSprites();
}

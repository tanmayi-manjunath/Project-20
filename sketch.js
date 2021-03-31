var bgImg;
var catImg,catImg2,catImg3;
var mouseImg,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg2 = loadImage("images/cat2.png");
    mouseImg2 = loadImage("images/mouse2.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(700,600);
    //create tom and jerry sprites here
    var cat = createSprite(600,520,20,20);
    cat.scale=0.10;
    cat.addImage(catImg);

    var mouse = createSprite(65,510,20,20);
    mouse.scale=0.10;
    mouse.addImage(mouseImg);

    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.isTouching(mouse)){
       cat.addAnimation("catTired",cat4.png);
       cat.changeAnimation("catTired");
       mouse.addAnimation("mouseLaughing",mouse4.png);
       mouse.changeAnimation("mouseLaughing");
       cat.x=0;
   }
    
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = cat.velocityX+2;
    cat.addAnimation("catWalking",catImg2);
    cat.changeAnimation("catWalking");
    cat.frameDelay = 25;
}
 
  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2.png);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
  }

  
      
  





}

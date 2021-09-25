var ground,ground_image
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex =createSprite(50,150,20,20)
 trex.addAnimation("ty",trex_running)
 trex.scale=0.5

 ground=createSprite(300,180,600,20)
 ground.addImage(ground_image)
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
drawSprites()
}

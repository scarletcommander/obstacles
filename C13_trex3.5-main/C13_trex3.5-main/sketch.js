var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstacle,obstacleimg
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle5

var newImage;

var score = 00000000000000000

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstacle = loadImage("obstacle1.png")
  obstacle1 = loadImage("obstacle2.png")
  obstacle2 = loadImage("obstacle3.png")
  obstacle3 = loadImage("obstacle4.png")
  obstacle4 = loadImage("obstacle5.png")
  obstacle5 = loadImage("obstacle6.png")


 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ "amrith")


  
}

function draw() {
  background(600);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnobstacles();

  text("score : " + score, 467,20);

  score = score + 1
  drawSprites();

}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 190
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

    
    }
}

function spawnobstacles() {
  if (frameCount % 100 == 0){
  var obs = createSprite(450,160,100,120)
  obs.velocityX = -2

  var rand = Math.round(random(1,6))
  switch(rand) {
    case 1 : obs.addImage(obstacle)
    break ;


      case 2 : obs.addImage(obstacle1)
      break ;

      case 3 : obs.addImage(obstacle2)
      break ;

      case 4: obs.addImage(obstacle3)
      break ;

      case 5 : obs.addImage(obstacle4)
      break ;

      case 6 : obs.addImage(obstacle5)
      break ;

    

  }
  obs.scale = 0.7
  obs.lifetime = 190
  }
}

var towerImg, tower;
var energia, energiasGroup;
var frezer, frezerImg
var goku, gokuImg;

var gameState = "play"
var energiaImg
var score;
function preload(){
  towerImg = loadImage("tower.png");
  
  frezerImg = loadImage("frezer.png")
  gokuImg = loadImage("goku.png");
  spookySound = loadSound("spooky.wav");
   energiaImg = loadImage("energia.jpg")
   
  }

function setup(){
  createCanvas(600,600);

  spookySound.loop();
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.depth =-2;

  energiasGroup = new Group();
  
  
 goku = createSprite(200,200,50,50);
 goku.scale = 0.15;
  goku.addImage("goku", gokuImg);

  goku.setCollider("rectangle",5,20);
  goku.debug = true
}



score = 0;
function draw(){
  background(0);
  
  if(keyDown("left_arrow")){
    goku.x = goku.x - 3;
  }
  
  if(keyDown("right_arrow")){
    goku.x = goku.x + 3;
  }
  
  if(keyDown("space")){
    goku.velocityY = -10;
  }
  
  goku.velocityY = goku.velocityY + 0.8
  
  if(tower.y > 400){
    tower.y = 300
  }
  
  if(energiasGroup.isTouching(goku)){
    goku.velocityY = 0;
  }
  if(energiasGroup.isTouching(goku) || goku.y > 600){
    goku.destroy();
    gameState = "end"
  }
  stroke("red");
    textSize(20);
    fill("red");
    text("score:"+ score,500, 50)
    score.depth = tower.depth;
     score.depth +=1;
  
  
  
  
  if (gameState === "play") {
    score = score + Math.round(getFrameRate()/60);
    

    
    spawnDoors();

    
    //climbersGroup.collide(ghost);
    
    
    if(score === 3000){
      frezer = createSprite(300, 40, 300, 300)
      frezer.addImage("frezer",frezerImg)
      frezer.scale=0.16; 
      gameState = "pelea final";
      
      
  }
  
  

  
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
  tower.velocityY=0;
  energiasGroupEach.velocityY=0;
}

if(gameState ==="win"){
  stroke("blue");
  fill("blue");
  textSize(30);
  text("You win", 230,250)
  tower.velocityY=0;
  energiasGroupEach.velocityY=0;
}
if(gameState ==="pelea final"){
  if(goku.isTouching(frezer)){
    frezer.destroy();
  gameState = "win";
  
}
spawnDoors2();

}


drawSprites();

}

function spawnDoors() {
  //escribir aquí el código para aparecer puertas en la torre
  if (frameCount % 240 === 0) {
    var energia = createSprite(200, -50);
    
    
    energia.x = Math.round(random(120,400));
    ;
    
    energia.addImage(energiaImg);
    
    
energia.scale=0.3;

    energia.velocityY = 1;
   
    
    goku.depth = energia.depth;
    goku.depth +=1;
   
    //asignar lifetime a la variable
    energia.lifetime = 800;
    

    
    //agregar cada objeto al grupo
    energiasGroup.add(energia);
    
  }
}

function spawnDoors2() {
  //escribir aquí el código para aparecer puertas en la torre
  if (frameCount % 160 === 0) {
    var energia = createSprite(200, -50);
    
    
    energia.x = Math.round(random(120,500));
    ;
    
    energia.addImage(energiaImg);
    
    
energia.scale=0.3;

    energia.velocityY = 1;
   
    
    goku.depth = energia.depth;
    goku.depth +=1;
   
    //asignar lifetime a la variable
    energia.lifetime = 800;
    

    
    //agregar cada objeto al grupo
    energiasGroup.add(energia);
    
  }
}
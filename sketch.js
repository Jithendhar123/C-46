var gameState = "start"
var playButton, playbuttonImage
var bg, bgimage
var fishingrod, fishingrodImage
var fish, fishImage,fish1
var fishGroup
 var score = 0

function preload(){
  playButtonImage = loadImage("playbutton.png")
  bgImage = loadImage("background.jpg")
  fishingrodImage = loadImage("fishingrod.png")
  fishImage = loadImage("fish.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = createSprite(width/2, height-200, 10, 10)
  playButton.addImage(playButtonImage)
  playButton.scale = 0.3

  bg = createSprite(width/2, height/2, width, height)
  bg.addImage(bgImage)
  bg.scale = 0.71
  bg.visible = false

  fishingrod = createSprite(width/2, height/2+200)
  fishingrod.addImage(fishingrodImage)
  fishingrod.scale = 0.7
  
  fishGroup = new Group()
  fish1Group = new Group()


}


function draw() {
  fishingrod.debug = true
  fishingrod
  background("lightblue");
  frameRate = 50
  drawSprites();
  fishingrod.x = mouseX
  if(gameState === "start"){
    strokeWeight(8)
    fill("blue")
   textSize(50)
   text("FISHING GAME", width/2-150, 100)
   playButton.visible = true
   fishingrod.visible = false
   if(mousePressedOver(playButton)){
     gameState = "play"
   }
  }

  if(gameState === "play"){
 bg.visible = true
 fill("black")
 textSize(30)
 text("SCORE = "+score, width-300, 100)
 playButton.visible = false
 fishingrod.visible = true
 spawnFish();
 spawnFish1();
    if(fishingrod.isTouching(fishGroup)||fishingrod.isTouching(fish1Group)){
      score = score+1
      fishGroup.destroyEach();
      fish1Group.destroyEach();
    }
  }


  
 
}

function spawnFish(){
if (frameCount% 100 === 0){
  fish = createSprite(random(width-600, width+600),random(height-100, height-10))
  fish.addImage(fishImage)
  fish.velocityX = 3
  fish.scale = 0.2
  fish.lifetime = 100
  fishGroup.add(fish)



  
}
}

function spawnFish1(){
  if (frameCount% 200 === 0){
    fish1 = createSprite(random(width-600, width+600),random(height-100, height-10))
    fish1.addImage(fishImage)
    fish1.velocityX = -3
    fish1.scale = 0.2
    fish1.lifetime = 100
    fish1.rotation = -180
    fish1Group.add(fish1)

  
    
  }
  }
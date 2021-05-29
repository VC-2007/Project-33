



var bg,bgImg;
var snow,snowImg

function preload(){
bgImg = loadImage("snow3.jpg")
snowImg = loadImage("snow4.webp")
}


function setup() {
  createCanvas(800,400);
  snow = createSprite(100,100,10,10)
  snow.addImage(snowImg);
  snow.scale = 0.3

  
  
}

function draw() {
  background(bgImg);  
  snow.y = snow.y + 3

  if(snow.y>420 && snow.x ===100){
    snow.y = 100
    snow.x = 300
  }

  if(snow.y>420 && snow.x ===300){
    snow.y = 100
    snow.x = 500
  }

  if(snow.y>420 && snow.x ===500){
    snow.y = 100
    snow.x = 700
  }

  if(snow.y>420 && snow.x ===700){
    snow.y = 100
    snow.x = 100
  }
  drawSprites();
}
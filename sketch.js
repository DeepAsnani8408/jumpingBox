var canvas;
var music;
var rect1;
var rect2;
var rect3;
var rect4;
var box;


function preload(){
 
  
  
  
  
  
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rect1=createSprite(100, 580, 150, 10);
    rect2=createSprite(300, 580, 150, 10);
    rect3=createSprite(500, 580, 150, 10);
    rect4=createSprite(700, 580, 150, 10);
    box=createSprite(400, 300, 20, 20);
    box.velocityY=2;
    //create 4 different surfaces
              


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
drawSprites();
}

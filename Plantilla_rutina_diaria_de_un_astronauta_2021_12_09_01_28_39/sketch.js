var player;
var sleep, moveAnimation, gymAnimation, drinkAnimation, brush, eatAnimation
var iss, issImg;

function preload(){

  //sleep = loadImage("sleep.png");
  //moveAnimation = loadAnimation("move1.png", "move.png");
  //gymAnimaiton = loadAnimation("gym1.png", "gym2.png");
  //drinkAnimation = loadAnimation("drink1.png", "drink2.png")
  //eatAnimation = loadAnimation("eat1.png", "eat2.png");
  //brush = loadImage("brush.png");
  //issImg = loadImage("iss.png");
  
}

function setup() {
  createCanvas(800, 600);

  player = createSprite(40,300,10,10);
  player.velocityX = 3;
  player.velocityY = -3;
  //player.addAnimation("moveAnimation");

  iss = createSprite(400, 300);
  //iss.addAnimation("iss.png")
  iss.visible = false;
  
}

function draw() {

  background(0);

  text("To reset push letter R ",500,500)
  text("To sleep push letter S ",500,490)
  text("To eat push letter E ",500,480)
  text("To drink push letter D ",500,470)
  text("To gym push letter G ",500,460)
  text("To brush push letter B ",500,500)

  if(keyDown("r")){
    //player.changeAnimation("moveAnimation")
  } 

  if(keyDown("s")){
    //player.changeAnimaiton("sleep")
  }

  if(keyDown("e")){
    //player.changeAnimation("eatAnimaiton")
  }

  if(keyDown("d")){
    //player.changeAnimation("drinkAnimation")
  }

  if(keyDown("g")){
    //player.changeAnimation("gymAnimation")
  }

  if(keyDown("b")){
    //player.changeAnimtion("brush")
  }

  createEdgeSprites();
  player.bounceOff(edges);
  drawSprites();
}
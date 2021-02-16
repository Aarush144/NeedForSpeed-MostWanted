var car;
var car_img;
var wall;
var speed;
var weight;
var rating;
var deformation;
var background_img;
var state = "previous";

function preload (){

  car_img = loadImage("2-2-car-transparent.png");

  background_img = loadImage("360_F_194613626_JmikmesGaOn1yLuQigEagXPuZcbLqq1z.jpg")

}

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color("blue");

  car = createSprite(50,200,50,50);
  car.addImage(car_img);
  car.scale = 0.1;
}

function draw() {
  background(background_img);  

  if(state==="previous") {

   car.visible = false;
   wall.visible = false;

    textSize(40);
    fill("cyan");

    text("Instructions",600,50);
    fill("hotpink");
    text("PRESS SPACE BAR TO START!!",300,150);
    text("This is not a game, this is a project based on the deformation of cars.",300,250);
    text("PRESS 'SPACE' TO WATCH",300,350);

    if(keyDown("space")) {
      state="run";
    }
  }

  if(state==="run") {

    car.visible = true;
    wall.visible = true;
    



    weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    car.velocityX = speed;

  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    deformation = Math.round(0.5*weight*speed*speed/22500);
     
    if(deformation>=180) {
    car.shapeColor=color(255,0,0);
    rating="LETHAL";
    }

    if(deformation<180 && deformation>=80) {
      car.shapeColor=color(230,230,0);
      rating="AVERAGE";
    }

    if(deformation<80) {
      car.shapeColor=color(0,255,0);
      rating="GOOD";
    }

    state="end";
  }
}

  if(state==="end") {

    if(deformation>=180) {
      fill(255,0,0);
    }

    if(deformation<180 && deformation>=80) {
      fill(230,230,0);
    }

    if(deformation<80) {
      fill(0,255,0);
    }

    textSize(25);
    text("Speed: "+speed+"km/h",200,50);
    text("Weight: "+weight+"kg",400,50);
    text("Deformation: "+deformation,600,50);

    textSize(25);
    
    text("Rating: "+rating,800,50);

    text("Press 'R' to reset",1050,50);
    if(keyDown("r")) {
      reset();
    }
  }

  drawSprites();
}


function reset() {
  state="previous";
  car.x=50;
  car.shapeColor=color(127,127,127);

}
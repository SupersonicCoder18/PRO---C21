var bullet, wall;

function setup() {
  createCanvas(1600,400);
  bullet = new Bullet(100, 200, 100, 25);
  bullet.shapeColor = "white";
  wall = createSprite(1500, 200, 30, 400);
  wall.shapeColor = "grey";
}

function draw() {
  background(0, 0, 0); 
  createEdgeSprites();
  drawSprites();
  if (bullet.collide(wall) && (0.5*weight*speed*speed)/22500 < 2866) {
    bullet.shapeColor = "green";
    bullet.velocityX = 0;
  } 
  else if (bullet.collide(wall) && (0.5*weight*speed*speed)/22500 < 4666) {
    bullet.shapeColor = "yellow";
    bullet.velocityX = 0;
  }
  else if (bullet.collide(wall) && (0.5*weight*speed*speed)/22500 > 4666) {
    bullet.shapeColor = "red";
    bullet.velocityX = 0;
  }
  else if(bullet.collide(wall) && (0.5*weight*speed*speed)/22500 < 2866) {
    bullet.shapeColor = "white";
    bullet.speed = 0;
  }

  if (keyDown("space")) {
    bullet.velocityX = random(30, 95);
  }
   bullet.display();
}
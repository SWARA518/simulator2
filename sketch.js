var wall,thickness;
var bullet,speed,weight;
var D;

function setup() {
  createCanvas(1600,400);
  thickness = random(18,50);

  speed = random(22,83);
  
  weight = random(0,100);
  
  bullet = createSprite(50,200,50,50)
  bullet.shapeColor = "black"
  bullet.velocityX = speed;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80; 
}

function draw() {
  background(255,255,255);  
  hasCollided();
  
  drawSprites();

  function hasCollided() {
  
    if(bullet.collide(wall)){
      D = (0.5 * weight * speed * speed) / thickness  * thickness * thickness;
      console.log(D)
      
      
      if( D < 10){
        wall.shapeColor = "green";
      }
        
      
    
      else if( D > 10){
        wall.shapeColor = "grey";
        text("wall rejected",1300,200);
      }
    
      
      }

  }

}
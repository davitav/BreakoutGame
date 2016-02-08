var gameover, unpaused, user, treeImg;

var leo, tree, oldMan, bus, mop; //Sprites

var objects; //group of object Sprites

var treeLife= 200;

var level = 1;

var secretScore;

var collision = false;


function preLoad(){
    
    treeImg = loadImage("data/tree.png");
    leoImg = loadImage("data/tree.png");
}


function setup(){
    
    createCanvas(windowWidth, windowHeight);
    bg1(); 
    
    gameover=true;//start off as true in order to have user prompt when to begin
    unpaused=true;//game starts out not paused
    
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("Breakout, the game", windowWidth/2, windowHeight/2-50);
    
    textSize(18);
    text("Press Enter to start", windowWidth/2, windowHeight/2);
    text("Press R to restart and P to Pause", windowWidth/2, windowHeight/2+50);

        
    //camera.position.x=width/2;

   
    
}//setup
 
function draw(){

    if(gameover && keyWentDown(ENTER)){
       
        newGame();}
    
    //collisionCheck();

    if(!gameover) {
        
        keepInBorders();  //constraining leo
        
        fill(20, 100, 200);   
        rect(400, 300, treeLife, 200);  //life of the tree
        
        bg1();
        
        //leo.changeAnimation("idle");

         
    
        if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.position.x = leo.position.x-2;    

        }
        
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            //leo.changeAnimation("moveRight");

            leo.position.x = leo.position.x+2;    

        }
        
        
        if(keyWentDown(82)){
            if (confirm('Are you sure you want to restart?')) {
            //restart
                leo.remove();
                tree.remove();
                newGame()
                } else {
            // keep going!
                }     
            
        }
        
        
     if(leo.overlap(tree)){
      collision = true;
      text("Watering", 350, 200);
      //remove(tree);
    }
        
    if(leo.overlap(mop)){
      collision = true;
      text("Washing Floor", width-300, 200);
      //remove(mop);
    }
        
        
    camera.off();//background image is still
    camera.on();
    
    
  drawSprites();

}
    
}//close draw
    

function bg1(){  //1st world
    background(0);
}

function bg2(){  //2nd world
    //bg image
}
    
function newGame() {//resetting values for new game
    
    bg1();
    
    text("hello", 100, 100);
    gameover=false;

    unpaused=true;
    
    treeLife = 100;
    
    leo=createSprite(width/2,500,50,50); //leo sprite
    
    //leo.addAnimation("idle", "data/png/Idle__000.png", "data/png/Idle__009.png");  //leo idle animation

    //leo.addAnimation("moveRight", "data/png/Run__000.png", "data/png/Run__009.png");  //leo moving right animation
   
    
    tree=createSprite(width/12,400,300,250); //tree sprite
    //tree.addAnimation("tree", "data/tree.png");  //tree image
    
    mop=createSprite(width-width/12,400,300,250); //mop sprite

    
    
    drawSprites();
}




function keepInBorders(){  //constraining leo
    
  if(leo.position.x < 0)
    leo.position.x = 0;
  if(leo.position.y < 0)
    leo.position.y = 0;
  if(leo.position.x > windowWidth)
    leo.position.x = windowWidth;
  if(leo.position.y > windowHeight)
    leo.position.y = windowHeight;  
    

}
    






    
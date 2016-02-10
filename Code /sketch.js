var gameover, unpaused, user, treeImg;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites

var objects; //group of object Sprites

var life= 100;  //leo's indicator

var level = 1;  //level variable
 
//var secretScore;

var collision = false;  //collision variable 

var currentGoodValue = 0;  //current good image shown

var currentBadValue = 0;  //current bad image shown


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
        lifeDisplay();
         
    
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
      life = life+30;
      //remove(tree);
    }
        
    if(leo.overlap(mop)){
      collision = true;
      text("Washing Floor", width-300, 200);
        if(collision == true){
        life = life - 30;
        console.log("About to remove");
        mop.remove();
        console.log("Removed");
        }
    }
        
        
    camera.off();//background image is still
    camera.on();
    
    
  drawSprites();

}
    
}//close draw
    

function bg1(){  //1st world
    background(0);
    rect(0, 525, width, height-525);
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

function lifeDisplay(){
    
    fill(60);
    rect(width/2-100, 30, 200, 40);
    fill(0, 230, 70);
    rect(width/2-100, 30, life, 40);

}
    

function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
}

//change level, with 2 parameters - what level you're on and, what choice was made and
//where you wanna go and all the changes you wanna make
//array with all the choices
//array for good and for bad
//give me a good object of value 3
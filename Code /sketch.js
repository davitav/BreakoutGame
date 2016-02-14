var gameover, unpaused, user, treeImg;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites
var crack; 

var objects; //group of object Sprites

var life= 100;  //leo's indicator

var level = 1;  //level variable
 
//var secretScore;

var collision = false;  //collision variable 

var cGValue = 0;  //current good value to display image

var cBValue = 0;  //current bad value to display 

var itemsWorld1 = [];  //arrays to store objects from world 1 and 2
var itemsWorld2 = [];

var storyBoard = [];
var storyimg1, storyimg2;

var bgInside;


function preLoad(){
    
    treeImg = loadImage("data/tree.png");
    leoImg = loadImage("data/tree.png");
    
    storyboard = [storyimg1, storyimg2];
    
    bgInside = loadImage("data/bgInside.png");

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

    itemsWorld1 = [mop, crack];  
    //camera.position.x=width/2;

   
    
}//setup
 
function draw(){
    

    if(gameover && keyWentDown(ENTER)){
       
        newGame();}
    
    //collisionCheck();
    

    if(!gameover) {
        
        keepInBorders();  //constraining leo
        
        bg1();
        lifeDisplay();  //displaying Leo's mood
        
        updatePosition(); //moving Leo
        
        collide(tree, mop);  //collide function
          
    
    camera.off();//background image is still
    camera.on();
    
    
  drawSprites();

}
    
}//close draw
    

function bg1(){  //1st world
    background(0);
    //image(bgInside, 0, 0);

    rect(0, 525, width, height-525);
}

function bg2(){  //2nd world
    //bg image
    background(255);
}
    
function newGame() {//resetting values for new game
    
    bg1();
    
    text("hello", 100, 100);
    gameover=false;

    unpaused=true;
    
    life = 100;
    
    leo=createSprite(width/2,500,50,50); //leo sprite
    
    //leo.addAnimation("idle", "data/png/Idle__000.png", "data/png/Idle__009.png");  //leo idle animation

    //leo.addAnimation("moveRight", "data/png/Run__000.png", "data/png/Run__009.png");  //leo moving right animation
   
    
    tree=createSprite(width/12,400,300,250); //tree sprite
    //tree.addAnimation("tree", "data/tree.png");  //tree image
    
    mop=createSprite(width-width/12,400,300,250); //mop sprite
 
    drawSprites();
}


function updatePosition(){
    
     if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.position.x = leo.position.x-2;    

        }
        
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            //leo.changeAnimation("moveRight");

            leo.position.x = leo.position.x+2;    

        }
    
    
      if(keyWentDown(82)){   //restarting if prompted by user
            if (confirm('Are you sure you want to restart?')) {
            //restart
                leo.remove();
                tree.remove();
                newGame()
                } else {
            // keep going!
                }               
        }    
} //updatePosition


function collide(item1, item2){  //function for collisions
    
     if(leo.overlap(item1)){
      collision = true;
      text("Watering", 350, 200);
      life = life+30;
    }
        
    if(leo.overlap(item2)){
      collision = true;
      text("Washing Floor", width-300, 200);
        if(collision == true){
        console.log("About to remove");
        mop.remove();
        console.log("Removed");
        life = life - 30;
        collision = false;
        storyBoard[0];    //show img
            
        }
    }
   
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
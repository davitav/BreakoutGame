var gameover, unpaused, user, treeImg;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites
var crack; 

var objects; //group of object Sprites

var life= 100;  //leo's indicator

var level = 1;  //level variable
 
var collision = false;  //collision variable 

var goodValue = 1;  //current good value to display image
var badValue = 1;  //current bad value to display 

var goodItemsWorld1 = []; 
var badItemsWorld1 = []; //arrays to store objects from world 1 and 2
var goodItemsWorld2 = [];
var badItemsWorld2 = [];

var badDecision = false;
var goodDecision = false;

var storyBoard = [];
var simg1, simg2;

var bgInside;

var timeOfYear; //summer = 0, winter = 50

var drawOnce = false;

var collisionOccured = false;

var crack, body, toy, branch, bus, stand //more sprites

function preLoad(){
    
    treeImg = loadImage("data/tree.png");
    leoImg = loadImage("data/tree.png");
    
    storyboard = [simg1, simg2];
    
    goodItemsWorld1 = [tree, crack, tree, crack, tree, crack, crack,
                      crack, tree, body];  //sprites for each world stored in an array 
    badItemsWorld1 = [toy, tree, crack, tree, crack, tree,
                     tree, tree, crack, branch];  //sprites for each world stored in an array 

    goodItemsWorld2 = [bus];
    badItemsWorld2 = [stand];


    
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

    if(!gameover) {
        
        
        
        
        
        keepInBorders();  //constraining leo
        
        bg1();
        
        if(runTheTimer){
            runTimer();
            fill(255);
            text(5 - Math.floor(timer/60),width/2,200); 
        }
        
        
        lifeDisplay();  //displaying Leo's mood
        
        updatePosition(); //moving Leo
            
        stateIs();

          
    
    camera.off();//background image is still
    camera.on();
    
    
  drawSprites();

}
    
}//close draw
    

function collide(goodItem, badItem){  //function for collisions
     if(!collisionOccured){
         if(leo.overlap(goodItem)){
          text("Watering", 350, 200);
          life = life+30;
          goodDecision = true;
          collisionOccured = true;
             
          stopTimer = true;

        }
     }
      
    if(!collisionOccured){
        if(leo.overlap(badItem)){
          text("Washing Floor", width-300, 200);   
          console.log("About to remove");
          badItem.remove();
          console.log("Removed");
          life = life - 30;
          badDecision = true;  
          collisionOccured = true;
        }  
    }
}


var n = 0;

function stateIs(){
    //switch 
    //case 1  (but if bad choice made on case 1, do this)
    
    //what's the current status of the character? how does he appear visually)
    
    
    //choice is made, we see transition
    //value of state increments
    //we're back into a new state
    
    switch(goodValue){
		case 1:
            if (!drawOnce){
                goodItemsWorld1[goodValue-1]=createSprite(width/12,400,300,250); 
                badItemsWorld1[goodValue-1]=createSprite(width-width/12,400,300,250);            
                drawOnce = true;
            }
            textSize(20);
            text("Will you water the tree or play?", width/2, 150);
            
            collide(goodItemsWorld1[goodValue-1], badItemsWorld1[goodValue-1]);  //collide function
            if(badDecision == true){
                //execute bad item scenario
                //
                //reset good and bad decisions function
                //collisionOccured = false;
                console.log("I collided with the bad item");
                badDecision = false;
            }  
            else if (goodDecision == true){
                goodValue++;
                //reset good and bad decisions function
                n++;
                console.log("I collided with the good item " + n + " times!" );
                console.log(goodValue);
                goodDecision = false;
                //function that triggers the animation with the argument that calls the specific animation
                triggerAnimation(1);
                
            }
            
            //badDecision == false
          
			break;  // if you don't put in break statements, it will continue
					// on and excute the next case
		case 2:
            runTheTimer = true;
            collisionOccured = false;
            leo=createSprite(width/2,500,50,50); //leo sprite

            if (!drawOnce){
                goodItemsWorld1[goodValue-1]=createSprite(width/12,400,300,250); 
                badItemsWorld1[goodValue-1]=createSprite(width-width/12,400,300,250);            
                drawOnce = true;
            }
            
            collide(goodItemsWorld1[goodValue-1], badItemsWorld1[goodValue-1]);  //collide function
            if(badDecision == true){
                //execute bad item scenario
                //
                //reset good and bad decisions function
                collisionOccured = false;
                console.log("I collided with the bad item");
                badDecision = false;
            }  
            else if (goodDecision == true){
                //good scenario 
                //goodValue++;
                 //reset good and bad decisions function
                n++;
                console.log("I collided with the good item " + n + " times!" );
                console.log(goodItemsWorld1);

                console.log(goodValue);
                goodDecision = false;
                //function that triggers the animation with the argument that calls the specific animation
                triggerAnimation(2);
            }
            
            //badDecision == false
          
			break;
		case 3:
			runTheTimer = true;
            collisionOccured = false;
            if (!drawOnce){
                goodItemsWorld1[goodValue-1]=createSprite(width/12,400,300,250); 
                badItemsWorld1[goodValue-1]=createSprite(width-width/12,400,300,250);            
                drawOnce = true;
            }
            collide(goodItemsWorld1[goodValue-1], badItemsWorld1[goodValue-1]);  //collide function
            if(badDecision == true){
                //execute bad item scenario
                //
                //reset good and bad decisions function
                collisionOccured = false;
                console.log("I collided with the bad item");
                badDecision = false;
            }  
            else if (goodDecision == true){
                //good scenario 
                //goodValue++;
                 //reset good and bad decisions function
                n++;
                console.log("I collided with the good item " + n + " times!" );
                console.log(goodValue);
                goodDecision = false;
                //function that triggers the animation with the argument that calls the specific animation
                triggerAnimation(3);
            }
            
            //badDecision == false
          
			break;
		case 4:
			goodItemsWorld1[goodValue-1]=createSprite(width/12,400,300,250); 
            badItemsWorld1[goodValue-1]=createSprite(width-width/12,400,300,250);
			break;
    
        drawSprites();        
	}

    
    
}

function triggerAnimation(animVal){
    
    switch(animVal){
        case 1:        
    
   
    }
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

var boost; 

function accelerating(){
    //if shift pressed
    //boost--
    
    
}

function lifeDisplay(){
    
    fill(60);
    rect(width/2-100, 30, 200, 40);
    if(life>170){
        fill(0, 230, 70);
        rect(width/2-100, 30, life, 40);
    
    }
    
    if(80<=life){
        fill(255, 175, 10);
        rect(width/2-100, 30, life, 40);

    }
    
    
    else if(life<80){
        fill(250, 80, 70); 
        rect(width/2-100, 30, life, 40);

    }
    
     //console.log(life);
    rect(width/2-100, 30, life, 40);

}

function bg1(){  //1st world
    background(0);
    //image(bgInside, 100, 100);

    rect(0, 525, width, height-525);
}

function bg2(){  //2nd world
    //bg image
    background(255);
}


function newGame() {//resetting values for new game
    
    resetAllDrawBools();
    
    bg1();
    
    text("hello", 100, 100);
    gameover=false;

    unpaused=true;
    
    life = 100;
    
    boost = 100;
    
    goodValue = 1;
    
    leo=createSprite(width/2,500,50,50); //leo sprite
     
    
    //tree=createSprite(width/12,400,300,250); //tree sprite
    
    //mop=createSprite(width-width/12,400,300,250); //mop sprite
     
    drawSprites();
}

function resetAllDrawBools(){
    console.log("Resetting all draw booleans");
    drawOnce = false;
//    drawOnce_02 = false;
    
    runTheTimer = true;  //reset timer
    collisionOccured = false;  //reset collision bool
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

var timer = 0;
var level = 1;
var stopTimer = false;
var runTheTimer = true;

var timeLimit = 300;

function runTimer(){
    if (stopTimer){
        console.log("WooHoo");
        level++;
        console.log("You are moving on to level " + level);
        console.log(runTheTimer = false);
        timer = 0;
    }
    else{
        if (timer > timeLimit){
            console.log("Time ran out");
            timer = 0;
        }
        timer++;  
    }
}



function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
}

//change level, with 2 parameters - what level you're on and, what choice was made and
//where you wanna go and all the changes you wanna make
//array with all the choices
//array for good and for bad
//give me a good object of value 3


//help Leo while it's still summer 
//as soon as winter comes you can't act anymore
//this is your chance to lead a happy and fulfilling life 
//once it's winter, you start over 


//the indicator doesn't work properly 
//collide function
//timer
//image
//time of year
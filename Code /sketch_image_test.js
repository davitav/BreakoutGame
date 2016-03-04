var gameover, unpaused, user, treeImg;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites
var crack; 

var objects; //group of object Sprites

var life= 100;  //leo's indicator //self-esteem

var level = 1;  //level variable
 
var collision = false;  //collision variable 

var goodValue = 1;  //current good value to display image
var badValue = 1;  //current bad value to display 

/*var goodItemsWorld1 = []; 
var badItemsWorld1 = []; //arrays to store objects from world 1 and 2
var goodItemsWorld2 = [];
var badItemsWorld2 = [];*/

var badDecision = false;
var goodDecision = false;

var storyBoard = [];  //good cut scenes
var simg1, simg2;

var badStoryBoard = []; //bad cut scenes
var bsimg1, bsimg2; 

var bgInside;

var timeOfYear; //summer = 0, winter = 50

var drawOnce = false;

var collisionOccured = false;

var crack, body, toy, branch, bus, stand //more sprites

var slider, sliderVal;

var fastbreathing; //sounds

var goodItemsWorld1, badItemsWorld1, goodItemsWorld2, badItemsWorld2 //groups to store objects from world 1 and 2

function preload(){
    

    treeImg = loadImage("data/balloon2.png");
    crackImg = loadImage("data/balloon3.png");
    toyImg = loadImage("data/bgInside.jpg");
    branchImg = loadImage("data/bgInside.jpg");
    leoImg = loadImage("data/bgInside.jpg");
    

    //storyboard = [simg1, simg2];
    
    //spriteArray = getSprites();
    
    //console.log(spriteArray);
    
    /*goodItemsWorld1 = [tree, crack, tree, crack, tree, crack, crack,
                      crack, tree, body];  //sprites for each world stored in an array 
    badItemsWorld1 = [toy, tree, crack, tree, crack, tree,
                     tree, tree, crack, branch];  //sprites for each world stored in an array */

    //goodItemsWorld2 = [bus];
    //badItemsWorld2 = [stand];
    
    bgInside = loadImage("data/bgInside.jpg", function(){
        console.log("I'm loaded!!!!");
    });
//    function(e){
//        console.log("We got problems");
//        console.log(e);
//    });
    
  //  storyBoard = [bgInside];



}


function setup(){
    
    console.log("In setup!");
    
    
    tree = createSprite(width/12,400,300,250);  //setting up sprites, their images
    crack = createSprite(width-width/12,400,300,250);
    body = createSprite(width-width/12,400,300,250);
    
    branch = createSprite(width-width/12,400,300,250);
    
    
    tree.addImage("tree", treeImg);
    crack.addImage("crack", crackImg);
    //body.addImage("body", bodyImg);
    branch.addImage("branch", branchImg);
    
    goodItemsWorld1 = new Group();  //creating groups for arrays
    badItemsWorld1 = new Group();
    
    goodItemsWorld1.add(tree);
    badItemsWorld1.add(crack);
    
    console.log(goodItemsWorld1);
    console.log("Bad is" + badItemsWorld1);


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

    slider = createSlider(0, 20, 2);
    slider.position(10, 50);
    slider.style('width', '100px');
    
    //SOUNDS
    fastbreathing = loadSound("data/fastbreathing.mp3");
   
    
}//setup


function draw(){
    
    sliderVal = slider.value();
    
    
    if(gameover && keyWentDown(ENTER)){
       
        newGame();}    

    if(!gameover) {
        
        keepInBorders();  //constraining leo
        
        bg1();
        
        if(runTheTimer){
            runTimer();
            fill(255);
            text(25 - Math.floor(timer/60),width/2,200); 
        }
           
        lifeDisplay();  //displaying Leo's mood
        
        updatePosition(); //moving Leo
            
        stateIs();     
    
        camera.off();//background image is still
        camera.on();
    
    
        drawSprites();
        
        textSize(30);
        if(life<50){
            text("Game over", width/2, height/2);
        }
        
        if(life<60){
            gameover=true;
            //img
        }

    }
    
   //image(bgInside, width/2, 200);
    
}//close draw
    
//var prevCollision = false;  //keeps track of previous collision

function collide(goodItem, badItem){  //function for collisions
     if(!collisionOccured){
         if(leo.overlap(goodItem)){
          text("Watering", 350, 200);
          life = life+30;
          goodDecision = true;
          collisionOccured = true;         
          stopTimer = true;
       
          leo.position.x = width/2;  //reposition Leo
             
          if(life<=170){
                life = life + 30;}
          else{
                life = life;
          }

        }
     }
      
    if(!collisionOccured){
        if(leo.overlap(badItem)){
          text("Washing Floor", width-300, 200);   
          console.log("About to remove");
          badItem.remove();
          console.log("Removed");
          badDecision = true;  
          collisionOccured = true;
          if(life>=30){
                life = life - 30;}
          else{
                life = life;
          }


        leo.position.x = width/2;
            
        }  
    }
}


var n = 0;

function stateIs(){
  
    //updatePosition()
    //switch 
    //case 1  (but if bad choice made on case 1, do this)
    
    //what's the current status of the character? how does he appear visually)
    
    
    //choice is made, we see transition
    //value of state increments
    //we're back into a new state
    
    switch(goodValue){
		case 1:
            levelCase(text1);
            //img(bgInside, 0, 0);
         
			break; 
                   
		case 2:
            
            levelCase(text2);
          
			break;
            
		case 3:
           
            levelCase(text3);

			
          
			break;
		case 4:
		

            levelCase(text4);
			break;
            
        case 5:

            levelCase(text2);
			break;
            
         case 6:

            levelCase(text2);
			break;
    	}   
}

function levelCase(textN){
    if (!drawOnce && !showingAnimation){
                //goodItemsWorld1[goodValue-1]=createSprite(width/12,400,300,250); 
                //badItemsWorld1[goodValue-1]=createSprite(width-width/12,400,300,250); 
                //console.log(goodItemsWorld1);
                drawSprite(goodItemsWorld1[goodValue-1]);
                drawSprite(badItemsWorld1[goodValue-1]);

                drawOnce = true;
            }
            textSize(20);
            text(textN, width/2, 150);
            
            collide(goodItemsWorld1[goodValue-1], badItemsWorld1[goodValue-1]);  //collide function
    
            if(badDecision == true){
                console.log("A bad decision was made!");
        
                console.log("I collided with the bad item");
                triggerAnimation(goodValue, 'bad');
                badDecision = false;
                console.log("Good Value is now: " + goodValue);

                resetAllDrawBools();
            }  
            else if (goodDecision == true){
                console.log("A good decision was made!");
                
                drawOnce = false;    
                
               // goodDecision = false;
                
                //function that triggers the animation with the argument that calls the specific animation
                triggerAnimation(goodValue,'good');
                //goodValue++;
                console.log("Good Value is now: " + goodValue);
                
                //resetAllDrawBools();
            }
            
            
}

var allSprites;


function triggerAnimation(animVal, emotion){
    console.log("Animation triggered!!!");
    if (emotion == 'good'){
        //storyBoard[animval];
        image(bgInside, 0, 0);
        showingAnimation = true;
        lifeDisplay()
        
        goodItemsWorld1[goodValue-1].remove(); 
        badItemsWorld1[goodValue-1].remove();
        leo.position.x = width+500;
        
        allSprites = getSprites();
        for(var i = 0; i < getSprites.length; i++){
            getSprites[i].remove();

        }
        
        console.log("Show good animation for level: " + animVal);
    }
    else if (emotion == 'bad'){
        //badStoryBoard[animval];
        console.log("Show bad animation for level: " + animVal);
    }
    
//    switch(animVal){
//        case 1:        
//    
   
   // }
}


function updatePosition(){
    
     if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.position.x = leo.position.x - sliderVal;    

        }
        
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            //leo.changeAnimation("moveRight");

            leo.position.x = leo.position.x + sliderVal;    

        }
    
    
      if(keyWentDown(82)){   //restarting if prompted by user
            if (confirm('Are you sure you want to restart?')) {
            //restart
                leo.remove();
                goodItemsWorld1[goodValue-1].remove();
                badItemsWorld1[goodValue-1].remove();
                newGame()
                } else {
            // keep going!
                }               
        }    
} //updatePosition

var boost; 

function accelerating(){
    //if shift pressed
    //boost-
    
}

var soundStarted = false; //variables that help the sound be triggered and play properly
var soundBefore = false

function lifeDisplay(){
    
    fill(60);
    rect(width/2-100, 30, 200, 40);
    if(80<=life && life<=120){
        fill(255, 175, 10);
        rect(width/2-100, 30, life, 40);
        
        fastbreathing.stop();
        //console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore)

        
        /*if(soundStarted == true && soundBefore == true){
            soundBefore = false;
            console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore);
            console.log("Life: "+life);
        }*/

    }
    
    else if(life>=80){
        fill(0, 230, 70);
        rect(width/2-100, 30, life, 40);
        
        fastbreathing.stop();
        //console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore)

        
        /*if(soundStarted == true && soundBefore == true){
            soundBefore = false;
            console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore);
            console.log("Life: "+life);
        }*/
        
    }
    
    
    else if(life<80){
        fill(250, 80, 70); 
        rect(width/2-100, 30, life, 40);
        
        soundStarted = true;
        
        if(soundStarted == true && soundBefore == false){      
            fastbreathing.loop();
            soundBefore = soundStarted;
            soundStarted = false;
            //console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore);
            //console.log("Life: "+life);

        }    

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
          
    drawSprites();
}

function resetAllDrawBools(){
    console.log("Resetting all draw booleans");
    drawOnce = false;
    
    runTheTimer = true;  //reset timer
    stopTimer = false;
    
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
      //  level++;
    //    console.log("You are moving on to level " + level);

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


var text1 = "Will you water the tree or play?";
var text2 = "Question 2";
var text3 = "Question 3";
var text4 = "Question 4";
var text5 = "Question 5";


var showingSprites = true;

var showingAnimation = false;
function mousePressed(){
    console.log("Mouse was pressed!");
    if (showingAnimation){
        //proceed to next level
        console.log("Moving on to next level.");
        //proceedToNextLevel();
        showingSprite = false;
        
        
        goodValue++;
        resetAllDrawBools();
        goodDecision = false;
        showingAnimation = false;
    }
}

function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
}
 

//image load 

//image timer

//pause

//color desaturation
var gameover, unpaused, user, treeImg;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites
var crack; 

var objects; //group of object Sprites

var life= 100;  //leo's indicator //self-esteem

var level = 1;  //level variable
 
var collision = false;  //collision variable 

var goodValue = 1;  //current good value to display image
var badValue = 1;  //current bad value to display 

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

var crack, body, toy, branch, bus, stand; //more sprites

var slider, sliderVal;

var fastbreathing; //sounds

var goodItemsWorld1, badItemsWorld1, goodItemsWorld2, badItemsWorld2; //groups to store objects from world 1 and 2

var goodItemsLevel1, goodItemsLevel2;
var badItemsLevel1, badItemsLevel2;

var story1;

var startImg

function preload(){
    
    
    startImg = loadImage("data/start.png");

    treeImg = loadImage("data/balloon2.png");
    crackImg = loadImage("data/balloon3.png");
    
    leoLeft = loadImage("data/leo_left.png");
    
    leoRight = loadImage("data/leo_right01.png");
    
    story1 = loadImage("data/story2.jpg");   

    //storyboard = [simg1, simg2];

    //console.log(spriteArray); 
    
    bgInside = loadImage("data/bgInside.png");

}


function setup(){
        
    
    tree = createSprite(windowWidth/12,500,300,250);  //setting up sprites, their images
    crack = createSprite(windowWidth-windowWidth/12,500,300,250);
    body = createSprite(width-width/12,400,300,250);
    
    branch = createSprite(width-width/12,400,300,250);
    
    
    tree.addImage("tree", treeImg);
    crack.addImage("crack", crackImg);
    
    ////////////////////////////////
    
    goodItemsWorld1 = [];  //creating groups for arrays
    badItemsWorld1 = [];
    
    goodItemsLevel1 = new Group();
    badItemsLevel1 = new Group();
    
    goodItemsLevel2 = new Group();
    badItemsLevel2 = new Group(); 
    
    goodItemsLevel3 = new Group();
    badItemsLevel3 = new Group(); 
    
    goodItemsLevel4 = new Group();
    badItemsLevel4 = new Group(); 
    
    
    
    goodItemsLevel1.add(tree);
    goodItemsLevel1.add(crack);
    goodItemsLevel1.add(tree);

    badItemsLevel1.add(crack);
    badItemsLevel1.add(tree);
    badItemsLevel1.add(crack);
    
   
    goodItemsLevel2.add(tree);
    goodItemsLevel2.add(crack);
    goodItemsLevel2.add(tree);

    badItemsLevel2.add(crack);
    badItemsLevel2.add(tree);
    badItemsLevel2.add(crack);
    
    
    goodItemsLevel3.add(tree);
    goodItemsLevel3.add(crack);
    goodItemsLevel3.add(tree);

    badItemsLevel3.add(crack);
    badItemsLevel3.add(tree);
    badItemsLevel3.add(crack);
    
   
    goodItemsLevel4.add(tree);
    goodItemsLevel4.add(crack);
    goodItemsLevel4.add(tree);

    badItemsLevel4.add(crack);
    badItemsLevel4.add(tree);
    badItemsLevel4.add(crack);
    
    
    
    goodItemsWorld1.push(goodItemsLevel1);
    goodItemsWorld1.push(goodItemsLevel2);
    goodItemsWorld1.push(goodItemsLevel3);
    goodItemsWorld1.push(goodItemsLevel4);
    
    badItemsWorld1.push(badItemsLevel1);
    badItemsWorld1.push(badItemsLevel2);
    badItemsWorld1.push(badItemsLevel3);
    badItemsWorld1.push(badItemsLevel4);


    createCanvas(windowWidth, windowHeight);
    bg0(); 
    
    gameover=true;//start off as true in order to have user prompt when to begin
    unpaused=true;//game starts out not paused
    
    startScreen();

    itemsWorld1 = [mop, crack];  

    slider = createSlider(0, 20, 10);
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
        
        
        updatePosition(); //moving Leo
            
        stateIs();     
    
        lifeDisplay();  //displaying Leo's mood
              
        
        camera.off();//background image is still
        camera.on();
    
        drawSprite(leo);
                
        textSize(30);
        if(life<50){
            gameover=true;
            text("Game over", width/2, height/2);
        }
        

    }
    
                
}//close draw
    

function collide(goodItem, badItem){  //function for collisions
     if(!collisionOccured){
         if(leo.overlap(goodItem)){
          //text("Watering", 350, 200);
          life = life+30;
          goodDecision = true;
          collisionOccured = true;         
          stopTimer = true;
          curLevelVal = 0;
                   
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
        
          badDecision = true;  
          collisionOccured = true;
          //curLevelVal++;
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

function setMood(value){
    if(value==1){ 
        fill('rgba(250, 70, 90, 0.25)');
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        fill(0);   
    }
}

function stateIs(){
    
    bg1();
    
    switch(goodValue){
		case 1:
            levelCase(levelOneQ[curLevelVal]);         
			break; 
                   
		case 2:
            levelCase(levelTwoQ[curLevelVal]);
			break;
            
		case 3:
           
            levelCase(levelThreeQ[curLevelVal]);    
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
            
        case 7:

            levelCase(text2);
			break;
            
        case 8:

            levelCase(text2);
			break;
            
    	}   
}

function levelCase(textN){
    if (!drawOnce && !showingAnimation && !showingBadAnimation){
            
                drawOnce = true;
            }
            textSize(20);
            text(textN, width/2, 150);
    
            drawSprite(goodItemsWorld1[goodValue-1][curLevelVal]);
            drawSprite(badItemsWorld1[goodValue-1][curLevelVal]);
            
            if(runTheTimer){
            runTimer();
            fill(255);
            text(25 - Math.floor(timer/60),width/2,200); 
        }
    
            collide(goodItemsWorld1[goodValue-1][curLevelVal], badItemsWorld1[goodValue-1][curLevelVal]);  //collide function
        
            if(badDecision == true){
        
                drawOnce = false;    

                triggerAnimation(goodValue-1, 'bad');
                //badDecision = false;

                //resetAllDrawBools();
            }  
            else if (goodDecision == true){
                drawOnce = false;    
                                
                //function that triggers the animation with the argument that calls the specific animation
                triggerAnimation(goodValue-1,'good');
                
            }          
            
    }

var allSprites;


function triggerAnimation(animVal, emotion){

    if (emotion == 'good'){
        //image(storyBoard[animval], 0, 0, width, height);
        
        image(story1, 0, 0, width, height);
        
        fill(0,240, 50);
        text("+30", width/2, 100);
        fill(0);
        
        showingAnimation = true;
        lifeDisplay();
        
        leo.position.x = width+500;
        
        
        //console.log("Show good animation for level: " + animVal);
    }
    else if (emotion == 'bad'){
        
        //image(badStoryBoard[animval], 0, 0, width, height);
        image(story1, 0, 0, width, height);
        
        fill(240, 20, 50);
        text("-30", width/2, 100);
        fill(0);
        

        showingBadAnimation = true;
        lifeDisplay();
        
        leo.position.x = width+500;

        //console.log("Show bad animation for level: " + animVal);
        
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
            leo.changeImage("leoRight", leoRight);

            leo.position.x = leo.position.x + sliderVal;    

        }
    
    
      if(keyWentDown(82)){   //restarting if prompted by user
            if (confirm('Are you sure you want to restart?')) {
            //restart
                startScreen();
                leo.position.x = width/2;

                newGame()
                resetAllDrawBools();
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
        
        setMood(1);
        
        if(soundStarted == true && soundBefore == false){      
            fastbreathing.loop();
            soundBefore = soundStarted;
            soundStarted = false;

        }    

    }
    
    rect(width/2-100, 30, life, 40);

}

function bg0(){
        background(0);
    
}


var world = 1;  //keeps track of the world, to switch bg from interior to exterior

function bg1(){  //1st world
    
    if(world == 1){  //interior
        background(0);
        image(bgInside, 0, 0, width, height);
        if(goodValue>7){
            world++;
        }
    }
    
    else if(world == 2){  //exterior
        bg2();
    }
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
    
    leo=createSprite(width/2,400,50,50); //leo sprite
    //leo.scale(0.5);
    
    leo.addImage("move", leoLeft); 
          
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


var curLevelVal = 0;

var levelOneQ = [
    "Will you water the tree or drink the water yourself?1",
    "Will you do something else?",
    "What are you thinking?"
];

var levelTwoQ = [
    "Will you water the tree or drink the water yourself?2",
    "Will you do something else?",
    "What are you thinking?"
];

var levelThreeQ = [
    "Will you water the tree or drink the water yourself?3",
    "Will you do something else?",
    "What are you thinking?"
];

/*var text1 = "Will you water the tree or drink the water yourself?";
var text2 = "Question 2";
var text3 = "Question 3";
var text4 = "Question 4";
var text5 = "Question 5";*/


//var showingSprites = true;

var showingAnimation;
var showingBadAnimation;
function mousePressed(){
    //console.log("Mouse was pressed!");
    if (showingAnimation){
        //proceed to next level
        //console.log("Moving on to next level.");
        
        
        goodValue++;
        resetAllDrawBools();
        goodDecision = false;
        showingAnimation = false;
        
        leo.position.x = width/2;
        
    }
    
    if(showingBadAnimation){
        
        curLevelVal++;
         
        resetAllDrawBools();
        badDecision = false;
        showingBadAnimation = false;
        
        //console.log("badanim: "+showingBadAnimation);
        
        leo.position.x = width/2;


    }
}

function startScreen(){
    
    image(startImg, 0, 0, windowWidth, windowHeight);
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("Breakout, the game", windowWidth/2, windowHeight/2-50);
    
    textSize(18);
    text("Press Enter to start", windowWidth/2, windowHeight/2);
    text("Press R to restart and P to Pause", windowWidth/2, windowHeight/2+50);
    
    curLevelVal = 0;
    goodValue = 1;
    
}

function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
    
}
 

//we're not in good-bad anymore, we're in subset of bad: bad-bad

//boolean that chooses between good and bad track - true/false

//if I'm in the bad track, what's the value, if I'm in the good track, what's the value?

//badChoise 1 and badChoice 2 instead of goodChoice and badChoice


//hey I'm on level 1, if I get it wrong, give me another pair
//var levelOneQuestion [0][0][0]


//keep track, depending on how many they got wrong, change the flow of the game 
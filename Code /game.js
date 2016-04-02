function collide(goodItem, badItem){  //function for collisions
     if(!collisionOccured){
         if(leo.overlap(goodItem)){
          //text("Watering", 350, 200);
          leo.position.x = width/2;  //reposition Leo

          life = life+15;
          console.log(life);
          goodDecision = true;
          collisionOccured = true;         
          stopTimer = true;
          curLevelVal = 0;
        
          cutSceneValue++;
                   
             
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
          leo.position.x = width/2;

          collisionOccured = true;
          curLevelVal++;
           if(life=>30){
                life = life - 30;}
          else{
                life = life;
          }
            
        }  
    }
}



function setMood(value){
    if(value==1){ 
        fill('rgba(250, 70, 90, 0.25)');
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        fill(0);   
    }
}

function stateIs(){
    
    //if more than 3 choices, reconsider this
    if (curLevelVal > 2){
        curLevelVal = 0;
    }
    
    transitionCut()
    
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

            levelCase(levelFourQ[curLevelVal]);
			break;
            
        case 5:
            console.log(curLevelVal);

            levelCase(levelFiveQ[curLevelVal]);
			break;
            
         case 6:

            levelCase(levelSixQ[curLevelVal]);
			break;
            
        case 7:

            levelCase(levelSevenQ[curLevelVal]);
			break;
            
        case 8:

            levelCase(levelEightQ[curLevelVal]);
			break;
            
        case 9:

            levelCase(levelNineQ[curLevelVal]);
			break;
            
        case 10:

            levelCase(levelTenQ[curLevelVal]);
			break;
            
        case 11:

            levelCase(levelElevenQ[curLevelVal]);
			break;
            
        case 12:

            levelCase(levelTwelveQ[curLevelVal]);
			break;
            
    	}   
}

function levelCase(textN){
    if (!drawOnce && !showingAnimation && !showingBadAnimation && !showingTimeAnimation){    
        drawOnce = true;
    }
    textSize(20);
    text(textN, width/2, 150);

    //console.log("About to draw the sprite");
    drawSprite(goodItemsWorld1[goodValue-1][curLevelVal]);
    drawSprite(badItemsWorld1[goodValue-1][curLevelVal]);
    //console.log("Drew the sprite");
    
    if(runTheTimer){
        runTimer();
        fill(255);
        text(startTime - Math.floor(timer/60),width/2,200); 
    }
    
    collide(goodItemsWorld1[goodValue-1][curLevelVal], badItemsWorld1[goodValue-1][curLevelVal]);  //collide function

    if(badDecision == true){
        console.log("Bad Decision!");
        drawOnce = false;    

        triggerAnimation(goodValue-1, 'bad');

        //resetAllDrawBools();
    }  
    else if (goodDecision == true){
        console.log("Good Decision!");
        drawOnce = false;    

        //function that triggers the animation with the argument that calls the specific animation
        triggerAnimation(goodValue-1,'good');

    } 
    else if (timeDecision == true){
        triggerAnimation(goodValue-1,'timelapse');
    }

}


function triggerAnimation(animVal, emotion){

    if (emotion == 'good'){
        //image(storyBoard[animval], 0, 0, width, height);
        
        image(story1, 0, 0, width, height);
        background(0);
        
        textSize(36);
        cutScenePlacing();        
        fill(0,240, 50);
        textSize(26);
        text("+30", width/2, 100);
        fill(0);
        leo.position.x = width+500;

        showingAnimation = true;
        lifeDisplay();
        
        
        
        //console.log("Show good animation for level: " + animVal);
    }
    else if (emotion == 'bad'){
        
        //image(badStoryBoard[animval], 0, 0, width, height);
        image(story1, 0, 0, width, height);
        
        background(0);
        
        textSize(40);
        cutScenePlacing();        
        
        fill(240, 20, 50);
        textSize(26);

        text("-30", width/2, 100);
        fill(0);
        

        showingBadAnimation = true;
        lifeDisplay();
        
        leo.position.x = width+500;

        //console.log("Show bad animation for level: " + animVal);
        
    }
    
    else if (emotion == 'timelapse'){
        
        image(story1, 0, 0, width, height);
        
        background(0);
        
        textSize(40);
        cutScenePlacing();
        fill(240, 20, 50);
        textSize(26);

        text("-30", width/2, 100);
        fill(0);
        
        showingTimeAnimation = true;
        lifeDisplay();
        leo.position.y = height+500;
    }
    
//    switch(animVal){
//        case 1:        
//    
   
   // }
}


function updatePosition(){
    
     if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.changeAnimation("left");

            leo.position.x = leo.position.x - sliderVal;
         

        }
        
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            leo.changeAnimation("right");

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



function bg1(){  //1st world
    
    if(world == 1){  //interior
        background(0);
        image(bgInside, 0, 0, width, height);
        if(goodValue>10){
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
        
    leo.addAnimation("right", "data/leo_right01.png", "data/leo_right01.png"); 

    leo.addAnimation("left", "data/leo_left01.png", "data/leo_left01.png");
     
          
}

function resetAllDrawBools(){
    //console.log("Resetting all draw booleans");
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



function runTimer(){
    if (stopTimer){
        console.log(runTheTimer = false);
        timer = 0;
    }
    else{
        if (timer > timeLimit){
            //console.log("Time ran out");
            drawOnce = false;
            runTheTimer = false;
            timeDecision = true;
            triggerAnimation(goodValue-1, 'timelapse'); 
            if(life>=30){
                life = life - 30;}
            else{
                life = life;
        }

//            leo.position.x = width/2;
//            collisionOccured = true;
//            //curLevelVal++;
//            if(life>=30){
//                life = life - 30;}
//            else{
//                life = life;
//            }   
           
            //timer = 0;
        }
        else{
            timer++;  
        }

    
    }
}


function transitionCut(){
    //console.log("Mouse was pressed!");
    if(keyDown(32)){
    if (showingAnimation){
        //proceed to next level
        //console.log("Moving on to next level.");
        
        setTime(25);
        goodValue++;

        resetAllDrawBools();
        goodDecision = false;
        showingAnimation = false;
        
        leo.position.x = width/2;

        
        
    }
    
    if(showingBadAnimation){
        
        //curLevelVal++;
        setTime(25);
        
        leo.position.x = width/2;
      
        resetAllDrawBools();
        badDecision = false;
        showingBadAnimation = false;
        
        //console.log("badanim: "+showingBadAnimation);
    }
    
    if (showingTimeAnimation){
 
        curLevelVal++;
        setTime(25);
        resetAllDrawBools();
        showingTimeAnimation = false;
        timeDecision = false;
        leo.position.x = width/2;
        leo.position.y = 400;

    }
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
 
function cutScene(textM){
    
    background(0);
    text(textM, width/2, 150);  
    
}

function cutScenePlacing(){
    
    switch(cutSceneValue){
		case 1:
            cutScene(levelOneQ[curLevelVal]);         
			break; 
                   
		case 2:
            cutScene(levelTwoQ[curLevelVal]);
			break;
            
		case 3:
           
            cutScene(levelThreeQ[curLevelVal]);    
			break;
            
		case 4:	

            cutScene(levelFourQ[curLevelVal]);
			break;
            
        case 5:

            cutScene(levelFiveQ[curLevelVal]);
			break;
            
         case 6:

            cutScene(levelSixQ[curLevelVal]);
			break;
            
        case 7:

            cutScene(levelSevenQ[curLevelVal]);
			break;
            
        case 8:

            cutScene(levelEightQ[curLevelVal]);
			break;
            
        case 9:

            cutScene(levelNineQ[curLevelVal]);
			break;
            
        case 10:

            cutScene(levelTenQ[curLevelVal]);
			break;
            
        case 11:

            cutScene(levelElevenQ[curLevelVal]);
			break;
            
        case 12:

            cutScene(levelTwelveQ[curLevelVal]);
			break;
    
}
    
}


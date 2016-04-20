function collide(goodItem, badItem){  //function for collisions
     if(!collisionOccured){
         if(leo.overlap(goodItem)){
          //text("Watering", 350, 200);
          leo.position.x = width/2;  //reposition Leo

          life = life+20;
          if(life>200){
              life=200;
          }
          goodDecision = true;
          collisionOccured = true;         
          stopTimer = true;
          curLevelVal = 0;
        
          cutSceneValue++;  
             
          if(life<=170){ //placeholder
                }
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
          treeChange();

           if(life>=30){
                life = life - 40;}
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
    
    transitionCut();

    treeChange();
    
    switch(goodValue){
		case 1:
            bg1();

            levelCase(levelOneQ[curLevelVal]);         
			break; 
                   
		case 2:
            bg1();

            levelCase(levelTwoQ[curLevelVal]);
			break;
            
		case 3:
            bg1();

           
            levelCase(levelThreeQ[curLevelVal]);    
			break;
            
		case 4:	
            bg1();

            levelCase(levelFourQ[curLevelVal]);
			break;
            
        case 5:
            bg1();

            //console.log(curLevelVal);

            levelCase(levelFiveQ[curLevelVal]);
			break;
            
         case 6:
            bg1();


            levelCase(levelSixQ[curLevelVal]);
			break;
            
        case 7:
            bg1();


            levelCase(levelSevenQ[curLevelVal]);
			break;
            
        case 8:
            bg1();


            levelCase(levelEightQ[curLevelVal]);
			break;
            
        case 9:
            bg1();


            levelCase(levelNineQ[curLevelVal]);
			break;
            
        case 10:
            bg1();


            levelCase(levelTenQ[curLevelVal]);
			break;
            
        case 11:
            bg1();


            levelCase(levelElevenQ[curLevelVal]);
			break;
            
        case 12:

            //levelCase(levelTwelveQ[curLevelVal]);
            leo.remove();
            image(endImg, 0, 0, windowWidth, windowHeight);
            fill(0);
            cutScenePlacing()
            gameover=true;
            console.log("startImg");
			break;
            
    	}   
}


function levelCase(textN){
    if (!drawOnce && !showingAnimation && !showingBadAnimation && !showingTimeAnimation){    
        drawOnce = true;
    }
    textSize(17);

    drawSprite(goodItemsWorld1[goodValue-1][curLevelVal]);
    drawSprite(badItemsWorld1[goodValue-1][curLevelVal]);
    
    if(goodValue===10){
        drawSprite(limb);      
    }
    
    fill(30);
    
    rect(width/2-160, 90, 320, 225);
    fill(255);
    text(textN, width/2-150, 100, 300, 205);
    
    //timeTicking.playMode('restart');

    if(timeSound){
        timeTicking.loop();
        timeSound = false;
    }
        
    
    if(runTheTimer){
        runTimer();
        fill(255);
        text(startTime - Math.floor(timer/60),width/2,285); 
    }
    
    collide(goodItemsWorld1[goodValue-1][curLevelVal], badItemsWorld1[goodValue-1][curLevelVal]);  //collide function

    if(badDecision == true){
        if (curLevelVal === 3){       
            curLevelVal = 0;
    }
        
        //console.log("Bad Decision!");
        drawOnce = false;    

        triggerAnimation(goodValue-1, 'bad');

        //resetAllDrawBools();
    }  
    else if (goodDecision == true){
        drawOnce = false;    

        //function that triggers the animation with the argument that calls the specific animation
        triggerAnimation(goodValue-1,'good');

    } 
    else if (timeDecision == true){
        triggerAnimation(goodValue-1,'timelapse');
    }

}


function triggerAnimation(animVal, emotion){
    runTheTimer = false;
    stopTimer = true;
    
    
    if (emotion == 'good'){
        //image(storyBoard[animval], 0, 0, width, height);
        
        //image(story1, 0, 0, width, height);
        background(0);
        
        textSize(32);
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
        //image(story1, 0, 0, width, height);
        
        background(0);
        
        textSize(32);
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


function movementAnim(){
     if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.changeAnimation("left");

         

        }
        
    else if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            //tint(0, 153, 204);  // Tint blue
            leo.changeAnimation("right");
                        
        }
    
}

function updatePosition(){
    
     if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.changeAnimation("left");

            leo.position.x = leo.position.x - sliderVal;  //sliderVal
            //leo.position.x = leo.position.x - sliderVal;  //sliderVal
         

        }
        
    else if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            //tint(0, 153, 204);  // Tint blue
            leo.changeAnimation("right");
            
            leo.position.x = leo.position.x + sliderVal;    
            
        }

    
    else{
            leo.changeAnimation("still");

    }
    
        //noTint();
      if(keyWentDown(82)){   //restarting if prompted by user
            if (confirm('Are you sure you want to restart?')) {
            //restart
                timeTicking.stop();

                gameover=true;
                soundReset();
               // goodValue=0;
                //curLevelVal=0;
                treeChange();
                startScreen();
               // leo.position.x = width/2;
                
                
                //newGame()
                
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
        text("O.K.", width/2, 20);
        
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
        text("Happy", width/2, 20);
        
        rect(width/2-100, 30, life, 40);
        
        leo.changeAnimation("still");
        
        movementAnim();


        
        
        fastbreathing.stop();
  
        /*if(soundStarted == true && soundBefore == true){
            soundBefore = false;
            console.log("soundStarted: "+soundStarted, "soundBefore: "+soundBefore);
            console.log("Life: "+life);
        }*/
        
    }
    
    
    else if(life<80){  
                  
        fill(250, 80, 70); 
        text("Depressed", width/2, 20);
        
        leo.changeAnimation("depressed");
        
        //updatePosition()
        
        movementAnim();

        
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


function bg1(){  //1st world
    
    if(world == 1){  //interior
        //background(0);
        image(bgInside, 0, 0, width, height);
        if(goodValue>10){
            world=2;
        }
    }
    
    if(world == 2){  //exterior
        bg2();
    }
}

function bg2(){  //2nd world
    //bg image
    image(bgOutside, 0, 0, width, height);
    fill('rgba(215, 220, 225, 0.75)');
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
    fill(0);
}


function newGame() {//resetting values for new game
    
    goodValue = 1;
    
    curLevelVal = 0;
    
    startScreen();
    
    //resetAllDrawBools();
    
    world = 1;
    bg1();
    
    proceed();

    text("hello", 100, 100);
    gameover=false;

    unpaused=true;
    
    life = 100;
    
    boost = 100;
    
   
    
    leo=createSprite(width/2-50,300,50,50); //leo sprite
    
       
    leo.addAnimation("right", "data/walkright/walk_000.png", "data/walkright/walk_047.png"); 
    
    leo.addAnimation("left", "data/walkleft/walk_000.png", "data/walkleft/walk_047.png");

    leo.addAnimation("still", "data/breathRelaxed/breathR_000.png", "data/breathRelaxed/breathR_023.png"); 
    
    leo.addAnimation("depressed", "data/breathDepressed/breathD_000.png", "data/breathDepressed/breathD_014.png"); 



    
    setTime(25);
    
    startScreen();

     
          
}

function resetAllDrawBools(){
    //console.log("Resetting all draw booleans");
    drawOnce = false;
    
    runTheTimer = true;  //reset timer
    stopTimer = false;
    
    collisionOccured = false;  //reset collision bool
    
    setTime(25);

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
            //drawOnce = false;
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
    
    //timeTicking.stop();
    
    
    if(goodValue==12){
            function mousePressed(){
                newGame();
                }
                }
    
    //console.log("Mouse was pressed!");
    if(keyDown(32)){
        proceed();
}
}


function proceed(){
    
    
    
    if (showingAnimation){
        //proceed to next level
        //console.log("Moving on to next level.");
        
        setTime(25);
        goodValue++;
        treeChange();


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
        leo.position.y = 300;
        
        treeChange();


    }
    
    
}

function startScreen(){
    
    image(startImg, 0, 0, windowWidth, windowHeight);
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("Breakout, the game", windowWidth/2, 35);
    
    textSize(18);
    text("Press Enter to start", windowWidth/2, windowHeight/2+200);
    text("Press R to restart", windowWidth/2, windowHeight/2+250);
    
    curLevelVal = 0;
    goodValue = 1;
    
    console.log("Done with start screen");
    
}

function treeChange(){
    
    if(curLevelVal===0 && goodValue===2  || curLevelVal===2 && goodValue===2 || curLevelVal===0 && goodValue===4 || curLevelVal===0 && goodValue===6 || curLevelVal===2 && goodValue===6 || curLevelVal===1 && goodValue===8 || curLevelVal===2 && goodValue===8 || curLevelVal===1 && goodValue===9 || curLevelVal===2 && goodValue===9){
        tree.changeImage("strong");
}

    else{
        tree.changeImage("weak");

    
    }
    
    if(curLevelVal===0 && goodValue===9){
        leo.changeAnimation("right");
        leo.position.x = leo.position.x - 1;
    }

    
}

function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
    
}
 
function cutScene(textM){
    
    //background(0);
    text(textM, width/2-320, 150, 600, 455); 
        
    text("Press space to continue", width/2, 550);  
    
}

function soundReset(){
    bgMusic.loop();
    bgSound = false;
            
    timeSound = true;
    
}

function keyPressed(){
    if(finishedGame){
        if(keyCode===82){
            
            soundReset();
            
            
            gameover=true;
            treeChange();
            startScreen();
            
        }
    }
    
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
            
            timeTicking.stop();
            proceed();

            finishedGame = true;
            /*cutScene(levelTwelveQ[curLevelVal]);*/
            fill(0);
            textSize(20);
            text("Congratulations, your journey is over. Leo slowly moves his hand across his face and realizes he has made it out. You helped Leo liberate himself.", width/2-250, 100, 500, 375);
            
			break;
            
    
}
    
}


/*bugs

timer

sound

website



if game over: what does it mean/ some of the decisions you made for leo 
weren't helpful, you should go back and give another try 
how to restart from game over 

*/


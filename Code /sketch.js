
function preload(){
    
    
    startImg = loadImage("data/start.png");

    treeImg = loadImage("data/balloon2.png");
    crackImg = loadImage("data/balloon3.png");
        
    leoRight = loadImage("data/leo_right01.png");
    
    story1 = loadImage("data/story2.jpg");   

    //storyboard = [simg1, simg2];

 
    bgInside = loadImage("data/bgInside.png");

}


function setup(){
        
    
    tree = createSprite(windowWidth/12,500,300,250);  //setting up sprites, their images
    crack = createSprite(windowWidth-windowWidth/12,500,300,250);
    
    toy = createSprite(windowWidth-windowWidth/12,500,300,250);

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
    
    goodItemsLevel5 = new Group();
    badItemsLevel5 = new Group(); 
    
    goodItemsLevel6 = new Group();
    badItemsLevel6 = new Group(); 
    
    goodItemsLevel7 = new Group();
    badItemsLevel7 = new Group(); 
    
    goodItemsLevel8 = new Group();
    badItemsLevel8 = new Group(); 
    
    goodItemsLevel9 = new Group();
    badItemsLevel9 = new Group(); 
    
    goodItemsLevel10 = new Group();
    badItemsLevel10 = new Group(); 
    
    goodItemsLevel11 = new Group();
    badItemsLevel11 = new Group(); 
    
    /////////////////////
    goodItemsLevel1.add(tree);
    goodItemsLevel1.add(crack);
    goodItemsLevel1.add(crack);

    badItemsLevel1.add(toy);
    badItemsLevel1.add(tree);
    badItemsLevel1.add(tree);
    
    ////////////////////////
    goodItemsLevel2.add(crack);
    goodItemsLevel2.add(crack);
    goodItemsLevel2.add(crack);

    badItemsLevel2.add(tree);
    badItemsLevel2.add(tree);
    badItemsLevel2.add(tree);
    
    ////////////////////////
    goodItemsLevel3.add(tree);
    goodItemsLevel3.add(tree);
    goodItemsLevel3.add(tree);

    badItemsLevel3.add(crack);
    badItemsLevel3.add(crack);
    badItemsLevel3.add(crack);
    
    ////////////////////////
    goodItemsLevel4.add(crack);
    goodItemsLevel4.add(crack);
    goodItemsLevel4.add(crack);

    badItemsLevel4.add(tree);
    badItemsLevel4.add(tree);
    badItemsLevel4.add(tree);
    
    ////////////////////////
    goodItemsLevel5.add(tree);
    goodItemsLevel5.add(tree);
    goodItemsLevel5.add(tree);

    badItemsLevel5.add(crack);
    badItemsLevel5.add(crack);
    badItemsLevel5.add(crack);
    
    ////////////////////////
    goodItemsLevel6.add(crack);
    goodItemsLevel6.add(crack);
    goodItemsLevel6.add(crack);

    badItemsLevel6.add(tree);
    badItemsLevel6.add(tree);
    badItemsLevel6.add(tree);
    
    ////////////////////////
    goodItemsLevel7.add(crack);
    goodItemsLevel7.add(crack);
    goodItemsLevel7.add(crack);

    badItemsLevel7.add(tree);
    badItemsLevel7.add(tree);
    badItemsLevel7.add(tree);
    
    ////////////////////////
    goodItemsLevel8.add(crack);
    goodItemsLevel8.add(crack);
    goodItemsLevel8.add(crack);

    badItemsLevel8.add(tree);
    badItemsLevel8.add(tree);
    badItemsLevel8.add(tree);
    
    ////////////////////////
    goodItemsLevel9.add(crack);
    goodItemsLevel9.add(crack);
    goodItemsLevel9.add(crack);

    badItemsLevel9.add(tree);
    badItemsLevel9.add(tree);
    badItemsLevel9.add(tree);
    
    ////////////////////////
    goodItemsLevel10.add(crack);
    goodItemsLevel10.add(crack);
    goodItemsLevel10.add(crack);

    badItemsLevel10.add(tree);
    badItemsLevel10.add(tree);
    badItemsLevel10.add(tree);
    
    ////////////////////////
    goodItemsLevel11.add(crack);
    goodItemsLevel11.add(crack);
    goodItemsLevel11.add(tree);

    badItemsLevel11.add(tree);
    badItemsLevel11.add(tree);
    badItemsLevel11.add(crack);
    
    //////////////////////////
    
    goodItemsWorld1.push(goodItemsLevel1);
    goodItemsWorld1.push(goodItemsLevel2);
    goodItemsWorld1.push(goodItemsLevel3);
    goodItemsWorld1.push(goodItemsLevel4);
    goodItemsWorld1.push(goodItemsLevel5);
    goodItemsWorld1.push(goodItemsLevel6);
    goodItemsWorld1.push(goodItemsLevel7);
    goodItemsWorld1.push(goodItemsLevel8);
    goodItemsWorld1.push(goodItemsLevel9);
    goodItemsWorld1.push(goodItemsLevel10);
    goodItemsWorld1.push(goodItemsLevel11);

    
    badItemsWorld1.push(badItemsLevel1);
    badItemsWorld1.push(badItemsLevel2);
    badItemsWorld1.push(badItemsLevel3);
    badItemsWorld1.push(badItemsLevel4);
    badItemsWorld1.push(badItemsLevel5);
    badItemsWorld1.push(badItemsLevel6);
    badItemsWorld1.push(badItemsLevel7);
    badItemsWorld1.push(badItemsLevel8);
    badItemsWorld1.push(badItemsLevel9);
    badItemsWorld1.push(badItemsLevel10);
    badItemsWorld1.push(badItemsLevel11);


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
            
            background(0);

            text("Game over", width/2, height/2);
        }
        

    }
    
                
}//close draw
    



//health description 

//enter instead of mouse press (or any key) 



//we're not in good-bad anymore, we're in subset of bad: bad-bad

//boolean that chooses between good and bad track - true/false

//if I'm in the bad track, what's the value, if I'm in the good track, what's the value?

//badChoise 1 and badChoice 2 instead of goodChoice and badChoice


//hey I'm on level 1, if I get it wrong, give me another pair
//var levelOneQuestion [0][0][0]


//keep track, depending on how many they got wrong, change the flow of the game 

function preload(){
    
    
    startImg = loadImage("data/start01.png");
    
    endImg = loadImage("data/start.png");

    treeImg = loadImage("data/tree_weak.png");
    treeImgStrong = loadImage("data/tree_strong.png");
    crackImg = loadImage("data/crack.png");
        
    leoRight = loadImage("data/leo_right01.png");
    
    story1 = loadImage("data/story2.jpg");   

    //storyboard = [simg1, simg2];

 
    bgInside = loadImage("data/bgInside.png");
    
    bgOutside = loadImage("data/bgOutside.png");
    
    


}


function setup(){
        
    textFont("Futura");
    tree = createSprite(windowWidth/80, 100, 300,250);  //setting up sprites, their images
    crack = createSprite(windowWidth-windowWidth/12,300,300,250);
    
    toy = createSprite(windowWidth-windowWidth/12,500,300,250);

    body = createSprite(width-width/12,400,300,250);
    
    branch = createSprite(width-width/12,400,300,250);
    
    
    
    tree.addImage("weak", treeImg);
    tree.addImage("strong", treeImgStrong);

    
    
    crack.addImage("crack", crackImg);
    toy.addImage("tree", treeImg);
    
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
    goodItemsLevel1.add(tree);
    goodItemsLevel1.add(crack);

    badItemsLevel1.add(toy);
    badItemsLevel1.add(crack);
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
    
    gameover=true;//start off as true in order to have user prompt when to begin
    unpaused=true;//game starts out not paused
    
    startScreen();

    itemsWorld1 = [mop, crack];  

    slider = createSlider(0, 20, 3);
    slider.position(10, 50);
    slider.style('width', '100px');
    
    //SOUNDS
    fastbreathing = loadSound("data/fastbreathing.mp3");
   
    
}//setup


function draw(){
    
    if (curLevelVal > 2){
        curLevelVal = 0;
    }
    
    sliderVal = slider.value();
    
    /*if(gameover){
        image(endImg, 0, 0);
        console.log("Over");
        
    }*/
    
    if(gameover && keyWentDown(ENTER)){
       
        newGame();
    }
//    else if (gameover){
//        startScreen();
//    }

    if(!gameover) {
        
        keepInBorders();  //constraining leo
        
        //bg1();
         
            
        stateIs();     
    
        lifeDisplay();  //displaying Leo's mood
              
        
        camera.off();//background image is still
        camera.on();
    
        /*if(life<110){
            if(millis()%200 > 0 && millis()%200 < 50){
                tint(0, 153, 204);  // Tint blue
            }
        }*/
        
        drawSprite(leo);
        
        //noTint();
                
        textSize(30);
        
        /*if(life<110){
                filter(GRAY);  // Tint blue   
            }*/
        
        
        if(life<50){
            //gameover=true;
            
            background(0);

            text("Game over. Some of the decisions you made for leo were not helpful, you should go back. Press R to restart.", width/2, height/2, 300, 200);
        }
        

        updatePosition(); //moving Leo
    }
    
                
}//close draw
    



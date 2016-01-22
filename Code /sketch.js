var gameover, unpaused, user, treeImg;

var leo, tree, oldMan, bus; //Sprites

var objects; //group of object Sprites

var treeLife= 200;

var level = 1;

var secretScore;


function preLoad(){
    
    treeImg = loadImage("data/tree.png");
    leoImg = loadImage("data/tree.png");
}


function setup(){
    
    createCanvas(windowWidth, windowHeight);
    bg(); 
    
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

    if(gameover && keyWentDown(ENTER))
       
        newGame();
    
    
    if(!gameover) {
        
        keepInBorders();  //constraining leo
        
        fill(20, 100, 200);   
        rect(400, 300, treeLife, 200);  //life of the tree
        
        bg();
        
        leo.changeAnimation("idle");

        
        if (keyDown(UP_ARROW) && unpaused){//user steer up
            text(leo.position.y, 300, 300);
            leo.position.y = leo.position.y-2;
            treeLife-= 0.2;
            
            if(keyWentDown(SHIFT)){
                leo.velocity.y = -3;
                if(keyWentDown(80)){
                    leo.velocity.y = 0;
                
                } //if
            } //if

        } //if
        
        if (keyDown(DOWN_ARROW) && unpaused){//user steer down
                   
            leo.position.y = leo.position.y+2;    

        }
    
        if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            leo.position.x = leo.position.x-2;    

        }
        
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            leo.changeAnimation("moveRight");

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
        
        /*if(keyWentDown(80)){   //PAUSE
            text("PAUSE", windowWidth/2, windowHeight/2);
            gameover = true;
            if(keyWentDown(83)){
                text(gameover, windowWidth/2, windowHeight/2);
                gameover = false;
    
        }
            
        }*/
        
        /*if(keyWentDown(80)){
        var selected = 0;
        $('#id').dialog({
  buttons: {
    "First": function() {
      selected = 1;
    },
    "Second": function() {
      selected = 2;
    },
    "Third": function() {
      selected = 3;
    },
    "Fourth": function() {
      selected = 4;
    }
  }
});
        }*/
        
    //camera.position.y=user.position.y-190;//follow the user
        
    camera.off();//background image is still
    camera.on();
    
    
  drawSprites();

}
    
}//close draw
    

function bg(){
    background(0);
}
    
function newGame() {//resetting values for new game
    
    bg();
    
    text("hello", 100, 100);
    gameover=false;

    unpaused=true;
    
    treeLife = 100;
    
    leo=createSprite(width/2,500,50,50); //leo sprite
    
    leo.addAnimation("idle", "data/png/Idle__000.png", "data/png/Idle__009.png");  //leo idle animation

    leo.addAnimation("moveRight", "data/png/Run__000.png", "data/png/Run__009.png");  //leo moving right animation
   
    
    tree=createSprite(width/12,400,50,50); //tree sprite
    tree.addAnimation("tree", "data/tree.png");  //tree image
    
    
    drawSprites();
}


function feedTree(){
    //if sprites collide && f pressed -  change leo animation and change health of tree
    
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
    
    




    
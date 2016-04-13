var gameover, unpaused, user, treeImg, treeImgStrong;  //variables for gameplay

var leo, tree, oldMan, bus, mop; //Sprites
var crack; 

var objects; //group of object Sprites

var life= 100;  //leo's indicator //self-esteem

var level = 1;  //level variable
 
var collision = false;  //collision variable 

var goodValue = 1;  //current good value to display image
var badValue = 1;  //current bad value to display 
var cutSceneValue = 1;

var badDecision = false;
var goodDecision = false;
var timeDecision = false;

var storyBoard = [];  //good cut scenes
var simg1, simg2;

var badStoryBoard = []; //bad cut scenes
var bsimg1, bsimg2; 

var bgInside, bgOutside;

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

var startImg;

var endImg;

var n = 0;

var allSprites;

var soundStarted = false; //variables that help the sound be triggered and play properly
var soundBefore = false;

var world = 1;  //keeps track of the world, to switch bg from interior to exterior

///////Timer
var level = 1;
var stopTimer = false;
var runTheTimer = true;
var timer;
var startTime;
var timeLimit;
function setTime(theTime){
    timer = 0;
    startTime = theTime;
    timeLimit = startTime * 60;
}
setTime(25);
/////////////

var curLevelVal = 0;  //variable that progresses us to the other choise on the same level if a bad choice was made



var levelOneQ = [
    "Your friend, the tree is withering. Press the left arrow key to go closer to the tree and water it before the timer runs out.",
    "The tree gets more thirsty and calls you. But you also hear a scream from outside.",
    "The tree revives and you hear another muffled scream."
];

var levelTwoQ = [
    "The tree revives. You hear a muffled scream from outside. Will you check out the outside through the crack or prune the tree?",
    "The tree gets more thirsty and calls you. But you hear a scream.",
    "The tree revives and you hear a muffled scream."
];

var levelThreeQ = [
    "Your tree is really thirsty - it's dying. It starts pulling you towards it. What do you do?",
    "You still can't see anything. The tree is pulling you. Do you water the tree or peek more?",
    "You still can't see. The tree is still pulling you. Do you water the tree or peek more?"
];

var levelFourQ = [
    "You hear louder screams from outside. What do you do now?",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. The screams are still going on. Do you peek out or water the tree?",
    "You hear louder screams from outside. What now?"
];

var levelFiveQ = [
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water."
];

var levelSixQ = [
    "The tree is relieved. It may need some pruning. Meanwhile you hear sharper screams! What will you do?",
    "While you were pruning, the screams became more human-like. The tree is already thirsty again though.",
    "The tree is relieved. It may need some pruning. Meanwhile you hear even sharper screams!"
];

var levelSevenQ = [
    "You start seeing silhouettes in the crack. Keep looking closer or hug the tree?",
    "The tree is fine. In the meantime you start hearing alarming human sounds.",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. Screams are still going on. Do you peek out or water the tree?"
];

var levelEightQ = [
    "You can now see. You see an old man thrashing his limbs. After a closer look, you see a bus approaching the man and his foot is stuck. He might die! Meanwhile the tree grabs you again - it's time to water it.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable."
];

var levelNineQ = [
    "You expand the crack. The tree grabs you and starts pulling you forcefully. The old man might die. Go to the crack if you want to rip the tree branch or go to the tree to water it.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable. What now?",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable. What now?"
];

var levelTenQ = [
    "Having cut the tree you now need to break through the wall.",
    "The branch isn't strong enough. Do you use your body or try with the shears?",
    "The shears break. What now?"
];

var levelElevenQ = [
    "You've broken through. You see a silhouette amidst fog. What do you do?",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm.",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm."
];

var levelTwelveQ = [
    "Ending in Storyboard form: Leo takes the first step to run towards the cave, but spots his own reflection on a storefront glass. He stops to look at his reflection. He slowly moves his hand across his face and realizes the scar is gone, wrinkles are gone and his skin color is back to normal. Leo’s eyes light up and he starts happily jumping in place. Wow, I’m here, I’m doing it."
];


//////////////////
//cut scene text
var levelOneGood = [
    "Your friend, the tree is withering. What do you do with your water??1",
    "The tree gets more thirsty and calls you. But you hear a scream.",
    "Tree revives and you hear a muffled scream."
];

var levelTwoGood = [
    "Tree revives and you hear a muffled scream.",
    "The tree gets more thirsty and calls you. But you hear a scream.",
    "Tree revives and you hear a muffled scream."
];

var levelThreeGood = [
    "Your tree is really thirsty and dying. It starts pulling you towards it. What do you do?3",
    "You still can't see anything. The tree is pulling you. Do you water the tree or peek more?",
    "You still can't see. The tree is still pulling you. Do you water the tree or peek more?"
];

var levelFourGood = [
    "You hear louder screams from outside.",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. Screams are still going on. Do you peek out or water the tree",
    "You hear louder screams from outside."
];

var levelFiveGood = [
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water."
];

var levelSixGood = [
    "The tree is relieved. It may need some pruning. Meanwhile you hear sharper screams!",
    "While you were pruning, the screams become more human-like. The tree is already thirsty.",
    "The tree is relieved. It may need some pruning. Meanwhile you hear sharper screams!"
];

var levelSevenGood = [
    "You start seeing silhouettes in the crack. Keep looking closer or hug the tree?",
    "The tree is fine. In the meantime you start hearing alarming human sounds.",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. Screams are still going on. Do you peek out or water the tree"
];

var levelEightGood = [
    "You can now see. You see an old man thrashing his limbs. After a closer look, you see a bus approaching the man and his foot is stuck. He might die! Meanwhile the tree grabs you again - it's time to water it.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable"
];

var levelNineGood = [
    "You expand the crack. The tree grabs you and starts pulling you forcefully. The old man might die. You drop a pair of shears as you're being dragged.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable"
];

var levelTenGood = [
    "Having cut the tree you now need to break through the wall.",
    "The branch isn't strong enough. Do you use your body or try with the shears?",
    "The shears break. What now?"
];

var levelElevenGood = [
    "You've broken through. You see a silhouette amidst fog. What do you do?",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm"
];

var levelTwelveGood = [
    "Ending in Storyboard form: Leo takes the first step to run towards the cave, but spots his own reflection on a storefront glass. He stops to look at his reflection. He slowly moves his hand across his face and realizes the scar is gone, wrinkles are gone and his skin color is back to normal. Leo’s eyes light up and he starts happily jumping in place. Wow, I’m here, I’m doing it."
];


////////////
//bad cut scenes

var levelOneBad = [
    "Your friend, the tree is withering. What do you do with your water??1",
    "The tree gets more thirsty and calls you. But you hear a scream.",
    "Tree revives and you hear a muffled scream."
];

var levelTwoBad = [
    "Tree revives and you hear a muffled scream.",
    "The tree gets more thirsty and calls you. But you hear a scream.",
    "Tree revives and you hear a muffled scream."
];

var levelThreeBad = [
    "Your tree is really thirsty and dying. It starts pulling you towards it. What do you do?3",
    "You still can't see anything. The tree is pulling you. Do you water the tree or peek more?",
    "You still can't see. The tree is still pulling you. Do you water the tree or peek more?"
];

var levelFourBad = [
    "You hear louder screams from outside.",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. Screams are still going on. Do you peek out or water the tree",
    "You hear louder screams from outside."
];

var levelFiveBad = [
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water.",
    "It's too bright to see. In the meantime the tree starts to drag you back as it needs water."
];

var levelSixBad = [
    "The tree is relieved. It may need some pruning. Meanwhile you hear sharper screams!",
    "While you were pruning, the screams become more human-like. The tree is already thirsty.",
    "The tree is relieved. It may need some pruning. Meanwhile you hear sharper screams!"
];

var levelSevenBad = [
    "You start seeing silhouettes in the crack.",
    "The tree is fine. In the meantime you start hearing alarming human sounds.",
    "It's dark and the tree is strangling you with its hug. It wants to be watered. Screams are still going on. Do you peek out or water the tree"
];

var levelEightBad = [
    "You can now see. You see an old man thrashing his limbs. After a closer look, you see a bus approaching the man and his foot is stuck. He might die! Meanwhile the tree grabs you again - it's time to water it.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable"
];

var levelNineBad = [
    "You expand the crack. The tree grabs you and starts pulling you forcefully. The old man might die. You drop a pair of shears as you're being dragged.",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable",
    "The tree is relieved. It may need some pruning. Meanwhile the man's sounds become unbearable"
];

var levelTenBad = [
    "Having cut the tree you now need to break through the wall.",
    "The branch isn't strong enough. Do you use your body or try with the shears?",
    "The shears break. What now?"
];

var levelElevenBad = [
    "You've broken through. You see a silhouette amidst fog. Will you push to silhouette or keep looking?",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm",
    "You hear a bus driving by and a loud scream. You feel someone grip your arm"
];

var levelTwelveBad = [
    "Ending in Storyboard form: Leo takes the first step to run towards the cave, but spots his own reflection on a storefront glass. He stops to look at his reflection. He slowly moves his hand across his face and realizes the scar is gone, wrinkles are gone and his skin color is back to normal. Leo’s eyes light up and he starts happily jumping in place. Wow, I’m here, I’m doing it."
];

/*var text1 = "Will you water the tree or drink the water yourself?";
var text2 = "Question 2";
var text3 = "Question 3";
var text4 = "Question 4";
var text5 = "Question 5";*/


//var showingSprites = true;

var showingAnimation;
var showingBadAnimation;
var showingTimeAnimation;

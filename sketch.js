var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    block3 = createSprite(360,580,260,30);
    block3.shapeColor = "green";
    block4 = createSprite(490,580,160,30);
    block4.shapeColor = "red";

    loadSound("music.mp3")

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
   // ball.shapeColor = rgb(255,255,255);
   // ball.velocityX = 0.3;
    //write code to add velocityX and velocityY
    ball.velocityX = 10;
    ball.velocityY = -10;


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        music.stop() 
        ball.shapeColor = "orange";
        ball.velocityX = 1;
        ball.velocityY = 1;



        //write code to stop music
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "blue";
        music.play();
    }

    //write code to bounce off ball from the block3
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    //write code to bounce off ball from the block4

    drawSprites();
}

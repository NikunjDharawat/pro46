
var  canvas,ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var bikes, bike1, bike2;
var track, bike1_img, bike2_img;

function preload(){
  track = loadImage("track.png");
  bike1_img = loadImage("bike 7.jpg");
  bike2_img = loadImage("bike9.jpg");
  
  ground = loadImage("ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}




function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

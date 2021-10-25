const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerArcherImg;
var arrow;
var baseimage;
var board;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png");
  boardImg = loadImage("./assets/board.png");
  arrowImg = loadImage("./assets/arrow.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  //create player base body

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);

  World.add(world, playerBase);

  //create player body

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player)

  playerArcher = Bodies.rectangle(260, 180, 180, 150, options);
  World.add(world, playerArcher)

  board = Bodies.rectangle(1300, 220, 180, 150, options);
  World.add(world, board)

  arrow = Bodies.rectangle(339, 250, 180, 150, options);
  World.add(world, arrow)

}

function draw() {
  background(backgroundImg);
  
  image(playerArcherImg, playerArcher.position.x, playerArcher.position.y, 180, 150)
  //show the player image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150)


  //show the playerbase image using image() function

  image(playerimage, player.position.x, player.position.y, 50, 180)

  image(boardImg, board.position.x, board.position.y, 180, 150)

  image(arrowImg, arrow.position.x, arrow.position.y, 100, 10)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

}
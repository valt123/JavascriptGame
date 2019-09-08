//Imports
import Player from './player.js';
import InputHandler from './input.js';
import Score from './score.js';

//canvas & context
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");

//images
let playerImg = document.getElementById("playerImg");

//class instant
let player = new Player(canvas.width, canvas.height, playerImg);
let score = new Score(canvas.width, canvas.height);
new InputHandler(player);

//gameLoop
let lastTime = 0;
function gameLoop(timestamp)
{
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  //player logic
  player.draw(ctx);
  player.update(deltaTime, canvas.width, canvas.height);
  player.collisionDetect(canvas.width, canvas.height);

  //score
  score.draw(ctx)

  requestAnimationFrame(gameLoop);
}
gameLoop();

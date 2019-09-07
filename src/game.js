//Imports
import Player from './player.js';
import InputHandler from './input.js'

//canvas & context
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");

//class instant
let player = new Player(canvas.width, canvas.height);
new InputHandler(player);

//gameLoop
let lastTime = 0;
function gameLoop(timestamp)
{
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,canvas.width,canvas.height);
  player.draw(ctx);
  player.update(deltaTime, canvas.width, canvas.height);
  player.collisionDetect(canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}
gameLoop();

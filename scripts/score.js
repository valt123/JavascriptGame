export default class Score
{
  constructor(canvasWidth, canvasHeight)
  {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.width = 25;
    this.height = 25;

    this.position =
    {
      x: Math.floor(Math.random() * (this.canvasWidth - this.width)),
      y: Math.floor(Math.random() * (this.canvasHeight - this.height))
    }

    this.collision = {
      //top left corner
      x1: this.position.x,
      y1: this.position.y,
      //bottom right corner
      x2: this.position.x + this.width,
      y2: this.position.y + this.height,
      collided: false
    }
  }

  draw(ctx)
  {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  collisionDetect(player)
  {
    if (this.collision.x1 >= player.collision.x1 && this.collision.x2 <= player.collision.x2 && this.collision.y1 >= player.collision.y1 && this.collision.y2 <= player.collision.y2)
    {
      this.collision.collided = true;
    }
  }


}

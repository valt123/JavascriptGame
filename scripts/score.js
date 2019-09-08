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
      x: 50,
      y: 50
    }

    this.collision = {
      //top left corner
      x1: this.position.x,
      y1: this.position.y,
      //bottom right corner
      x2: this.position.x + this.width,
      y2: this.position.y + this.height
    }
  }

  draw(ctx)
  {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

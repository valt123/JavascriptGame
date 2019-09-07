export default class Player {
  constructor(canvasWidth, canvasHeight)
  {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.width = 50;
    this.height = 50;

    this.position = {
      x: 20,
      y: 20
    }
    this.movement = {
      x: 0,
      y: 0
    }

    this.collision =
    {
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
    ctx.fillstyle = '#0ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }


  update(deltaTime)
  {
    if (!deltaTime) return;

    this.position.x += this.movement.x / deltaTime;
    this.position.y += this.movement.y / deltaTime;

    //Player collisionbox update
    this.collision =
    {
      //top left corner
      x1: this.position.x,
      y1: this.position.y,
      //bottom right corner
      x2: this.position.x + this.width,
      y2: this.position.y + this.height
    }
  }

  moveLeft()
  {
    this.movement.x = -50;
  }
  moveRight()
  {
    this.movement.x = 50;
  }
  moveUp()
  {
    this.movement.y = -50;
  }
  moveDown()
  {
    this.movement.y = 50;
  }

  stopMovementUpDown()
  {
    this.movement.y = 0;
  }
  stopMovementSide()
  {
    this.movement.x = 0;
  }

  collisionDetect()
  {
    if (this.collision.y2 >= this.canvasHeight)
    {
      console.log("bottom")
      //this.movement.y = 0;
      this.position.y = this.canvasHeight - this.height;
    }

    if (this.collision.y1 <= 0)
    {
      console.log("Top")
      this.position.y = 0;
    }

    if (this.collision.x2 >= this.canvasWidth)
    {
      console.log("right side")
      this.position.x = this.canvasWidth - this.width;
    }

    if (this.collision.x1 <= 0)
    {
      //console.log("left side")
      this.position.x = 0;
    }
  }
}

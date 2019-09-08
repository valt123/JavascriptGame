export default class Player {
  constructor(canvasWidth, canvasHeight, playerImg)
  {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.image = playerImg;

    this.width = 50;
    this.height = 50;

    this.position = {
      x: 20,
      y: 20
    }
    this.movement = {
      x: 0,
      y: 0,
      speed: 100
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
    ctx.drawImage(this.image, this.position.x, this.position.y)
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }


  update(deltaTime)
  {
    if (!deltaTime) return;
    //Player movement
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
    this.movement.x = -this.movement.speed;
  }
  moveRight()
  {
    this.movement.x = this.movement.speed;
  }
  moveUp()
  {
    this.movement.y = -this.movement.speed;
  }
  moveDown()
  {
    this.movement.y = this.movement.speed;
  }

  stopMovementUpDown()
  {
    this.movement.y = 0;
  }
  stopMovementSide()
  {
    this.movement.x = 0;
  }

  collisionDetect(score)
  {
    //Collision with walls
    if (this.collision.y2 >= this.canvasHeight)
    {
      //console.log("bottom")
      this.position.y = this.canvasHeight - this.height;
    }

    if (this.collision.y1 <= 0)
    {
      //console.log("Top")
      this.position.y = 0;
    }

    if (this.collision.x2 >= this.canvasWidth)
    {
      //console.log("right side")
      this.position.x = this.canvasWidth - this.width;
    }

    if (this.collision.x1 <= 0)
    {
      //console.log("left side")
      this.position.x = 0;
    }
  }
}

export default class inputHandler
{
  constructor(player)
  {
    //document.addEventListener('keydown', event => { alert(event.keyCode); })
    document.addEventListener('keydown', event =>
    {

      switch (event.keyCode)
      {
        case 37:
          player.moveLeft();
          break;

        case 39:
          player.moveRight();
          break;

        case 38:
          player.moveUp();
          break;

        case 40:
          player.moveDown();
          break;
      }
    })

    document.addEventListener('keyup', event =>
    {

      switch (event.keyCode)
      {
        case 37:
          player.stopMovementSide();
          break;

        case 39:
          player.stopMovementSide();
          break;

        case 38:
          player.stopMovementUpDown();
          break;

        case 40:
          player.stopMovementUpDown();
          break;
      }
    })
  }
}

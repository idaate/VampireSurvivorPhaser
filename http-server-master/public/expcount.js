class ExpCount {

  constructor(scene) {

  this.rememberScene = scene;

  this.scoreLabel = scene.add.bitmapText(scene.player.x, scene.player.y, "pixelFont", "EXP: ", 16);


 }

  update(){


    this.scoreLabel.text = "EXP: " + this.rememberScene.playerExperience + "/" + this.rememberScene.playerNeededExperience;

    var yDraw = this.rememberScene.player.y + 95;
    var xDraw = this.rememberScene.player.x + 75;

  /*  if (yDraw < 2.5){
      yDraw = 2.5;
    }

    if (xDraw < 140){
      xDraw = 140;
    }*/

    this.scoreLabel.x = xDraw;
    this.scoreLabel.y = yDraw;


  }


}

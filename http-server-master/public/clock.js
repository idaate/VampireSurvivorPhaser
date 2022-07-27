class ClockView {

  constructor(scene) {

  this.rememberScene = scene;

  // create the big clock on the top of the screen
  this.timePassed = 0;
  this.scoreLabel = scene.add.bitmapText(scene.player.x, scene.player.y, "pixelFont", "TIME: ", 16);
  this.scoreLabel.depth = 600;
  this.scoreLabel.text = "TIME: " + this.timePassed;

  this.depth = 600;

  this.timeUp = true;

 }

  update(){

    if(this.timeUp){
      this.timePassed += 1;
      this.timeUp = false;
      this.letsWait();
    }
    this.scoreLabel.text = "TIME: " + this.timePassed;
    this.scoreLabel.x = this.rememberScene.player.x - 20;
    this.scoreLabel.y = this.rememberScene.player.y - 109;

  }

  letsWait(){
    this.rememberScene.time.addEvent({
      delay: 1000,
      callback: this.setTrue,
      callbackScope: this,
      loop: false
    });
  }

  setTrue(){
    this.timeUp = true;
  }




}

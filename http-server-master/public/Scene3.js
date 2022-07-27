class Scene3 extends Phaser.Scene {
  constructor(){
    super("overGame");
  }

  preload(){

  }

  create(){
    this.add.text(70, 85, "game over");

  //  this.scene.start("playGame");
  }

}

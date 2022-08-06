class Scene1 extends Phaser.Scene {
  constructor(){
    super("loadGame");
  }

  preload(){

    this.load.spritesheet("player", "assets/spritesheets/player.png", {
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet("exp1", "assets/spritesheets/exp.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("heart", "assets/spritesheets/heart.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("enemy1", "assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("enemy2", "assets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("enemy3", "assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("beam", "assets/spritesheets/beam.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

  }

  create(){
    this.add.text(70, 85, "Please wait for the");
    this.add.text(100, 105, "game to load.");

    this.scene.start("playGame");
  }

}

var gameSettings = {
  playerSpeed: 50,
}

var config = {
  width: 640/2,
  height: 448/2,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Scene3],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
}

window.onload = function() {
  var game = new Phaser.Game(config);
}

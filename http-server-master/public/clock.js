class ClockView {

  constructor(scene) {

  this.rememberScene = scene;

  // create the big clock on the top of the screen
  this.timePassed = 0;
  this.scoreLabel = scene.add.bitmapText(scene.player.x, scene.player.y, "pixelFont", "TIME: ", 16);
  this.scoreLabel.depth = 600;
  this.scoreLabel.text = "TIME: " + this.timePassed;

  this.depth = 600;

  // check to see if one second has passed
  this.timeUp = true;

  // how fast the current spawn timer is
  this.readyToSpawn = true;
  this.currentSpawnTime = 3000;
  this.enemyPhase = 1;

 }

  update(){

    if(this.timeUp){
      this.timePassed += 1;
      this.timeUp = false;
      this.letsWait();
    }
    this.scoreLabel.text = "TIME: " + this.timePassed;

    var yDraw = this.rememberScene.player.y - 109;
    var xDraw = this.rememberScene.player.x - 20;

    if (yDraw < 2.5){
      yDraw = 2.5;
    }

    if (xDraw < 140){
      xDraw = 140;
    }

    this.scoreLabel.x = xDraw;
    this.scoreLabel.y = yDraw;

    this.spawnEnemyWhen();
    this.setSpeedOfEnemySpawn();

  }

  // waits one second
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

  spawnEnemyWhen(){

    if (this.readyToSpawn){
      this.readyToSpawn = false;
      this.rememberScene.time.addEvent({
        delay: this.currentSpawnTime,
        callback: this.spawnEnemy,
        callbackScope: this,
        loop: false
      });
    }
  }

  spawnEnemy(){

    var xRandom = this.rememberScene.createSpawnCoordinateX();
    var yRandom = this.rememberScene.createSpawnCoordinateY();

    if (this.enemyPhase == 1){
      // creates coordinates for the enemies so they will spawn just off screen
      console.log("enemy spawned");
      var enemy = new Enemy(this.rememberScene, xRandom, yRandom, "enemy1", 10, 10, 10, false);
      this.readyToSpawn = true;
    } else if (this.enemyPhase == 2){
      console.log("enemy spawned");
      var enemy = new Enemy(this.rememberScene, xRandom, yRandom, "enemy2", 1, 40, 1, false);
      this.readyToSpawn = true;
    }
    else if (this.enemyPhase == 3){
      console.log("enemy spawned");
      var enemy = new Enemy(this.rememberScene, xRandom, yRandom, "enemy2", 1, 30, 1, false);
      this.readyToSpawn = true;
    }

  }

  // how frequent the enemy spawns become
  setSpeedOfEnemySpawn(){

    if (this.timePassed == 20){
      this.currentSpawnTime = 1500;
    } else if (this.timePassed == 30){
      this.enemyPhase = 2;
      this.currentSpawnTime = 100;
    } else if (this.timePassed == 33){
      this.enemyPhase = 3;
      this.currentSpawnTime = 1000;
    }

  }


}

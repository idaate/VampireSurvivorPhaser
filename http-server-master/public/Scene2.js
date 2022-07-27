class Scene2 extends Phaser.Scene {

  constructor(){
    super("playGame");

    // create Main Player Values
    this.playerSpeed = 30;
    this.basePlayerHealth = 50;
    this.playerHealth = this.basePlayerHealth;
    this.playerStrength = 10;
    this.playerASPD = 10;

    this.playerDirection = "Left";

    this.playerLevel = 1;
    this.playerExperience = 0;

    this.timerEvent;

    this.enemyAmount = 0;

  }

  preload(){

    // grassTile is 8 by 8
    this.load.image("grassTile", "assets/grassTile.png");

  }

  create(){

    // creating the map
    const mapArray1 = [
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ],
      [0, 1, 2, 1, 32, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32, 0, 1, 2, 1, 32 ]

    ];
    const map = this.make.tilemap({
      data: mapArray1,
      tileWidth: 32,
      tileHeight: 32
    });

    // a map can use multiple tilesets !!
    map.addTilesetImage("grassTile");
    // layer id, name, x position to place the layer in the world, y position to place the layer in the world
    const bottomLayer = map.createLayer(0, "grassTile");
    bottomLayer.setCollisionByProperty({ collision: true });

    // create the player
    this.player = new Player(this, 200, 200);
    this.player.depth = 5;

    // create the health bar
    this.healthBar = new HealthBar(this, this.player.x-25, this.player.y - 20);
    this.healthBar.depth = 100;

    // create the Header
    this.headerBar = new HeaderBar(this);

    // create the big clock on the top of the screen
    this.clockTime = new ClockView(this);

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    // create groups
    this.enemies = this.add.group();
    this.projectiles = this.add.group();
    this.experiencePoints = this.add.group();

    // create colliders
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
    this.physics.add.overlap(this.projectiles, this.enemies, this.hurtEnemy, null, this);
    this.physics.add.overlap(this.player, this.experiencePoints, this.playerGainExperience, null, this);

    // set world bounds
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;

    // configure camera
    this.cameras.main.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels
    );
    this.cameras.main.setZoom(1);
    this.cameras.main.startFollow(this.player, true, 1, 1);



  }

  update(){

    //  this.physics.moveTo(this.enemy1, this.player.x, this.player.y, 10);

      this.player.playerMovementManager(this.playerSpeed);

      this.healthBar.draw();
      this.headerBar.draw();
      this.clockTime.update();

      for(var i = 0; i < this.enemies.getChildren().length; i++){
        var currentEnemy = this.enemies.getChildren()[i];
        var speedTime = currentEnemy.getSpeed();
        this.physics.moveTo(currentEnemy, this.player.x, this.player.y, speedTime);
      }


      if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.spawnEnemy();
      }

      // updates all enemies on screen
      for(var i = 0; i < this.enemies.getChildren().length; i++){
        var enemies = this.enemies.getChildren()[i];

      }

      // updates the bullets
      for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var beam = this.projectiles.getChildren()[i];
        beam.update();
      }


  }

  hurtPlayer(player, enemy){

    if(this.player.alpha < 1){
      return;
    }

    if (this.playerHealth <= 0){
      //this.playerHealth = 50;
      this.scene.start("overGame");

    } else {
      if (this.player.alpha == 1){

        // gives player a few frames of immunity
        this.player.alpha = 0.9;
        this.playerHealth -= enemy.getStrength();
        this.player.setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000);

        console.log(enemy.getStrength());

        // time of immunity
        var tween = this.tweens.add({
          targets: this.player,
          completeDelay: 100,
          repeat: 0,
          onComplete: function(){
            console.log("ow!");
            this.player.alpha = 1;
            this.player.clearTint();
          },
          callbackScope: this
        });

      }
    }
  }


  playerGainExperience(player, experience){
    if (this.playerExperience < 100){
      this.playerExperience += 1;
    } else {
      this.playerLevel += 1;
      this.playerExperience = 0;
    }
  }

  spawnBullet(){
    var bullet = new Bullet(this);
  }

  spawnEnemy(){

    // creates coordinates for the enemies so they will spawn just off screen
    var xRandom = this.createSpawnCoordinateX();
    var yRandom = this.createSpawnCoordinateY();

    var enemy = new Enemy(this, xRandom, yRandom);
    var bullet = new Bullet(this);

  }

  createSpawnCoordinateX(){
    var leftOrRight = Phaser.Math.Between(0, 1);
    console.log("we got here");
      if (leftOrRight == 1){
        console.log("spawn left");
        var newX = Phaser.Math.Between(this.player.x - 200, this.player.x - 120)
        console.log("x is " + newX);
        return newX;
      } else {
        console.log("spawn right");
        var newX = Phaser.Math.Between(this.player.x + 120, this.player.x + 200)
        console.log("x is " + newX);
        return newX;
      }
  }

  createSpawnCoordinateY(){
    var leftOrRight = Phaser.Math.Between(0, 1);
    console.log("we got here");
      if (leftOrRight == 1){
        console.log("spawn down");
        var newX = Phaser.Math.Between(this.player.y - 200, this.player.y - 120)
        console.log("x is " + newX);
        return newX;
      } else {
        console.log("spawn up");
        var newX = Phaser.Math.Between(this.player.y + 120, this.player.y + 200)
        console.log("x is " + newX);
        return newX;
      }
  }

  /*checkNotAround(numberx, numbery){
    if (numberx > (this.player.x + 160) || numberx < (this.player.x - 160)){
      if (numbery > (this.player.y + 160) || numbery < (this.player.y - 160)){
        console.log("not in sight");
        return true;
      }
    }
    else {
      return false;
    }
  }*/

  hurtEnemy(theProjectile, theInjured){
    var damage = theProjectile.bulletStrength
    console.log(damage);
    theInjured.setHealth(damage);
    //console.log.(theInjured.enemyHealth);
    theProjectile.destroy();
  }

  // --------------

  // getters and setters

  getPlayerX(){
    return this.player.x;
  }
  getPlayerY(){
    return this.player.y;
  }

  getMapWidth(){
    return this.mapWidth;
  }
  getMapHeight(){
    return this.mapHeight;
  }

}

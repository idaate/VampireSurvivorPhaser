class Enemy extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y, type, health, speed, strength, canShoot) {

   super(scene, x, y, type);

   this.enemyHealth = health;
   this.enemySpeed = speed;
   this.enemyStrength = strength;
   this.enemyProjectileType = canShoot;

   this.isBullet = false;

   this.readyToShoot = true;

   this.rememberScene = scene;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.enemies.add(this);
   this.body.setCollideWorldBounds(true);

   this.body.setBounce(10);

   scene.physics.world.enableBody(this);

 }

  update(){

    if(this.enemyProjectileType){
      if(this.readyToShoot){
        this.readyToShoot = false;
        this.fireBullet();
        this.letsWait();
      }
    }

  }

  getSpeed(){
    return this.enemySpeed;
  }

  getStrength(){
    return this.enemyStrength;

  }

  checkMe(){
    console.log("i'm checked!");
  }

  setHealth(damage){
    this.enemyHealth -= damage;
    this.checkHealth(this.enemyHealth);
  }


  checkHealth(health){
    if(health < 0){
      this.textExp = new Exp(this.rememberScene, this.x, this.y, 1);
      this.destroy();
      console.log("destwoy");
    }
  }

  fireBullet(){
    console.log("we got here");
    console.log(this.x);
      this.rememberScene.spawnEnemyBullet(this.x, this.y, this.strength);
  }

  // waits one second
  letsWait(){
    this.rememberScene.time.addEvent({
      delay: 5000,
      callback: this.setTrue,
      callbackScope: this,
      loop: false
    });
  }

  setTrue(){
    this.readyToShoot = true;
  }

}

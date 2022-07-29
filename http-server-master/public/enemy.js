class Enemy extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y, type, health, speed, strength, canShoot) {

   super(scene, x, y, type);

   this.enemyHealth = health;
   this.enemySpeed = speed;
   this.enemyStrength = strength;
   this.enemyProjectileType = canShoot;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.enemies.add(this);
   this.body.setCollideWorldBounds(true);

   this.body.setBounce(10);

   // note: TRY TO FIGURE OUT HOW TO MAKE THE ENEMIES NOT OVERLAP
  // this.body.setPushable(true);

   scene.physics.world.enableBody(this);

 }

  update(){

    // console.log("awa");
    //this.physics.moveTo(this, 10, 10, 10);

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
      this.destroy();
      console.log("destwoy");
    }
  }


}

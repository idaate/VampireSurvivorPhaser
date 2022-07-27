class Enemy extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y) {

   super(scene, x, y, "enemy1");

   this.enemyHealth = 10;
   this.enemySpeed = 10;
   this.enemyStrength = 1;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.enemies.add(this);
   this.body.setCollideWorldBounds(true);

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

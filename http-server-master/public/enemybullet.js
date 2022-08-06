class EnemyBullet extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y, theStrength) {

   // var position;
   super(scene, x, y, "beam");

   this.bulletSpeed = 100;
   this.bulletStrength = theStrength;

   this.isBullet = true;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.enemyProjectiles.add(this);
//   this.body.setCollideWorldBounds(true);

   scene.physics.world.enableBody(this);

   scene.physics.moveTo(this, scene.player.x, scene.player.y, this.bulletSpeed);



 }

  update(){

    if (this.y < 0 || this.y > 1080){
      this.destroy();
      console.log("destroy bullet");
    }

  }

  getStrength(){
    return 1;
  }




}

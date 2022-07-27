class Bullet extends Phaser.GameObjects.Sprite{

  constructor(scene) {

    var x = scene.player.x;
    var y = scene.player.y;
    var position;
   super(scene, x, y, "beam");

   this.bulletSpeed = 10;
   this.bulletStrength = 10;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.projectiles.add(this);
//   this.body.setCollideWorldBounds(true);

   scene.physics.world.enableBody(this);

   if (this.scene.playerDirection == "Up"){
     this.position = "Up";
     this.body.velocity.y = - 250;
   } else if ( this.scene.playerDirection == "Down"){
     this.position = "Down";
     this.body.velocity.y = 250;
   } else if ( this.scene.playerDirection == "Left"){
     this.position = "Left";
     this.body.velocity.x = - 250;
   } else if ( this.scene.playerDirection == "Right"){
     this.position = "Right";
     this.body.velocity.x = 250;
   }


 }

  update(){

    if (this.y < 0 || this.y > 1080){
      this.destroy();
      console.log("destroy bullet");
    }

  }




}

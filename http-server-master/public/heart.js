class Heart extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y, value) {

   super(scene, x, y, "heart");

   console.log(value)
   this.healthReturn = value;

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.healthPotions.add(this);

   scene.physics.world.enableBody(this);

 }

}

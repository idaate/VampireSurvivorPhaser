class Exp extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y, value) {

   super(scene, x, y, "exp1");

   console.log(value)
   this.worth = value;
   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   scene.experiencePoints.add(this);

   scene.physics.world.enableBody(this);


 }

}

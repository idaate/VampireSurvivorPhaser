class Player extends Phaser.GameObjects.Sprite{

  constructor(scene, x, y) {

   super(scene, x, y, "player");

   this.scene.add.existing(this);
   this.scene.physics.add.existing(this);
   this.body.setCollideWorldBounds(true);

   this.keyW = this.scene.input.keyboard.addKey("W");
   this.keyA = this.scene.input.keyboard.addKey("A");
   this.keyS = this.scene.input.keyboard.addKey("S");
   this.keyD = this.scene.input.keyboard.addKey("D");

 }

  update(){

  }

  playerMovementManager(speed){
    if (this.keyW.isDown) {
      this.scene.playerDirection = "Up";
    //  console.log(this.scene.playerDirection);
      this.body.setVelocityY(-speed);
    } else if (this.keyA.isDown) {
      this.scene.playerDirection = "Left";
    //  console.log(this.scene.playerDirection);
      this.body.setVelocityX(-speed);
    } else if (this.keyS.isDown) {
      this.scene.playerDirection = "Down";
  //    console.log(this.scene.playerDirection);
      this.body.setVelocityY(speed);
    } else if (this.keyD.isDown) {
      this.scene.playerDirection = "Right";
  //    console.log(this.scene.playerDirection);
      this.body.setVelocityX(speed);
    }
    else {
      this.body.setVelocityY(0);
      this.body.setVelocityX(0);
    }
  }

  checkHealth(health){
    if(health < 0){
      this.destroy();
      console.log("destwoy");
    }
  }

  /*playerMovementManager(direction){
    if(direction == "Left"){
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }else if(direction == "Right"){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }
    if(direction == "Up"){
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }else if(direction == "Down"){
      this.player.setVelocityY(gameSettings.playerSpeed);
    }else{
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }*/

}

class HeaderBar{

  constructor(scene, x, y){

    this.rememberScene = scene;

    console.log(this.rememberScene.playerHealth);

    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.x = x;
    this.y = y;
    this.depth = 500;


    this.draw();

    scene.add.existing(this.bar);

  }


    draw ()
    {
        this.bar.clear();

        this.bar.depth = 100;

        var yDraw = this.rememberScene.getPlayerY() - config.height/2;
        var xDraw = this.rememberScene.getPlayerX() - config.width/2;

        if (yDraw < 0){
          yDraw = 0;
        }

        if (xDraw < 0){
          xDraw = 0;
        }

        // NOTE THAT I WILL NEED TO FIX LATER: if i go too far to the right / bottom
        // the header glitches out and moves off screen


        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(xDraw, yDraw, config.width, 15);


    }

}

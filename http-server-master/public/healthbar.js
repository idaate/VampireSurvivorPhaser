class HealthBar{

  constructor(scene){

    this.rememberScene = scene;

    console.log(this.rememberScene.playerHealth);

    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.value = scene.playerHealth;
    this.p = 76/scene.playerHealth;

    this.draw();

    scene.add.existing(this.bar);

  }

  decrease (amount)
    {
        this.value -= amount;

        if (this.value < 0)
        {
            this.value = 0;
        }

        this.draw();

        return (this.value === 0);
    }

    draw ()
    {
        this.bar.clear();

        this.bar.depth = 100;

        var yDraw = this.rememberScene.getPlayerY() - 20;
        var xDraw = this.rememberScene.getPlayerX() - 25;


        //  BG
        this.bar.fillStyle(0xff0000);
        this.bar.fillRect(xDraw, yDraw, this.rememberScene.basePlayerHealth, 4);

        //  Health

        this.bar.fillStyle(0x00ff00);

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(xDraw, yDraw, this.rememberScene.playerHealth, 4);

    }

}

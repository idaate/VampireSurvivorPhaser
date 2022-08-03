class Scene4 extends Phaser.Scene {

  constructor(){
    super("pauseGame");

  }

  preload(){
    // load in images
    this.load.image('glass-panel', 'assets/cursorTime/PNG/glassPanel.png');
    this.load.image('cursor-hand', 'assets/cursorTime/PNG/cursor_hand.png');
  }

  create(){

    const { width, height } = this.scale;

    this.bar = new Phaser.GameObjects.Graphics(this);
  //  this.bar.defaultStrokeAlpha(5);
    this.bar.alpha = 0.5;
    this.bar.fillStyle(0x000000);
    this.bar.fillRect(0, 0, width, height);

    this.add.existing(this.bar);
  //  var background = graphics.strokeRect(50, 50, 400, 200);

    this.buttonOne = Phaser.GameObjects.Image;
    // Play button
    this.buttonOne = this.add.image(width * 0.5, height * 0.3, 'glass-panel').setDisplaySize(150, 30);
    this.add.text(this.buttonOne.x, this.buttonOne.y, 'Play').setOrigin(0.5);
    // Settings buttonOne
    this.buttonTwo = this.add.image(this.buttonOne.x, this.buttonOne.y + this.buttonOne.displayHeight + 10, 'glass-panel').setDisplaySize(150, 30);
    this.add.text(this.buttonTwo.x, this.buttonTwo.y, 'Settings').setOrigin(0.5);
    // Credits buttonOne
    this.buttonThree = this.add.image(this.buttonTwo.x, this.buttonTwo.y + this.buttonTwo.displayHeight + 10, 'glass-panel').setDisplaySize(150, 30);
    this.add.text(this.buttonThree.x, this.buttonThree.y, 'Credits').setOrigin(0.5);

    // creating an array to put the buttons in
    this.buttons = [];
    this.selectedButtonIndex = 0;

    this.buttons.push(this.buttonOne);
    this.buttons.push(this.buttonTwo);
    this.buttons.push(this.buttonThree);
    console.log(this.buttons.length);

    this.buttonSelector = Phaser.GameObjects.Image;
    this.buttonSelector = this.add.image(0, 0, 'cursor-hand');

    // cursors for cursor input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    // starts the menu with the first option selected
    this.selectButton(0);

    // events
    this.buttonOne.on('selected', () => {
      this.buttonOne.destroy();
      this.buttonTwo.destroy();
      this.buttonThree.destroy();
      console.log('play');
      this.buttonSelector.destroy();
      this.bar.clear();
      this.returnToScene2();

    })
    this.buttonTwo.on('selected', () => {
      console.log('settings');
    })
    this.buttonThree.on('selected', () => {
      console.log('credits');
    })

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
  		buttonOne.off('selected');
  		// ...
  	})

  }

	selectButton(index, number)
	{
		const currentButton = this.buttons[this.selectedButtonIndex];

    currentButton.setTint(0xffffff);

    const button = this.buttons[index];

    button.setTint(0x66ff7f);

    this.buttonSelector.x = button.x + button.displayWidth * 0.5;
    this.buttonSelector.y = button.y + 10;

    this.selectedButtonIndex = index;

	}

	selectNextButton(change = 1)
	{
  	let index = this.selectedButtonIndex + change;
    if (index >= this.buttons.length){
      index = 0;
    }
    else if (index < 0){
      index = this.buttons.length - 1;
    }
    this.selectButton(index);
	}

	confirmSelection()
	{
    const button = this.buttons[this.selectedButtonIndex];

  	// emit the 'selected' event
  	button.emit('selected');
	}

  update(){

    const upJustPressed = Phaser.Input.Keyboard.JustDown(this.up);
    const downJustPressed = Phaser.Input.Keyboard.JustDown(this.down);
    const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.spacebar);

  /*  if (upJustPressed){
      console.log("we pressed up");
    } else if (downJustPressed){
      console.log("we pressed down");
    } else if (spaceJustPressed){
      this.returnToScene2();
    }*/

    if (upJustPressed){
      this.selectNextButton(-1);
    } else if (downJustPressed){
      this.selectNextButton(1);
    }else if (spaceJustPressed){
      this.confirmSelection();
    }



    if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
          this.returnToScene2();
    }
  }

  returnToScene2(){
    this.scene.resume('playGame');
    this.scene.sleep();
  }

}

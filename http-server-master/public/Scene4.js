class Scene4 extends Phaser.Scene {

  constructor(){
    super("pauseGame");


        // array for upgrades
        // create a function that will randomly pick 3 elements from this array to generate buttons for.
        // after randomly picking those elements,
    this.upgrades = ['Bullet', 'Aura', 'Bomb', 'Healing Drops'];
    this.permUpgrades = ['Attack Up', 'Crit Up', 'Health Up', 'Movement Speed Up', 'Attack Speed Up'];

  }

  preload(){
    // load in images
    this.load.image('glass-panel', 'assets/cursorTime/PNG/glassPanel.png');
    this.load.image('cursor-hand', 'assets/cursorTime/PNG/cursor_hand.png');

  }

  create(){

    var howManyLeft = this.upgrades.length;

    const { width, height } = this.scale;

    this.bar = new Phaser.GameObjects.Graphics(this);
    this.bar.alpha = 0.5;
    this.bar.fillStyle(0x000000);
    this.bar.fillRect(0, 0, width, height);

    this.add.existing(this.bar);
  //  var background = graphics.strokeRect(50, 50, 400, 200);
    this.buttonOneBuff = this.pickRandomArray();
    this.buttonTwoBuff = this.pickRandomArray();
    this.buttonThreeBuff = this.pickRandomArray();

    this.buttonOne = Phaser.GameObjects.Image;
    // Play button
    this.buttonOne = this.add.image(width * 0.5, height * 0.3, 'glass-panel').setDisplaySize(200, 30);
    this.textOne = this.add.text(this.buttonOne.x, this.buttonOne.y, this.buttonOneBuff).setOrigin(0.5);
    // Settings buttonOne
    this.buttonTwo = this.add.image(this.buttonOne.x, this.buttonOne.y + this.buttonOne.displayHeight + 10, 'glass-panel').setDisplaySize(200, 30);
    this.textTwo = this.add.text(this.buttonTwo.x, this.buttonTwo.y, this.buttonTwoBuff).setOrigin(0.5);
    // Credits buttonOne
    this.buttonThree = this.add.image(this.buttonTwo.x, this.buttonTwo.y + this.buttonTwo.displayHeight + 10, 'glass-panel').setDisplaySize(200, 30);
    this.textThree = this.add.text(this.buttonThree.x, this.buttonThree.y, this.buttonThreeBuff).setOrigin(0.5);

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

    console.log(this.upgrades.length);

    // events
    this.buttonOne.on('selected', () => {

      this.scene.get("playGame").receiveBuff(this.buttonOneBuff);

      // clears the screen
      this.buttonOne.destroy();
      this.textOne.destroy();
      this.buttonTwo.destroy();
      this.textTwo.destroy();
      this.buttonThree.destroy();
      this.textThree.destroy();

      // adds unused elements back into the array
      this.upgrades.push(this.buttonTwoBuff);
      this.upgrades.push(this.buttonThreeBuff);

      // if applicable, add the 'next level' of buffs
      this.addNextLevel(this.buttonOneBuff);

      console.log('play');
      this.buttonSelector.destroy();
      this.bar.clear();
      this.returnToScene2();

    })
    this.buttonTwo.on('selected', () => {

      this.scene.get("playGame").receiveBuff(this.buttonTwoBuff);

      // clears the screen
      this.buttonOne.destroy();
      this.textOne.destroy();
      this.buttonTwo.destroy();
      this.textTwo.destroy();
      this.buttonThree.destroy();
      this.textThree.destroy();

      // adds unused elements back into the array
      this.upgrades.push(this.buttonOneBuff);
      this.upgrades.push(this.buttonThreeBuff);

      // if applicable, add the 'next level' of buffs
      this.addNextLevel(this.buttonTwoBuff);

      console.log('play');
      this.buttonSelector.destroy();
      this.bar.clear();
      this.returnToScene2();

    })
    this.buttonThree.on('selected', () => {
      this.scene.get("playGame").receiveBuff(this.buttonThreeBuff);

      // clears the screen
      this.buttonOne.destroy();
      this.textOne.destroy();
      this.buttonTwo.destroy();
      this.textTwo.destroy();
      this.buttonThree.destroy();
      this.textThree.destroy();

      // adds unused elements back into the array
      this.upgrades.push(this.buttonTwoBuff);
      this.upgrades.push(this.buttonOneBuff);

      // if applicable, add the 'next level' of buffs
      this.addNextLevel(this.buttonThreeBuff);

      console.log('play');
      this.buttonSelector.destroy();
      this.bar.clear();
      this.returnToScene2();
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

    if (upJustPressed){
      this.selectNextButton(-1);
    } else if (downJustPressed){
      this.selectNextButton(1);
    } else if (spaceJustPressed){
      this.confirmSelection();
    }


  }

  returnToScene2(){
    this.scene.resume('playGame');
    this.scene.sleep();
  }

  // picks a random element from the upgrades array to be included
  pickRandomArray(){

    console.log(this.upgrades.length);

    var randomUpgrade;

    if (this.upgrades.length > 0){
      var chosenNum = Math.floor(Math.random() * this.upgrades.length);
      randomUpgrade = this.upgrades[chosenNum];
      console.log(randomUpgrade);
      this.upgrades.splice(chosenNum, 1);
      console.log(this.upgrades.length);
    } else {
      var chosenNum = Math.floor(Math.random() * this.permUpgrades.length);
      randomUpgrade = this.permUpgrades[chosenNum];
    }
    return randomUpgrade;

  }

  addNextLevel(theBuff){

    switch(theBuff){
      case 'Bullet':
        this.upgrades.push('2nd Bullet Upgrade');
        break;
      case '2nd Bullet Upgrade':
        this.upgrades.push('Final Bullet Upgrade');
        break;
      case 'Aura':
        this.upgrades.push('2nd Aura Upgrade');
        break;
      case '2nd Aura Upgrade':
        this.upgrades.push('Final Aura Upgrade');
        break;
      case 'Bomb':
        this.upgrades.push('2nd Bomb Upgrade');
        break;
      case '2nd Bomb Upgrade':
        this.upgrades.push('Final Bomb Upgrade');
    }

  }

}

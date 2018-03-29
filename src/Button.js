class Button extends Phaser.GameObjects.Sprite {
    constructor (x, y, callback, scene, hover = 1, onDown = 2) {
        super(scene, x, y, 'button', 0);
        this.scene = scene;
        this.callback = callback;
        this.overFrame = hover;
        this.downFrame = onDown;
        this.scene.add.existing(this);
        this.setClickEvents();
    }

    setClickEvents () {
        this.setInteractive();
        this.on('pointerover', () => this.setFrame(this.overFrame), this);
        this.on('pointerout', () => this.setFrame(0), this);
        this.on('pointerdown', () => {
            this.setFrame(this.downFrame);
            this.callback(this.scene);
        }, this);
    }

    addText (text, style) {
        style.fontSize = 0.6 * this.displayHeight;
        this.scene.add.text(this.x, this.y, text, style).setOrigin(0.5);
    }
}
export default Button;

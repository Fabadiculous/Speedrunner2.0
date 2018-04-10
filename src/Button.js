class Button extends Phaser.GameObjects.Sprite {
    constructor (x, y, callback, params, scene, hover = 1, onDown = 2) {
        super(scene, x, y, 'button', 0);
        this.scene = scene;
        this.params = params;
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
            this.callback.apply(this.scene, this.params);
        }, this);
    }

    addText (text, style) {
        if (style === undefined) {
            style = {
                fontSize: '18px',
                fontFamily: 'Arial',
                color: '#FFD700',
                align: 'center'
            };
        }
        style.fontSize = 0.6 * this.displayHeight;
        this.scene.add.text(this.x, this.y, text, style).setOrigin(0.5);
    }
}
export default Button;

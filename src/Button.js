class Button extends Phaser.GameObjects.Image {
    constructor (x, y, callback, scene, hover = 1, onDown = 2) {
        super(scene, x, y, 'button', 0);
        this.scene = scene;

        this.scene.add.existing(this);
        this.setInteractive();
        this.on('pointerover', () => this.setFrame(hover), this);
        this.on('pointerout', () => this.setFrame(0), this);
        this.on('pointerdown', () => {
            this.setFrame(onDown);
            callback();
        }, this);
    }

    addText (text, style) {
        style.fontSize = 0.1 * this.y;
        this.scene.add.text(this.x, this.y, text, style).setOrigin(0.5);
    }
}
export default Button;

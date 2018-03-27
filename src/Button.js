class Button extends Phaser.GameObjects.Image {
    constructor (x, y, callback, scene, hover = 1, onDown = 2) {
        super(scene, x, y, 'button', 0);
        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerover', () => this.setFrame(hover), this);
        this.on('pointerout', () => this.setFrame(0), this);
        this.on('pointerdown', () => {
            this.setFrame(onDown);
            callback();
        }, this);
    }
}

export default Button;

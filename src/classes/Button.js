class Button extends Phaser.GameObjects.Sprite {
    constructor (x, y, callback, params, scene, text = '', key = 'button', hover = 1, onDown = 2) {
        super(scene, x, y, key, 0);
        this.scene = scene;
        this.params = params;
        this.callback = callback;

        this.active = true;

        this.text = this.addText(text);

        this.container = this.scene.add.container(0, 0, [ this, this.text ]);

        this.overFrame = hover;
        this.downFrame = onDown;
        this.setClickEvents();
    }

    deactivate () {
        this.active = false;
        this.disableInteractive();
    }

    activate () {
        if (!this.active) {
            this.setClickEvents();
        }

    }

    remove () {
        this.setActive(false);
        this.setVisible(false);
        if(this.text) {
            this.text.destroy();
        }
    }

    setDimensions (width, height) {
        this.displayWidth = width;
        this.displayHeight = height;
    }

    setClickEvents () {
        this.active = true;
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

        return this.scene.add.text(this.x, this.y, text, style).setOrigin(0.5, 0.5);
    }
}
export default Button;

export interface IButton extends Phaser.GameObjects.Sprite {
    setClickEvents: () => void;
    hide: () => void;
    show: () => void;
}

export class Button extends Phaser.GameObjects.Sprite implements IButton {
    private params: Array<any>;
    private callback: Function;
    private text: Phaser.GameObjects.Text;
    private container: Phaser.GameObjects.Container;
    private overFrame: number;
    private downFrame: number;

    constructor(x: number, y: number, callback: Function, params: Array<any>, scene: Phaser.Scene, label: string = '', key: string = 'button', hover: number = 1, onDown: number = 2) {
        super(scene, x, y, key, 0);
        this.scene = scene;
        this.params = params;
        this.callback = callback;

        this.active = true;

        this.text = this.addText(label);
        this.text.copyPosition(this);

        this.container = this.scene.add.container(0, 0, [this, this.text]);

        this.overFrame = hover;
        this.downFrame = onDown;
        this.setClickEvents();
    }

    hide() {
        this.container.visible = false;
        this.disableInteractive();
        // this.visible = false;
    }

    show() {
        this.container.visible = true;
        this.setInteractive();
    }

    remove() {
        this.setActive(false);
        this.setVisible(false);
        if (this.text) {
            this.text.destroy();
        }
    }

    setClickEvents() {
        this.active = true;
        this.setInteractive();
        this.on('pointerover', () => this.setFrame(this.overFrame), this);
        this.on('pointerout', () => this.setFrame(0), this);
        this.on('pointerdown', () => {
            this.setFrame(this.downFrame);
            this.callback.apply(this.scene, this.params);
        }, this);
    }

    addText(text: string, style: Phaser.Types.GameObjects.Text.TextStyle = {
        fontSize: '18px', fontFamily: 'Arial', color: '#FFD700', align: 'center'
    }) {
        return this.scene.add.text(this.x, this.y, text, style).setOrigin(0.5, 0.5);
    }
}

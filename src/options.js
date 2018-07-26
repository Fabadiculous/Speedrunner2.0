import Config from './config';

class Options extends Phaser.Scene {
    constructor () {
        super({
            key: 'options',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('OPTIONS');
        menuUI.addBackBtn(this);
    }

    create () {
        this.defaultControls();
        this.displayControlsText();
    }

    defaultControls () {
        Config.controls.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        Config.controls.jump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        Config.controls.run = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        Config.controls.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        Config.controls.restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    displayControlsText () {
        let controlTextStyle = {
            font: '32px Arial',
            fill: '#000000',
            align: 'left'
        };
        this.controlsText = this.add.text(
            350,
            200,
            `
            Left: ${this.getKeyName(Config.controls.left)}
            Right: ${this.getKeyName(Config.controls.right)}
            Jump: ${this.getKeyName(Config.controls.jump)}
            Run: ${this.getKeyName(Config.controls.run)}
            Restart: ${this.getKeyName(Config.controls.restart)}
            `,
            controlTextStyle
        );
        this.controlsText.setOrigin(0.5);
    }

    getKeyName (key) {
        return Object.entries(Phaser.Input.Keyboard.KeyCodes).find(x => x[1] === key.keyCode)[0];
    }
}

export default Options;

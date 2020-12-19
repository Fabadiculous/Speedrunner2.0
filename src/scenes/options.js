import Config from '../config';

class Options extends Phaser.Scene {
    constructor() {
        super({
            key: 'options',
            plugins: ['InputPlugin']
        });
    }

    init() {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('OPTIONS');
        menuUI.addBackBtn(this);
    }

    create() {
        this.displayControlsText();
    }

    displayControlsText() {
        let controlTextStyle = {
            font: '32px Arial',
            fill: '#000000',
            align: 'left'
        };
        this.controlsText = this.add.text(
            350,
            200,
            this.controlsString(),
            controlTextStyle
        );
        this.controlsText.setOrigin(0.5);
    }

    controlsString() {
        let result = '';
        for (let [key, value] of Object.entries(Config.controls)) {
            result += `${key}: ${this.getKeyName(value)}\n`;
        }
        return result;
    }
    getKeyName(keyCode) {
        return Object.entries(Phaser.Input.Keyboard.KeyCodes).find(x => x[1] === keyCode)[0];
    }
}

export default Options;

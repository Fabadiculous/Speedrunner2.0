import Config from '../config';
import { UIScene } from './menuUI';

class Options extends Phaser.Scene {
    constructor() {
        super({
            key: 'options',
            plugins: ['InputPlugin']
        });
    }

    init() {
        let menuUI = this.scene.get('menuUI') as UIScene;
        menuUI.setTitle('OPTIONS');
        menuUI.showButton();
        menuUI.setScene(this);
    }

    create() {
        this.displayControlsText();
    }

    displayControlsText() {
        let controlTextStyle: Phaser.Types.GameObjects.Text.TextStyle = {
            font: '32px Arial',
            color: '#000000',
            align: 'left'
        };
        let controlsText: Phaser.GameObjects.Text = this.add.text(
            350,
            200,
            this.controlsString(),
            controlTextStyle
        ).setOrigin(0.5);
    }

    controlsString() {
        let result = '';
        for (let [key, value] of Object.entries(Config.controls)) {
            result += `${key}: ${this.getKeyName(value)}\n`;
        }
        return result;
    }
    getKeyName(keyCode: number) {
        return Object.entries(Phaser.Input.Keyboard.KeyCodes).find(x => x[1] === keyCode)[0];
    }
}

export default Options;

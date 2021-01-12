import { Button } from '../classes/Button';
import { UIScene } from './menuUI';

class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu',
            plugins: ['InputPlugin']
        });
    }

    init() {
        if (!this.scene.isActive('menuUI')) {
            this.scene.launch('menuUI', { title: 'SPEEDRUNNER', hasBackBtn: false, previousScene: this, currentScene: this });
        } else {
            let menuUI = this.scene.get('menuUI') as UIScene;
            menuUI.setTitle('SPEEDRUNNER');
            menuUI.hideButton();
            menuUI.setScene(this);
        }

    }

    create() {
        // Menu Buttons
        let play = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 - 100,
            this.nextScene,
            ['levelSelect'],
            this, 'Play'
        );

        let options = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2,
            this.nextScene,
            ['options'],
            this,
            'Options'
        );

        let help = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 + 100,
            this.nextScene,
            ['help'],
            this,
            'Help'
        );
    }

    nextScene(key: string) {
        this.scene.start(key);
    }

    update() {

    }
}

export default Menu;

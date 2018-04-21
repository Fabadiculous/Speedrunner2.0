import Button from './Button';

class Menu extends Phaser.Scene {
    constructor () {
        super({
            key: 'menu',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
    }

    create () {
        // Menu Buttons
        let play = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 - 100,
            this.nextScene,
            [ 'levelSelect' ],
            this
        );
        play.addText('Play');

        let options = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2,
            this.nextScene,
            [ 'options' ],
            this
        );
        options.addText('Options');

        let help = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 + 100,
            this.nextScene,
            [ 'help' ],
            this
        );
        help.addText('Help');
    }

    nextScene (key) {
        this.scene.start(key);
    }

    update () {

    }
}

export default Menu;

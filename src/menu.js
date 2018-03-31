import Button from './Button';

class Menu extends Phaser.Scene {
    constructor () {
        super({
            key: 'menu',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        // this.scene.bringToTop();
    }

    create () {
        this.registry.set('width', this.sys.game.config.width);
        this.registry.set('height', this.sys.game.config.height);

        let menuText = {
            x: this.registry.get('width') / 2,
            y: 0,
            text: 'SPEEDRUNNER',
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#FFD700',
                align: 'center'
            }
        };
        this.make.text(menuText).setOrigin(0.5, 0);

        let btnTextStyle = {
            fontSize: '18px',
            fontFamily: 'Arial',
            color: '#FFD700',
            align: 'center'
        };

        // Menu Buttons
        let play = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 - 100,
            this.nextScene,
            [ 'playGame' ],
            this
        );
        play.addText('Play', btnTextStyle);

        let options = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2,
            this.nextScene,
            [ 'options' ],
            this
        );
        options.addText('Play', btnTextStyle);

        let help = new Button(
            this.registry.get('width') / 2,
            this.registry.get('height') / 2 + 100,
            this.nextScene,
            [ 'help' ],
            this
        );
        help.addText('Help', btnTextStyle);
    }

    nextScene (key) {
        this.scene.start(key);
    }

    update () {

    }
}

export default Menu;

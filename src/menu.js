import Button from './Button';

class Menu extends Phaser.Scene {
    constructor () {
        super({
            key: 'menu',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        this.scene.bringToTop();
    }

    create () {
        const width = this.sys.game.config.width / 2;
        const height = this.sys.game.config.height / 2;
        let menuText = {
            x: this.sys.game.config.width / 2,
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
            width,
            height - 100,
            this.nextScene,
            [ 'playGame' ],
            this
        );
        play.addText('Play', btnTextStyle);

        let options = new Button(
            width,
            height,
            this.nextScene,
            [ 'playGame' ],
            this
        );
        options.addText('Play', btnTextStyle);

        let help = new Button(
            width,
            height + 100,
            this.nextScene,
            [ 'playGame' ],
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

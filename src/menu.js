import Button from './Button';

class Menu extends Phaser.Scene {
    constructor () {
        super({ key: 'menu' });
    }

    init () {
        this.scene.bringToTop();
    }

    create () {
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
        let button = new Button(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            this.playGame,
            this
        ).addText('Play', btnTextStyle);
    }

    playGame (context) {
        context.scene.start('playGame');
    }

    update () {

    }
}

export default Menu;

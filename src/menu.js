import Button from './Button';

class Menu extends Phaser.Scene {
    constructor () {
        super({ key: 'menu' });
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
        let play = new Button(
            width,
            height - 100,
            this.playGame,
            this
        );
        play.addText('Play', btnTextStyle);

        let options = new Button(
            width,
            height,
            this.playGame,
            this
        );
        options.addText('Play', btnTextStyle);

        let help = new Button(
            width,
            height + 100,
            this.playGame,
            this
        );
        help.addText('Play', btnTextStyle);
        console.log(help);
        // help.setDisplaySize(200, 100);
    }

    playGame (context) {
        context.scene.start('playGame');
    }

    update () {

    }
}

export default Menu;

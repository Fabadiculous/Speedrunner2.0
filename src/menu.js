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

        this.createButton(100, 100, function () { console.log('Test'); }, this);

        let button = new Button(200, 100, function () { console.log('Test2'); }, this);
    }

    update () {

    }

    createButton (x, y, callback, context, hover = 1, onDown = 2) {
        let button = context.add.image(x, y, 'button').setInteractive();
        button.on('pointerover', () => button.setFrame(hover));
        button.on('pointerout', () => button.setFrame(0));
        button.on('pointerdown', () => {
            button.setFrame(onDown);
            callback();
        });

        return button;
    }
}

export default Menu;

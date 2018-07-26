class PauseMenu extends Phaser.Scene {
    constructor () {
        super({
            key: 'pauseMenu',
            plugins: [ 'InputPlugin' ]
        });
    }

    create () {
        this.input.keyboard.on('keydown_P', () => {
            this.unpause();
        });
        let buttonConfig = {
            key: 'button',
            frame: 2
        };

        let menuTextStyle = {
            font: '24px Arial',
            color: '#ffffff',
            align: 'center'
        };
        let menu = this.add.nineslice(100, 100, 600, 400, buttonConfig, 2);
        let resume = this.add.text(menu.x + menu.displayWidth / 2, menu.y + menu.displayHeight / 4, 'Resume', menuTextStyle);
        resume.setInteractive();
        resume.setOrigin(0.5);
        resume.on('pointerdown', () => this.unpause());

        let returnToMenu = this.add.text(menu.x + menu.displayWidth / 2, menu.y + 3 * menu.displayHeight / 4, 'Return To Menu', menuTextStyle);
        returnToMenu.setInteractive();
        returnToMenu.setOrigin(0.5);
        returnToMenu.on('pointerdown', () => this.returnToMenu());
    }

    update () {

    }

    unpause () {
        this.scene.resume('playGame');
        this.scene.stop();
    }

    returnToMenu () {
        this.scene.stop();
        this.scene.stop('playGame');
        this.scene.start('menu');
        this.scene.launch('menuUI');
    }
}

export default PauseMenu;

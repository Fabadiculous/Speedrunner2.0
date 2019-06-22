class PauseMenu extends Phaser.Scene {
    constructor () {
        super({
            key: 'pauseMenu',
            plugins: [ 'InputPlugin' ]
        });
    }

    create () {
        this.input.keyboard.on('keydown-P', () => {
            this.unpause();
        });

        let menuTextStyle = {
            font: '24px Arial',
            color: '#ffffff',
            align: 'center'
        };

        let menuGraphic = this.add.graphics();
        menuGraphic.WIDTH = 300;
        menuGraphic.HEIGHT = 200;
        menuGraphic.setX(this.cameras.main.centerX);
        menuGraphic.setY(this.cameras.main.centerY);
        menuGraphic.fillStyle(0x3c00af, 1);
        menuGraphic.fillRoundedRect(-menuGraphic.WIDTH / 2, -menuGraphic.HEIGHT / 2,
            menuGraphic.WIDTH, menuGraphic.HEIGHT);
        
        
        let resume = this.add.text(menuGraphic.x, menuGraphic.y, 'Resume', menuTextStyle);
        resume.setInteractive();
        resume.setOrigin(0.5);
        resume.on('pointerdown', () => this.unpause());

        let returnToMenu = this.add.text(menuGraphic.x, menuGraphic.y + 50, 'Return To Menu', menuTextStyle);
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
        this.scene.stop('playGame');
        this.scene.launch('menuUI', { title: 'SPEEDRUNNER', backBtn: false });
        this.scene.start('menu');
        
    }
}

export default PauseMenu;

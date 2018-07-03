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
        let menu = this.add.nineslice(100, 100, 600, 400, 'button', 2);
        let resume = this.add.text(menu.x + menu.displayWidth / 2, menu.y + menu.displayHeight / 2, 'Resume');
        resume.setInteractive();
        resume.setOrigin(0.5);
        resume.on('pointerdown', () => this.unpause());
    }

    update () {

    }

    unpause () {
        this.scene.resume('playGame');
        this.scene.stop();
    }
}

export default PauseMenu;

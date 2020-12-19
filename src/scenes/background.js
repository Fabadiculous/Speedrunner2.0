import Config from '../config';

class Background extends Phaser.Scene {
    constructor() {
        super({
            key: 'background',
            plugins: []
        });
    }

    init() {
        this.scene.sendToBack();
    }

    create() {
        this.add.image(0, 0, 'sky').setOrigin(0);
        this.clouds = this.add.tileSprite(0, 0, Config.DEFAULT_WIDTH, Config.DEFAULT_HEIGHT, 'clouds').setOrigin(0);
    }

    update() {
        this.clouds.tilePositionX += 0.2;
    }
}

export default Background;

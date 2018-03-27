class Background extends Phaser.Scene {
    constructor () {
        super({ key: 'background'});
    }

    init () {
        this.scene.sendToBack();
    }

    create () {
        this.add.image(0, 0, 'sky').setOrigin(0);
        this.clouds = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'clouds').setOrigin(0);
    }

    update () {
        this.clouds.tilePositionX += 0.2;
    }
}

export default Background;

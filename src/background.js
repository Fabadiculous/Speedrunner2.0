class Background extends Phaser.Scene {
    constructor () {
        super({ key: 'background'});
    }

    create () {
        this.add.image(0, 0, 'sky').setOrigin(0);
        this.add.image(0, 0, 'clouds').setOrigin(0);
    }

    update () {

    }
}

export default Background;

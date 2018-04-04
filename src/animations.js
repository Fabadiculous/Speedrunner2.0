class CreateAnims extends Phaser.Scene {
    constructor () {
        super({
            key: 'createAnims',
            plugins: []
        });
    }

    create () {
        console.log('Creating animations');
        let playerConfig = {
            key: 'run',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 20,
            repeat: -1
        };

        this.anims.create(playerConfig);

        // End the Scene
        this.scene.remove('createAnims');
    }
}

export default CreateAnims;

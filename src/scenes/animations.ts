class CreateAnims extends Phaser.Scene {
    constructor() {
        super({
            key: 'createAnims',
            plugins: []
        });
    }

    create() {
        console.log('Creating animations');
        let playerConfig = {
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 13 }),
            frameRate: 20,
            repeat: -1
        };

        let coinConfig = {
            key: 'spin',
            frames: this.anims.generateFrameNumbers('coin', {}),
            frameRate: 20,
            yoyo: true,
            repeat: -1
        };

        let platformConfig = {
            key: 'hover',
            frames: this.anims.generateFrameNumbers('movingPlatform', {}),
            frameRate: 20,
            repeat: -1
        };

        let flyConfig = {
            key: 'fly',
            frames: this.anims.generateFrameNumbers('flyEnemy', {}),
            frameRate: 20,
            yoyo: true,
            repeat: -1
        };

        let snakeConfig = {
            key: 'move',
            frames: this.anims.generateFrameNumbers('snake', {}),
            frameRate: 2,
            repeat: -1
        };

        this.anims.create(playerConfig);
        this.anims.create(coinConfig);
        this.anims.create(platformConfig);
        this.anims.create(flyConfig);
        this.anims.create(snakeConfig);

        console.log('Animations Created');

        // End the Scene
        this.scene.remove('createAnims');
    }
}

export default CreateAnims;

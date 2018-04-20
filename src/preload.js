class Preload extends Phaser.Scene {
    constructor () {
        super({
            key: 'Prelaod',
            plugins: [ 'Loader' ]
        });
    }

    preload () {

        let progress = this.add.graphics();

        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xff0000, 1);
            progress.fillRect(0, 270, 800 * value, 60);
        });

        this.load.on('complete', () => progress.destroy());

        // Path for images and sprite sheets
        this.load.setPath('assets/images/');

        this.load.image([
            { key: 'clouds', file: 'Clouds.png'},
            { key: 'sky', file: 'Sky.png'},
            { key: 'spike', file: 'Spike.png'},
            { key: 'pauseMenu', file: 'PauseMenu.png'},
            { key: 'door', file: 'Door.png'}
        ]);

        this.load.spritesheet([
            { key: 'button', file: 'Button.png', config: {frameWidth: 200, frameHeight: 50} },
            { key: 'coin', file: 'Coin.png', config: {frameWidth: 16, frameHeight: 16} },
            { key: 'snake', file: 'Enemy.png', config: {frameWidth: 32, frameHeight: 32} },
            { key: 'flyEnemy', file: 'FlyingEnemy.png', config: {frameWidth: 25, frameHeight: 23} },
            { key: 'movingPlatform', file: 'MovingPlatform.png', config: {frameWidth: 64, frameHeight: 32} },
            { key: 'player', file: 'Player.png', config: {frameWidth: 16, frameHeight: 32} },
            { key: 'groundTiles', file: 'GroundTiles.png', config: {frameWidth: 64, frameHeight: 64} },
            { key: 'soundBtn', file: 'SoundButtons.png', config: {frameWidth: 64, frameHeight: 64} },
            { key: 'star', file: 'Stars.png', config: {frameWidth: 20, frameHeight: 20} },
            { key: 'lvlThumbnail', file: 'Thumbnail.png', config: {frameWidth: 64, frameHeight: 64} }
        ]);

        // Path for audio
        this.load.setPath('assets/sounds');

        this.load.audio('getStar', [ 'getStar.mp3', 'getStar.ogg' ]);

        // Path for levels
        this.load.setPath('assets/levels');
        this.load.tilemapTiledJSON('tutorial', 'tutorial.json');
        for (let i = 1; i < 10; i++) {
            this.load.tilemapTiledJSON(`level${i}`, `Level${i}.json`);
        }
    }

    create () {
        this.scene.launch('background');
        this.scene.launch('createAnims');
        this.scene.launch('loadLevels');
        this.scene.start('menu');
    }


}

export default Preload;

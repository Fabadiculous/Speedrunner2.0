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
        this.load.setPath('/assets/images/');


        this.load.image([
            { key: 'clouds', url: 'Clouds.png'},
            { key: 'sky', url: 'Sky.png'},
            { key: 'spike', url: 'Spike.png'},
            { key: 'pauseMenu', url: 'PauseMenu.png'},
            { key: 'door', url: 'Door.png'}
        ]);

        this.load.spritesheet([
            { key: 'button', url: 'Button.png', frameConfig: {frameWidth: 200, frameHeight: 50} },
            { key: 'coin', url: 'Coin.png', frameConfig: {frameWidth: 16, frameHeight: 16} },
            { key: 'snake', url: 'Enemy.png', frameConfig: {frameWidth: 32, frameHeight: 32} },
            { key: 'flyEnemy', url: 'FlyingEnemy.png', frameConfig: {frameWidth: 25, frameHeight: 23} },
            { key: 'movingPlatform', url: 'MovingPlatform.png', frameConfig: {frameWidth: 64, frameHeight: 32} },
            { key: 'player', url: 'Player.png', frameConfig: {frameWidth: 16, frameHeight: 32} },
            { key: 'groundTiles', url: 'GroundTiles.png', frameConfig: {frameWidth: 64, frameHeight: 64} },
            { key: 'soundBtn', url: 'SoundButtons.png', frameConfig: {frameWidth: 64, frameHeight: 64} },
            { key: 'star', url: 'Stars.png', frameConfig: {frameWidth: 20, frameHeight: 20} },
            { key: 'lvlThumbnail', url: 'Thumbnail.png', frameConfig: {frameWidth: 64, frameHeight: 64} }
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
        this.registry.set('width', this.sys.game.config.width);
        this.registry.set('height', this.sys.game.config.height);
        this.scene.launch('background');
        this.scene.launch('createAnims');
        this.scene.launch('loadLevels');
        this.scene.launch('menuUI', { title: 'SPEEDRUNNER', backBtn: false });
        this.scene.start('menu');
    }


}

export default Preload;

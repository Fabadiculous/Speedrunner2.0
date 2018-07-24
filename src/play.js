import Player from './Player';

class PlayGame extends Phaser.Scene {
    constructor () {
        super({
            key: 'playGame',
            plugins: [ 'InputPlugin' ]
        });
    }

    init (data) {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('');
        menuUI.removeBackBtn();
        this.level = data;
    }

    create () {
        let map = this.make.tilemap({ key: this.level.key });
        let tiles = map.addTilesetImage('groundTiles');
        this.layer = map.createStaticLayer('GroundLayer', tiles);
        map.setCollisionBetween(0, 22);

        let spikes = map.createFromObjects('Objects', 23, { key: 'spike' });
        spikes.forEach(spike => {
            let spikeTile = map.getTileAtWorldXY(spike.x, spike.y, false, this.cameras.main, this.layer);
            console.log(spikeTile);
            if (spikeTile) {
                console.log(spikeTile);
                spike.rotation = spikeTile.properties.angleRotation;
            }
            spike.rotation = 0;
        });
        map.createFromObjects('Objects', 24, { key: 'coin'});
        let spawn = map.createFromObjects('Objects', 25, { key: ''});
        map.createFromObjects('Objects', 26, { key: 'flyEnemy'});
        map.createFromObjects('Objects', 27, { key: 'snake'});
        map.createFromObjects('Objects', 28, { key: 'exit'});
        map.createFromObjects('Objects', 1, { key: 'movingPlatform' });

        this.input.keyboard.on('keydown_P', () => {
            this.scene.pause('playGame');
            this.scene.launch('pauseMenu');
        });
        console.log('spawn', spawn);
        let player = new Player(this, spawn.x, spawn.y);
    }
}

export default PlayGame;

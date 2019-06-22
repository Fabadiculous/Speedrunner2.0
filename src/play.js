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
        if (this.level > 10) {
            this.level = 0;
        }
    }

    create () {
        let map = this.make.tilemap({ key: this.level.key });
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.physics.world.setBoundsCollision();
        let tiles = map.addTilesetImage('groundTiles');
        let groundLayer = map.createStaticLayer('GroundLayer', tiles);
        groundLayer.setCollisionByProperty({collides: true});

        const debugGraphics = this.add.graphics().setAlpha(0.75);
        map.renderDebug(debugGraphics, {
            tileColor: null, // Color of non-colliding tiles
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
            faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        }, groundLayer);

        // let spikes = map.createFromObjects('Objects', 23, { key: 'spike' });
        // spikes.forEach(spike => {
        //     let spikeTile = map.getTileAtWorldXY(spike.x, spike.y, false, this.cameras.main, this.layer);
        //     console.log(spikeTile);
        //     if (spikeTile) {
        //         console.log(spikeTile);
        //         spike.rotation = spikeTile.properties.angleRotation;
        //     }
        //     spike.rotation = 0;
        // });
        
        // map.createFromObjects('Objects', 24, { key: 'coin'});
        let spawn = map.findObject('Objects', obj => obj.name === 'Spawn');

        // map.createFromObjects('Objects', 26, { key: 'flyEnemy'});
        // map.createFromObjects('Objects', 27, { key: 'snake'});
        // map.createFromObjects('Objects', 28, { key: 'exit'});
        // map.createFromObjects('Objects', 1, { key: 'movingPlatform' });

        this.input.keyboard.on('keydown-P', () => {
            this.scene.pause('playGame');
            this.scene.launch('pauseMenu');
        });

        let player = new Player(this, spawn.x, spawn.y);

        this.physics.collide(player, groundLayer);
        const camera = this.cameras.main;
        camera.startFollow(player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        
        // ///////DEBUG////////
        // this.scene.start('playGame', this.level++);
        // this.scene.stop('menuUI');
    }
}

export default PlayGame;

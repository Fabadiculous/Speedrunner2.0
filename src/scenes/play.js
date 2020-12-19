import Player from '../classes/Player';
import Config from '../config';

class PlayGame extends Phaser.Scene {
    constructor() {
        super({
            key: 'playGame'
        });
    }

    init(data) {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('');
        menuUI.removeBackBtn();
        this.level = data;
        if (this.level > 10) {
            this.level = 0;
        }
    }

    create() {
        let map = this.make.tilemap({ key: this.level.key });
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.physics.world.setBoundsCollision();
        let groundTiles = map.addTilesetImage('groundTiles');
        let groundLayer = map.createLayer('GroundLayer', groundTiles, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });

        if (Config.DEBUG) {
            const debugGraphics = this.add.graphics().setAlpha(0.75);
            map.renderDebug(debugGraphics, {
                tileColor: null, // Color of non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
                faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
            }, groundLayer);
        }

        // GID REFERENCE
        // SPIKE = 23
        // COIN = 24
        // Fly = 26
        // Snake = 27
        // 28 = exit
        // 1 = moving platyform
        let objects = map.createFromObjects('Objects', [
            { gid: 24, key: 'coin' },
            { gid: 23, key: 'spike' },
            { gid: 26, key: 'flyEnemy' },
            { gid: 27, key: 'snake' },
            { gid: 28, key: 'exit' },
            { gid: 1, key: 'movingPlatform' },
        ]);
        console.log(objects)



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

        let spawn = map.findObject('Objects', obj => obj.name === 'Spawn');

        this.input.keyboard.on('keydown-P', () => {
            this.scene.pause('playGame');
            this.scene.launch('pauseMenu');
        });

        this.player = new Player(this, spawn.x, spawn.y, Config.controls);

        this.physics.add.collider(this.player, groundLayer);
        const camera = this.cameras.main;
        camera.startFollow(this.player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    }

    update(time, delta) {
        this.player.update(time, delta);
    }
}

export default PlayGame;

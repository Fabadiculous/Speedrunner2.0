import Level from './Level';

class LoadLevels extends Phaser.Scene {
    constructor () {
        super({
            key: 'loadLevels',
            plugins: []
        });
    }

    create () {
        this.levels = [];
        let numLevels = this.cache.tilemap.entries.size;
        let keys = Object.keys(this.cache.tilemap.entries.entries);
        for (let i = 0; i < numLevels; i++) {
            this.levels[i] = new Level(keys[i], 5, 3, 3);
        }
        console.log(this.levels);
    }
}

export default LoadLevels;

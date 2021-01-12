import { Level, ILevel } from '../classes/Level';

type level = {
    starTime: number;
    devAllStarTime: number;
    devAnyStarTime: number;
}

class LoadLevels extends Phaser.Scene {
    private levels: ILevel[];

    constructor() {
        super({
            key: 'loadLevels',
            plugins: []
        });
    }

    create() {
        this.levels = [];

        // All the tilemaps loaded in the cache
        let map = this.cache.tilemap.entries;
        let numLevels = map.size;
        let data = map.entries;
        let keys = Object.keys(data);
        let defaultProps: level = {
            starTime: 30,
            devAllStarTime: null,
            devAnyStarTime: null
        };

        //
        for (let i = 0; i < numLevels; i++) {
            let properties = data[keys[i]].data.properties || defaultProps;
            this.levels[i] = new Level(keys[i], properties.starTime, properties.devAllStar, properties.devAnyTime);
            if (keys[i] === 'tutorial') {
                this.levels[i].locked = false;
            }
        }

        this.levels.sort((a, b) => {
            let keyA = a.key;
            let keyB = b.key;
            if (keyA < keyB) {
                return -1;
            }
            if (keyA > keyB) {
                return 1;
            }
            return 0;
        });
        console.log(this.levels);
        // Take 'tutorial' from end of list and at to front
        // This assumes all keys are 'level[number]' except tutorial
        this.levels.unshift(this.levels.pop());
        this.registry.set('levels', this.levels);
        this.scene.remove('loadLevels');
    }
}

export default LoadLevels;

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
        let map = this.cache.tilemap.entries;

        console.log(map);

        let numLevels = map.size;
        let data = map.entries;
        let keys = Object.keys(data);
        let defaultProps = {
            starTime: 30,
            devAllStarTime: null,
            devAnyStarTime: null
        };
        for (let i = 0; i < numLevels; i++) {
            let properties = data[keys[i]].data.properties || defaultProps;
            this.levels[i] = new Level(keys[i], properties.starTime, properties.devAllStar, properties.devAnyTime);
        }
        console.log(this.levels);
        this.levels.sort((a,b) => {
            let keyA = a.key;
            let keyB = b.key;
            if(keyA < keyB) {
                return -1;
            }
            if (keyA > keyB) {
                return 1;
            }
            return 0;
        });
        this.levels.unshift(this.levels.pop());
        this.registry.set('levels', this.levels);
        this.scene.remove('loadLevels');
    }
}

export default LoadLevels;

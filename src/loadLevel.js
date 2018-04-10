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
    }
}

export default LoadLevels;

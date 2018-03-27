class PlayGame extends Phaser.Scene {
    constructor () {
        super({ key: 'playGame'});
    }

    create () {
        this.map = this.make.tilemap({ key: 'tutorial' });

        let tiles = this.map.addTilesetImage('groundTiles');

        let layer = this.map.createStaticLayer('GroundLayer', tiles);
        console.log(layer);
    }
}

export default PlayGame;

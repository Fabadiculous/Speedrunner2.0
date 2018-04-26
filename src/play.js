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
        console.log(this.level);
    }

    create () {
        this.map = this.make.tilemap({ key: this.level.key });

        let tiles = this.map.addTilesetImage('groundTiles');

        let layer = this.map.createStaticLayer('GroundLayer', tiles);
        console.log(layer);
    }
}

export default PlayGame;

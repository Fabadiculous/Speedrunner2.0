class Menu extends Phaser.Scene {
    constructor () {
        super({ key: 'Menu' });
    }

    create () {
        this.map = this.make.tilemap({ key: 'tutorial' });

        let tiles = this.map.addTilesetImage('groundTiles');

        let layer = this.map.createStaticLayer('GroundLayer', tiles);
        console.log(layer);
    }

    update () {

    }
}

export default Menu;

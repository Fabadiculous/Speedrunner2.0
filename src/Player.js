class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        this.SPEED = 200;
    }

    update () {

    }

}

export default Player;

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        
        this.body.checkWorldBounds();
        this.XSPEED = 6.25; // Horizontal speed in tiles per second
        this.PEAKHEIGHT = 1.25; // Maximum height of a jump in tiles
        this.PEAKDISTANCE = 3; // The horizontal distance travelled to reach the peak of the jump
        this.PEAKTIME = this.XSPEED / this.JUMPHEIGHT; // Time to peak of jump in ms
        // Inital vertical velocity
        this.initialV = 2 * this.PEAKHEIGHT * this.XSPEED / this.PEAKDISTANCE;
        this.gravity = (-2 * this.PEAKHEIGHT * this.XSPEED * this.XSPEED) / (this.PEAKDISTANCE * this.PEAKDISTANCE);
        console.log('v0', this.initialV);
        console.log('gravity', this.gravity * 32);
        this.setGravityY(-this.gravity * 32);
    }

    update () {

    }

    jump () {
        
    }
}

export default Player;

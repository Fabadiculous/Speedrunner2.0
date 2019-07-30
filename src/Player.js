class Player extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, controls) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.IDLE = 14; // The frame of the idle player
        this.JUMP = 9; // The frame when the player jumps

        this.TILESIZE = 32; // Width of a tile in the map in pixels
        this.XSPEED = 5; // Horizontal speed in tiles per second
        this.PEAKHEIGHT = 1.5; // Maximum height of a jump in tiles
        this.PEAKDISTANCE = 3; // The horizontal distance travelled to reach the peak of the jump
        this.PEAKTIME = this.XSPEED / this.JUMPHEIGHT; // Time to peak of jump in ms
        // Inital vertical velocity
        this.initialV = 2 * this.PEAKHEIGHT * this.XSPEED / this.PEAKDISTANCE;
        this.gravity = (-2 * this.PEAKHEIGHT * this.XSPEED * this.XSPEED) / (this.PEAKDISTANCE * this.PEAKDISTANCE);

        scene.input.keyboard.addCapture(Object.values(controls));
        this.controls = scene.input.keyboard.addKeys(controls);
        this.setCollideWorldBounds(true);
        this.setGravityY(-this.gravity * this.TILESIZE);

        this.jumping = false;
    }

    update () {
        if (this.controls.right.isDown) {
            if (this.body.velocity.y === 0) {
                if (!this.anims.isPlaying) {
                    this.anims.play('run');
                }
            }
            this.setFlipX(false);
            if (this.controls.run.isDown) {
                this.setVelocityX(this.XSPEED * this.TILESIZE * 2);
            } else {
                this.setVelocityX(this.XSPEED * this.TILESIZE);
            }
        } else if (this.controls.left.isDown) {
            if (this.body.velocity.y === 0) {
            
                if (!this.anims.isPlaying) {
                    this.anims.play('run');
                }
           
            }
            this.setFlipX(true);
            if (this.controls.run.isDown) {
                this.setVelocityX(-this.XSPEED * this.TILESIZE * 2);
            } else {
                this.setVelocityX(-this.XSPEED * this.TILESIZE);
            }
        } else {
            this.setVelocityX(0);
            this.anims.stop();
            this.setFrame(this.IDLE);
        }

        if (this.controls.jump.isDown && this.body.onFloor()) {
            this.jump();
        }
    }

    jump () {
        if (!this.jumping) {
            this.jumping = true;
            this.anims.stop();
            this.setFrame(this.JUMP);
            this.setVelocityY(-this.initialV * this.TILESIZE);
        }
    }
}

export default Player;

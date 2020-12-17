class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, controls) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.IDLE = 14; // The frame of the idle player
        this.JUMP = 9; // The frame when the player jumps

        this.TILESIZE = 32; // Width of a tile in the map in pixels
        this.XSPEED = Phaser.Math.GetSpeed(5 * this.TILESIZE, 1); // Horizontal speed in tiles per second
        this.PEAKHEIGHT = 1.5; // Maximum height of a jump in tiles
        this.PEAKDISTANCE = 3; // The horizontal distance travelled to reach the peak of the jump
        this.PEAKTIME = this.XSPEED / this.JUMPHEIGHT; // Time to peak of jump in ms
        // Inital vertical velocity
        this.initialV = 2 * this.PEAKHEIGHT * this.XSPEED / this.PEAKDISTANCE;
        this.gravity = (-2 * this.PEAKHEIGHT * this.XSPEED * this.XSPEED) / (this.PEAKDISTANCE * this.PEAKDISTANCE);

        scene.input.keyboard.addCapture(Object.values(controls));
        this.controls = scene.input.keyboard.addKeys(controls);
        this.setCollideWorldBounds(true);
        this.body.setSize(14, 32);
        this.body.setOffset(-1, 0);

        // this.setGravityY(this.gravity * this.TILESIZE);
        this.setGravityY(100);
        this.jumping = false;
    }

    update(time, delta) {
        if (this.controls.run.isDown) {
            this.running = 0.25;
        } else {
            this.running = 0;
        }

        if (this.controls.right.isDown) {
            this.setFlipX(false);
            this.body.velocity.x = this.XSPEED + this.running;

            this.x += this.body.velocity.x * delta;
            if (this.body.velocity.y === 0) {
                if (!this.anims.isPlaying) {
                    this.play('run');
                }
            }
        } else if (this.controls.left.isDown) {
            this.setFlipX(true);

            this.body.velocity.x = -(this.XSPEED + this.running);
            this.x += this.body.velocity.x * delta;
            if (this.body.velocity.y === 0) {
                if (!this.anims.isPlaying) {
                    this.anims.play('run');
                }
            }
        } else {
            this.setVelocityX(0);
        }

        if (this.body.velocity.x === 0) {
            this.anims.stop();
            this.setFrame(this.IDLE);
        }

        if (this.controls.jump.isDown /* && this.body.onFloor() */) {
            this.jump(delta);
        }
    }

    jump(delta) {
        if (!this.jumping) {
            this.jumping = true;
            this.anims.stop();
            this.setFrame(this.JUMP);
            this.body.velocity.y = (-this.initialV * this.TILESIZE);
            this.y += this.body.velocity.y * delta;
        } else {
            this.jumping = false;
        }
    }
}

export default Player;

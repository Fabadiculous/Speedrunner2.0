class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, controls) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.IDLE_FRAME = 14; // The frame of the idle player
        this.JUMP_FRAME = 9; // The frame when the player jumps
        this.MAX_NUM_JUMPS = 2;
        this.TILESIZE = 32; // Width of a tile in the map in pixels
        this.GRAVITY = 512;
        this.XSPEED = Phaser.Math.GetSpeed(5 * this.TILESIZE, 1); // Horizontal speed in tiles per second


        scene.input.keyboard.addCapture(Object.values(controls));
        this.controls = scene.input.keyboard.addKeys(controls);

        this.setCollideWorldBounds(true);
        this.body.setSize(10, 32);

        this.setGravityY(this.GRAVITY);
        this.jumpVelocity = -200;

        this.numJumps = this.MAX_NUM_JUMPS;
        this.jumping = false;

        this.controls.jump.on('down', () => {
            if (this.numJumps > 0) {
                this.setVelocityY(this.jumpVelocity)
                this.jumping = true;
                this.anims.stop();
                this.setFrame(this.JUMP_FRAME);
            }
        });

        this.controls.jump.on('up', () => {
            if (this.jumping) {
                this.numJumps--;
                this.body.velocity.y *= 0.5;
                this.jumping = false;
            }
        });
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
            this.setFrame(this.IDLE_FRAME);
        }

        if (this.body.onFloor()) {
            this.jumping = false;
            this.numJumps = this.MAX_NUM_JUMPS;
        }
    }


}
export default Player;

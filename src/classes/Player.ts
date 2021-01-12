export interface IPlayer extends Phaser.Physics.Arcade.Sprite {

}

export class Player extends Phaser.Physics.Arcade.Sprite {
    IDLE_FRAME = 14; // The frame of the idle player
    JUMP_FRAME = 9; // The frame when the player jumps
    MAX_NUM_JUMPS = 2;
    TILESIZE = 32; // Width of a tile in the map in pixels
    GRAVITY = 512;
    JUMP_VELOCITY = -200;
    XSPEED: number;
    controls: any;
    numJumps: number;
    jumping: boolean;
    runBoost: number;

    constructor(scene: Phaser.Scene, x: number, y: number, controls: any) {
        super(scene, x, y, 'player', 0);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.XSPEED = Phaser.Math.GetSpeed(5 * this.TILESIZE, 1); // Horizontal speed in tiles per second


        scene.input.keyboard.addCapture(Object.values(controls));
        this.controls = scene.input.keyboard.addKeys(controls);

        this.setCollideWorldBounds(true);
        this.body.setSize(10, 32);

        this.setGravityY(this.GRAVITY);

        this.numJumps = this.MAX_NUM_JUMPS;
        this.jumping = false;

        this.controls.jump.on('down', () => {
            if (this.numJumps > 0) {
                this.setVelocityY(this.JUMP_VELOCITY)
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

    update(time: any, delta: any) {
        if (this.controls.run.isDown) {
            this.runBoost = 0.25;
        } else {
            this.runBoost = 0;
        }

        if (this.controls.right.isDown) {
            this.setFlipX(false);
            this.body.velocity.x = this.XSPEED + this.runBoost;

            this.x += this.body.velocity.x * delta;
            if (this.body.velocity.y === 0) {
                if (!this.anims.isPlaying) {
                    this.play('run');
                }
            }
        } else if (this.controls.left.isDown) {
            this.setFlipX(true);

            this.body.velocity.x = -(this.XSPEED + this.runBoost);
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

        if (this.body.touching.down) {
            this.jumping = false;
            this.numJumps = this.MAX_NUM_JUMPS;
        }
    }


}
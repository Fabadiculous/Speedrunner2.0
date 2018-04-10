import Button from './Button';

class Help extends Phaser.Scene {
    constructor () {
        super({
            key: 'help',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        // this.scene.bringToTop();
    }

    create () {
        let backBtn = new Button(0, 0, this.nextScene, [ 'menu' ], this);
        backBtn.addText('Back');

        let helpTitle = {
            x: this.registry.get('width') / 2,
            y: 0,
            text: 'HELP',
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#FFD700',
                align: 'center'
            }
        };
        this.make.text(helpTitle).setOrigin(0.5, 0);

        let helpText = {
            x: this.registry.get('width') / 2,
            y: this.registry.get('height') / 2 - 100,
            text: 'Go Fast. Kill Enemies. Collect Coins. Earn 3 stars!',
            style: {
                fontSize: '20px',
                fontFamily: 'Arial',
                color: '#000000',
                align: 'center'
            }
        };
        this.make.text(helpText).setOrigin(0.5);

        this.add.sprite(this.registry.get('width') / 2 + 150, this.registry.get('height') / 2 - 70, 'star');
        this.add.sprite(this.registry.get('width') / 2 + 100, this.registry.get('height') / 2 - 70, 'coin').play('spin');
        this.add.sprite(this.registry.get('width') / 2 + 50, this.registry.get('height') / 2 - 70, 'flyEnemy').play('fly');
        this.add.sprite(this.registry.get('width') / 2, this.registry.get('height') / 2 - 70, 'snake').play('move');
        this.add.sprite(this.registry.get('width') / 2 - 50, this.registry.get('height') / 2 - 70, 'player').play('run');

    }
}

export default Help;

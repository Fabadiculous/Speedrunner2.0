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
        let helpText = {
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
        this.make.text(helpText).setOrigin(0.5, 0);


    }
}

export default Help;

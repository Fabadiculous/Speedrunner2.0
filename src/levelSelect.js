import Button from './Button';

class LevelSelect extends Phaser.Scene {
    constructor () {
        super({
            key: 'levelSelect',
            plugins: [ 'InputPlugin' ]
        });
    }

    create () {
        let menu = this.scene.get('menu');
        let backBtn = new Button(0, 0, menu.nextScene, [ 'menu' ], this, 'Back');
        backBtn.setOrigin(0);
        backBtn.setDimensions(50,50);
    //    backBtn.addText('Back');


        let lvlSelectTitle = {
            x: this.registry.get('width') / 2,
            y: 0,
            text: 'LEVEL SELECT',
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#FFD700',
                align: 'center'
            }
        };
        this.make.text(lvlSelectTitle).setOrigin(0.5, 0);
    }
}

export default LevelSelect;

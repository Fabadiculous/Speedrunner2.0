// import Button from './Button';

class LevelSelect extends Phaser.Scene {
    constructor () {
        super({
            key: 'levelSelect',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('LEVEL SELECT');
        menuUI.addBackBtn(this);
    }

    create () {

    }
}

export default LevelSelect;

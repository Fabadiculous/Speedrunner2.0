class Options extends Phaser.Scene {
    constructor () {
        super({
            key: 'options',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        let menuUI = this.scene.get('menuUI');
        menuUI.setTitle('OPTIONS');
        menuUI.addBackBtn(this);
    }

    create () {

    }
}

export default Options;

class Menu extends Phaser.Scene {
    constructor () {
        super({ key: 'menu' });
    }

    create () {
        this.scene.start('playGame');
    }

    update () {

    }
}

export default Menu;

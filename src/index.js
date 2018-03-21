import 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#55CC55',
    pixelArt: true,
    parent: 'gameDiv',
    scene: [ ],
    title: 'Speedrunner 2.0',
    banner: {
        text: '#191970',
        background: [
            '#555555',
            '#20B2AA',
            '#9ACD32',
            '#B8860B',
            '#F5F5DC'
        ],
        hidePhaser: true
    }
};

/* eslint-disable no-unused-vars */
const game = new Phaser.Game(config);

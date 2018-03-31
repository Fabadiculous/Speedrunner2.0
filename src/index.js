import 'phaser';

import Preload from './preload';
import Menu from './menu';
import PlayGame from './play';
import Background from './background';
import Help from './help';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87CEEB',
    pixelArt: true,
    parent: 'gameDiv',
    scene: [ Preload, Menu, PlayGame, Background, Help ],
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

import 'phaser';

import Preload from './preload';
import Menu from './menu';
import PlayGame from './play';
import Background from './background';
import Help from './help';
import CreateAnims from './animations';
import LoadLevels from './loadLevel';
import LevelSelect from './levelSelect';
import MenuUI from './menuUI';
import Options from './options';
import Config from './config';
import PauseMenu from './pauseMenu';

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        backgroundColor: '#87CEEB',
        pixelArt: true,
        scene: [ Preload, Menu, PlayGame, Background, Help, CreateAnims, LoadLevels,
            LevelSelect, MenuUI, Options, PauseMenu ],
        scale: {
            parent: 'game-div',
            mode: Phaser.Scale.FIT,
            width: Config.DEFAULT_WIDTH,
            height: Config.DEFAULT_HEIGHT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        title: 'Speedrunner 2.0',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 60},
                debug: true
            }
        },
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

    new Phaser.Game(config);
};

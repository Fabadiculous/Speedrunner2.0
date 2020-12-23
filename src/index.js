import 'phaser';

import Preload from './scenes/preload';
import Menu from './scenes/menu';
import PlayGame from './scenes/play';
import Background from './scenes/background';
import Help from './scenes/help';
import CreateAnims from './scenes/animations';
import LoadLevels from './scenes/loadLevel';
import LevelSelect from './scenes/levelSelect';
import MenuUI from './scenes/menuUI';
import Options from './scenes/options';
import Config from './config';
import PauseMenu from './scenes/pauseMenu';

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        backgroundColor: '#87CEEB',
        pixelArt: true,
        scene: [Preload, Menu, PlayGame, Background, Help, CreateAnims, LoadLevels,
            LevelSelect, MenuUI, Options, PauseMenu],
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
                // gravity: { y: 60 },
                debug: Config.DEBUG
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

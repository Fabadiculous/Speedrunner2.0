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

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: Config.DEFAULT_WIDTH,
        height: Config.DEFAULT_HEIGHT,
        backgroundColor: '#87CEEB',
        pixelArt: true,
        parent: 'gameDiv',
        scene: [ Preload, Menu, PlayGame, Background, Help, CreateAnims, LoadLevels,
            LevelSelect, MenuUI, Options ],
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

    const game = new Phaser.Game(config);
    resize();
    window.addEventListener('resize', resize, false);

    function resize () {
        let canvas = document.querySelector(`#${game.config.parent} canvas`);
        console.log(canvas);
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let windowRatio = windowWidth / windowHeight;
        let gameRatio = game.config.width / game.config.height;
        if(windowRatio < gameRatio) {
            canvas.style.width = `${windowWidth}px`;
            canvas.style.height = `${windowHeight / gameRatio}px`;
        } else{
            canvas.style.width = `${windowHeight * gameRatio}px`;
            canvas.style.height = `${windowHeight}px`;
        }
    }
};

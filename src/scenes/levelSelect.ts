import { UIScene } from './menuUI';
import { ILevel } from '../classes/Level';

class LevelSelect extends Phaser.Scene {
    helpText: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: 'levelSelect',
            plugins: ['InputPlugin']
        });
    }

    init() {
        let menuUI = this.scene.get('menuUI') as UIScene;
        menuUI.setTitle('LEVEL SELECT');
        menuUI.showButton();
        menuUI.setScene(this);
    }

    create() {
        let helpTxtStyle = {
            font: '16px Arial',
            color: '#000000',
            align: 'center'
        };

        this.helpText = this.add.text(
            this.registry.get('width') / 2,
            this.registry.get('height') - 100,
            'Hover for level information',
            helpTxtStyle
        ).setOrigin(0.5);

        this.generatelevelGrid();
    }

    generatelevelGrid() {
        let levels = this.registry.get('levels');
        let thumbnailDim = 64;
        let columns = 5;
        let rows = 2;
        let spacing = 50;

        let rowlength = thumbnailDim * columns + spacing * (columns - 1);
        let sideMargin = (this.registry.get('width') - rowlength) / 2;

        let colHeight = thumbnailDim * rows + spacing * (rows - 1);
        let topMargin = (this.registry.get('height') / 2 - colHeight);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let lvlNum: number = i * columns + j;
                levels[lvlNum].num = lvlNum;
                let currentThumbnail = this.createThumbnail(
                    sideMargin + j * (thumbnailDim + spacing) + thumbnailDim / 2,
                    topMargin + i * (thumbnailDim + spacing) + thumbnailDim / 2,
                    `${lvlNum + 1}`,
                    levels[lvlNum]
                );

                if (levels[lvlNum].locked) {
                    currentThumbnail.setFrame(1);
                } else {
                    currentThumbnail.setFrame(0);
                }
            }
        }
    }

    createThumbnail(x: number, y: number, text: string, level: ILevel) {
        let thumbnail = this.add.sprite(x, y, 'lvlThumbnail');
        thumbnail.setFrame(0);

        let lvlText = this.add.text(thumbnail.x, thumbnail.y, text);
        lvlText.setOrigin(0.5);
        thumbnail.setInteractive();

        thumbnail.on('pointerdown', () => {
            this.playGame(level);
        });

        thumbnail.on('pointerover', () => {
            this.displayLvlInfo(level);
        });

        thumbnail.on('pointerout', () => {
            this.clearLvlInfo();
        });

        return thumbnail;
    }

    playGame(level: ILevel) {
        if (!level.locked) {
            this.scene.start('playGame', level);
            // this.scene.stop('menuUI');
            this.scene.sleep('menuUI');
        }
    }

    displayLvlInfo(level: ILevel) {
        this.helpText.setText(`
            Level: ${level.key}
            Star Time: ${level.starTime}
            Dev Time (No Stars): ${level.devNoStar}
            Your Best Time (Any Star Time): ${level.playerAnyTime}
            Dev Time (All Stars): ${level.devAllStar}
            Your Best Time (All Stars): ${level.playerStarTime}
            `);
    }

    clearLvlInfo() {
        this.helpText.setText('Hover for level information');
    }
}

export default LevelSelect;

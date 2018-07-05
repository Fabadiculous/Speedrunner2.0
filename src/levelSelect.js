// import Button from './Button';
// import createButton from './createButton';

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
        this.helpTxtStyle = {
            font: '16px Arial',
            color: '#000000',
            align: 'center'
        };

        this.helpTxt = this.add.text(
            this.registry.get('width') / 2,
            this.registry.get('height') - 100,
            'Hover for level information',
            this.helpTxtStyle
        );
        this.helpTxt.setOrigin(0.5);

        this.generatelevelGrid();
    }

    generatelevelGrid () {
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
                let lvlNum = i * columns + j;

                let currentThumbnail = this.createThumbnail(
                    sideMargin + j * (thumbnailDim + spacing) + thumbnailDim / 2,
                    topMargin + i * (thumbnailDim + spacing) + thumbnailDim / 2,
                    lvlNum + 1,
                    this.playGame,
                    [ levels[lvlNum] ],
                    this
                );

                if (levels[lvlNum].locked) {
                    currentThumbnail.setFrame(1);
                } else {
                    currentThumbnail.setFrame(0);
                }
            }
        }
    }

    createThumbnail (x, y, text, callback, args, context) {
        let thumbnail = this.add.sprite(x, y, 'lvlThumbnail');
        thumbnail.setFrame(0);

        let lvlText = this.add.text(thumbnail.x, thumbnail.y, text);
        lvlText.setOrigin(0.5);
        thumbnail.setInteractive();

        thumbnail.on('pointerdown', () => {
            callback.apply(context, args);
        });

        thumbnail.on('pointerover', () => {
            // In this case the args passed in is a Level object
            // It is an array. This argument expects a level object not
            // a single size array, so just pass the forst element
            this.displayLvlInfo(args[0]);
        });

        thumbnail.on('pointerout', () => {
            this.clearLvlInfo();
        });

        return thumbnail;
    }

    playGame (level) {
        if (!level.locked) {
            this.scene.start('playGame', level);
            this.scene.stop('menuUI');
        }
    }

    displayLvlInfo (level) {
        console.log(level);
        this.helpTxt.setText(`
            Level: ${level.key}\n
            Star Time: ${level.starTime}
            Dev Time (No Stars): ${level.devNoStar}
            Dev Time (All Stars): ${level.devAllStar}
            Your Best: ${level}
            `);
    }

    clearLvlInfo () {
        this.helpTxt.setText('Hover for level information');
    }
}

export default LevelSelect;

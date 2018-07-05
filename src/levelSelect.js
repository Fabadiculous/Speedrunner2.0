import Button from './Button';
import createButton from './createButton';

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


        // let test = this.add.sprite(100, 500, 'button');
        // test.setFrame(1);
        //
        // let buttonConfig = { key: 'button', frame: 1 };
        // this.add.nineslice(400, 400, 200, 50, buttonConfig, 0);
        // createButton(500, 500, 100, 50, 0, 'button', 'test', this);
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
                let currentThumbnail = new Button(
                    sideMargin + j * (thumbnailDim + spacing) + thumbnailDim / 2,
                    topMargin + i * (thumbnailDim + spacing) + thumbnailDim / 2,
                    this.playGame,
                    [ levels[lvlNum] ],
                    this,
                    lvlNum + 1,
                    'lvlThumbnail',
                    0,
                    0
                );
                if (levels[lvlNum].locked) {
                    currentThumbnail.setFrame(1);
                    currentThumbnail.deactivate();
                } else {
                    currentThumbnail.setFrame(0);
                    currentThumbnail.activate();
                }
            }
        }
    }

    playGame (level) {
        this.scene.start('playGame', level);
        this.scene.stop('menuUI');
    }
}

export default LevelSelect;

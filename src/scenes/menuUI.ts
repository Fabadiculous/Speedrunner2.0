import { Button, IButton } from '../classes/Button';

export interface UIScene extends Phaser.Scene {
    setTitle: (title: string) => void;
    hideTitle: () => void;
    showButton: () => void;
    hideButton: () => void;
    setScene: (scene: Phaser.Scene) => void;
}

export class MenuUI extends Phaser.Scene implements UIScene {
    private titleText: Phaser.GameObjects.Text;
    private button: IButton;
    private hasBackBtn: boolean;
    // previousScene: Phaser.Scene;
    private currentScene: Phaser.Scene;

    constructor() {
        super({
            key: 'menuUI',
            plugins: ['InputPlugin']
        });
        this.hasBackBtn = false; // Whether the scene should show a back button or not
        this.currentScene = this;
        // this.previousScene = this;
    }

    init(data: any) {
        this.scene.bringToTop();
        if (data.title) {
            this.setTitle(data.title);
        }
        this.hasBackBtn = data.hasBackBtn || false;
        this.currentScene = data.currentScene || this;
        // this.previousScene = data.previousScene || this;
    }

    create() {
        this.button = new Button(50, 25, this.backToMenu, [], this, 'Back');
        this.button.setDisplaySize(100, 50);
        if (this.hasBackBtn) {
            this.showButton();
        } else {
            this.hideButton();
        }
    }

    private backToMenu() {
        console.log(this.currentScene);
        this.currentScene.scene.stop();
        console.log(this.currentScene)
        this.scene.launch('menu');
        this.setTitle('SPEEDRUNNER');
        this.scene.bringToTop();
    }

    public setTitle(title: string) {
        if (!this.titleText) {
            let titleConfig: Phaser.Types.GameObjects.Text.TextConfig = {
                x: this.registry.get('width') / 2,
                y: 0,
                text: title,
                style: {
                    fontSize: '64px',
                    fontFamily: 'Arial',
                    color: '#FFD700',
                    align: 'center'
                }
            };
            this.titleText = this.make.text(titleConfig).setOrigin(0.5, 0);
        } else {
            this.titleText.visible = true;
            this.titleText.setText(title);
        }
    }

    public hideTitle() {
        this.titleText.visible = false;
    }

    public hideButton() {
        this.button.hide();
    }

    public showButton() {
        this.button.show();
    }

    public setScene(scene: Phaser.Scene) {
        this.currentScene = scene;
    }
}

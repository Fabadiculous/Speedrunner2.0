let utils = {};

utils.createButton = function (x, y, callback, context, hover = 1, onDown = 2) {
    let button = context.add.image(x, y, 'button').setInteractive();
    button.on('pointerover', () => button.setFrame(hover));
    button.on('pointerout', () => button.setFrame(0));
    button.on('pointerdown', () => {
        button.setFrame(onDown);
        callback();
    });

    return button;
};

export default utils;

export default function createButton (x,y, width, height, borderWidth, key, text, context) {
    console.log('create a button', context);
    let button = context.add.nineslice(x, y, width, height, key, borderWidth);
    let textStyle = {
        font: `${button.displayHeight * 0.8}px Arial`,
        color: '#ffffff',
        align: 'center'
    };
    let btnText = context.add.text(
        button.x + button.displayWidth / 2,
        button.y + button.displayHeight / 2,
        text,
        textStyle
    );
    btnText.setOrigin(0.5);
}

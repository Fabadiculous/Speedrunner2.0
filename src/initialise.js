import Config from './config';

function initialise (game) {
    function resize () {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let scale = Math.min(w / Config.DEFAULT_WIDTH, h / Config.DEFAULT_HEIGHT);

        // game.canvas.setAttribute('style',
        //     ' -ms-transform: scale(' + scale + '); -webkit-transform: scale3d(' + scale + ', 1);' +
        //     ' -moz-transform: scale(' + scale + '); -o-transform: scale(' + scale + '); transform: scale(' + scale + ');' +
        //     ' transform-origin: top left;'
        // );

        let width = w / scale;
        let height = h / scale;
        game.resize(width, height);
        console.log(game.scene.scenes);
        game.scene.scenes.forEach(function (scene) {
            console.log(scene);

            if(scene.cameras.main) {
                scene.cameras.main.setViewport(0, 0, width, height);
            }

        });
    }

    window.addEventListener('resize', resize);
    if (game.isBooted) {
        console.log(game.scene.scenes);
        resize();
    } else {
        game.events.once('boot', resize);
    }
}

export default initialise;

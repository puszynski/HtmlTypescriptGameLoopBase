import { Human } from './models/human.js';
import { GameMap } from './models/gameMap.js';
class GameLooper {
    constructor() {
        this.Render = () => {
            this.ctx.clearRect(0, 0, 1200, 800);
            this.gameMap.draw(this.ctx); //todo draw map once per 60 fps (or more, dont clean it every time)
            this.gameObjects.forEach((item) => { item.draw(this.ctx); });
            requestAnimationFrame(this.Render); //gameLoop
        };
        this.canvas = document.getElementById('gameCanvas');
        ;
        this.ctx = this.canvas.getContext("2d");
        this.fpsInfo = document.getElementById('fps');
        this.fpsInfo.innerText = 'fps: loading';
        // set the canvas origin (0,0) to center canvas
        // All coordinates to the left of center canvas are negative
        // All coordinates below center canvas are negative
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.gameMap = new GameMap();
        this.gameObjects = [new Human(200, 200)];
        this.Render();
    }
}
new GameLooper();

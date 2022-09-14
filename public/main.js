import { Human } from './models/human.js';
import { GameMap } from './models/gameMap.js';
import { WorldData } from './models/worldData.js';
class GameLooper {
    constructor() {
        this.Render = () => {
            this.gameCtx.clearRect(0, 0, 1200, 800);
            this.worldData.UpdateWorldTime();
            this.worldData.DisplayData(this.worldDataDisplayer);
            //todo if - change only when something in bg changes
            this.gameMap.draw(this.backgroundCtx); //todo draw map once per 60 fps (or more, dont clean it every time)
            this.gameObjects.forEach((item) => { item.draw(this.gameCtx); });
            requestAnimationFrame(this.Render); //gameLoop
        };
        this.backgroundCanvas = document.getElementById('backgoundCanvas');
        this.backgroundCtx = this.backgroundCanvas.getContext("2d");
        this.shodowCanvas = document.getElementById('shodowCanvas');
        this.shodowCtx = this.shodowCanvas.getContext("2d");
        this.gameCanvas = document.getElementById('gameCanvas');
        this.gameCtx = this.gameCanvas.getContext("2d");
        // set the canvas origin (0,0) to center canvas
        // All coordinates to the left of center canvas are negative
        // All coordinates below center canvas are negative
        this.backgroundCtx.translate(this.gameCanvas.width / 2, this.gameCanvas.height / 2);
        this.shodowCtx.translate(this.gameCanvas.width / 2, this.gameCanvas.height / 2);
        this.gameCtx.translate(this.gameCanvas.width / 2, this.gameCanvas.height / 2);
        this.worldData = new WorldData();
        this.worldDataDisplayer = document.getElementById('worldData');
        this.gameMap = new GameMap();
        this.gameObjects = [new Human(0, 0), new Human(50, 0), new Human(100, 0), new Human(150, 0)];
        this.Render();
    }
}
new GameLooper();

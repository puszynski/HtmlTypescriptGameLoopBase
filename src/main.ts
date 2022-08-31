import { Human } from './models/human.js';
import { GameMap } from './models/gameMap.js'
import { IDrawable } from './interfaces/IDrawable.js';

class GameLooper {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private fpsInfo: HTMLElement;

    private gameMap: IDrawable;
    private gameObjects: IDrawable[];

    constructor() {
        this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        this.fpsInfo = document.getElementById('fps') as HTMLElement;
        this.fpsInfo.innerText = 'fps: loading';

        // set the canvas origin (0,0) to center canvas
        // All coordinates to the left of center canvas are negative
        // All coordinates below center canvas are negative
        this.ctx.translate(this.canvas.width/2, this.canvas.height/2);

        this.gameMap = new GameMap();
        this.gameObjects = [new Human(200,200)];
        this.Render();
    }

    private Render = () => {
        this.ctx.clearRect(0,0,1200,800);
        this.gameMap.draw(this.ctx);//todo draw map once per 60 fps (or more, dont clean it every time)
        this.gameObjects.forEach( (item) => { item.draw(this.ctx)});

        requestAnimationFrame(this.Render) //gameLoop
    }
}

new GameLooper();
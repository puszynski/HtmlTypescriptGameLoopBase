import { Human } from './models/human.js';
import { GameMap } from './models/gameMap.js'
import { IDrawable } from './interfaces/IDrawable.js';

class GameLooper {
    private backgroundCanvas: HTMLCanvasElement;
    private backgroundCtx: CanvasRenderingContext2D;

    private shodowCanvas: HTMLCanvasElement;
    private shodowCtx: CanvasRenderingContext2D;

    private gameCanvas: HTMLCanvasElement;
    private gameCtx: CanvasRenderingContext2D;

    private gameMap: IDrawable;
    private gameObjects: IDrawable[];

    constructor() {
        this.backgroundCanvas = document.getElementById('backgroundCnvas') as HTMLCanvasElement;
        this.backgroundCtx = this.backgroundCanvas.getContext("2d") as CanvasRenderingContext2D;

        this.shodowCanvas = document.getElementById('backgroundCnvas') as HTMLCanvasElement;
        this.shodowCtx = this.shodowCanvas.getContext("2d") as CanvasRenderingContext2D;

        this.gameCanvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        this.gameCtx = this.gameCanvas.getContext("2d") as CanvasRenderingContext2D;

        // set the canvas origin (0,0) to center canvas
        // All coordinates to the left of center canvas are negative
        // All coordinates below center canvas are negative
        this.backgroundCtx.translate(this.gameCanvas.width/2, this.gameCanvas.height/2);
        this.shodowCtx.translate(this.gameCanvas.width/2, this.gameCanvas.height/2);
        this.gameCtx.translate(this.gameCanvas.width/2, this.gameCanvas.height/2);

        this.gameMap = new GameMap();
        this.gameObjects = [new Human(200,200)];
        this.Render();
    }

    private Render = () => {
        this.gameCtx.clearRect(0,0,1200,800);

        //todo if - change only when something in bg changes
        this.gameMap.draw(this.backgroundCtx);//todo draw map once per 60 fps (or more, dont clean it every time)
        
        this.gameObjects.forEach( (item) => { item.draw(this.gameCtx)});

        requestAnimationFrame(this.Render) //gameLoop
    }
}

new GameLooper();
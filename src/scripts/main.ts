class GameLooper {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private changePosition: number = 1;

    constructor() {
        this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        this.Render();
    }

    public Render = () => {
        this.ctx.beginPath();
        this.changePosition++;
        this.ctx.rect(20 + this.changePosition, 40, 50, 50);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.arc(240, 160, 20, 0, Math.PI*2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(160, 10, 100, 40);
        this.ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        this.ctx.stroke();
        this.ctx.closePath();

        requestAnimationFrame(this.Render) //gameLoop
    }
}

new GameLooper();
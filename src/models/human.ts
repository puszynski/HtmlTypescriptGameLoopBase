import { IDrawable } from '../interfaces/IDrawable.js';

export class Human implements IDrawable {
    public positionX: number;
    public positionY: number;

    public name: string;
    public isMale: boolean;
    // public age: number; 
    // private ageOfDeath: number;

    private humanHeight: number;
    private humanWidth: number;
    
    public constructor(positionX: number, positionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.isMale = getRandomBool();
        this.name = 'testName';
        this.humanHeight = this.isMale ? 150 : 140;
        this.humanWidth = this.humanHeight / 2;
    }

    public draw(ctx: CanvasRenderingContext2D) {  
        //todo - translate position

        //draw human in 0,0 position
        this.drawHead(ctx);
        this.drawBody(ctx);
        this.drawItems();
        this.drawTaskItems();
        this.drawArea(ctx); 

        //todo - reset position
    }

    private drawArea(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(0 - this.humanWidth/2, 0 - this.humanHeight/2, this.humanWidth, this.humanHeight);//draw in 0,0 position and use translate
        ctx.setLineDash([4, 2]);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.closePath();
    }

    private drawHead(ctx: CanvasRenderingContext2D) {
        let radius = this.humanWidth / 4;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.arc(this.positionX, this.positionY - this.humanHeight/2 + radius, radius, 0, Math.PI*2, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    private drawBody(ctx: CanvasRenderingContext2D) {  
        ctx.beginPath();
        //SVG path can be use to draw
        //m 0,0 => Move To
        //3 ways to draw line: L - line to, H - draw horizonal line, V - vertical line, 
        //polygon - c - cubic curve => c dx1 dy1, dx2 dy2, dx dy ..and others: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths        
        //z => Close Path
        let bodyPath = new Path2D('m 0,0 c -6.77,-17.03 -14.73,-47.47 21.51,-47.99 36.24,-0.51 31.75,27.11 23.57,46.58 -8.17,19.46 -38.32,18.44 -45.09,1.41 z');
        ctx.fillStyle = "green";
        ctx.fill(bodyPath);

        // ctx.moveTo(this.positionX - this.humanWidth / 2, this.positionY - this.humanHeight/5);
        // ctx.lineTo(this.positionX, this.positionY + this.humanHeight/2);
        // ctx.lineTo(this.positionX + this.humanWidth / 2, this.positionY - this.humanHeight/5);
        // ctx.lineTo(this.positionX - this.humanWidth / 2, this.positionY - this.humanHeight/5);
        // ctx.closePath();

        // ctx.fillStyle = "white";
        // ctx.fill();
    }

    private drawItems() {

    }

    private drawTaskItems() {

    }
}
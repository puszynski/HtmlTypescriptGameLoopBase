export class Human {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.isMale = getRandomBool();
        this.name = 'testName';
        this.humanHeight = this.isMale ? 150 : 140;
        this.humanWidth = this.humanHeight / 2;
    }
    draw(ctx) {
        //todo - translate position
        //draw human in 0,0 position
        this.drawHead(ctx);
        this.drawBody(ctx);
        this.drawItems();
        this.drawTaskItems();
        this.drawArea(ctx);
        //todo - reset position
    }
    drawArea(ctx) {
        ctx.beginPath();
        ctx.rect(0 - this.humanWidth / 2, 0 - this.humanHeight / 2, this.humanWidth, this.humanHeight); //draw in 0,0 position and use translate
        ctx.setLineDash([4, 2]);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.closePath();
    }
    drawHead(ctx) {
        let radius = this.humanWidth / 4;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.arc(this.positionX, this.positionY - this.humanHeight / 2 + radius, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    drawBody(ctx) {
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
    drawItems() {
    }
    drawTaskItems() {
    }
}

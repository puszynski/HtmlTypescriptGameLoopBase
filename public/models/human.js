export class Human {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.isMale = true; //getRandomBool();
        this.name = 'testName';
        this.humanHeight = this.isMale ? 180 : 140;
        this.humanWidth = this.humanHeight / 2.5;
    }
    draw(ctx) {
        ctx.save(); //save actuall translate
        //translate all objects unitl restore()
        ctx.translate(this.positionX, this.positionY);
        //draw human in 0,0 position:
        this.drawSketch(ctx);
        this.drawHead(ctx);
        this.drawBody(ctx);
        this.drawItems();
        this.drawTaskItems();
        this.drawArea(ctx);
        ctx.restore(); //reset translate to previous saved 
    }
    drawSketch(ctx) {
        ctx.save();
        ctx.translate(-34, -93);
        ctx.beginPath();
        //SVG path can be use to draw
        //m 0,0 => Move To
        //3 ways to draw line: L - line to, H - draw horizonal line, V - vertical line, 
        //polygon - c - cubic curve => c dx1 dy1, dx2 dy2, dx dy ..and others: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths        
        //z => Close Path
        let bodyPath = new Path2D('m 18.182754,182.63721 c -1.297989,-0.49324 -2.889509,-1.91936 -3.577444,-3.20602 -0.597075,-1.11628 -0.597075,-1.11628 -0.730582,-26.7423 L 13.744928,127.06287 6.9660866,88.479025 C -0.48288827,46.080575 -0.17248341,48.46146 1.4403609,46.121001 3.4566946,43.195332 1.3105606,43.377422 33.729142,43.379092 c 19.816584,0.0011 28.926432,0.09273 29.666282,0.29299 2.459137,0.671243 4.744708,4.233297 4.311369,6.720242 -0.07417,0.472841 -1.116271,6.385922 -2.296887,13.139546 -1.181172,6.75344 -2.920106,16.723664 -3.865414,22.15575 -0.945674,5.43227 -2.987415,17.1062 -4.538509,25.94217 -2.819792,16.0654 -2.819792,16.0654 -2.819792,40.49467 0,30.42877 0.03706,30.30583 -6.229235,30.7872 -6.539639,0.50436 -6.85097,-0.74912 -6.85097,-27.5704 v -21.21305 l -7.140422,0.0741 -7.140797,0.0741 -0.129797,22.17707 c -0.129797,22.1769 -0.129797,22.1769 -0.941969,23.48361 -1.514939,2.45153 -4.976677,3.68981 -7.56394,2.70649 z m 24.812179,-65.58462 c 0.402379,-2.27556 1.705925,-9.72324 2.898774,-16.5501 2.129634,-12.191833 2.560751,-14.652266 4.396851,-25.092175 0.504359,-2.862995 1.412952,-8.088145 2.02171,-11.611813 0.608196,-3.523672 1.171896,-6.676857 1.249778,-7.007103 0.148324,-0.600785 0.148324,-0.600785 -19.534365,-0.600785 -19.67863,0 -19.67863,0 -19.523428,0.867798 0.980908,5.482892 10.93797,62.523218 11.043849,63.268268 0.148343,1.00501 0.148343,1.00501 8.429325,0.93455 l 8.286179,-0.0742 z M 31.803113,34.551096 C 19.261198,32.904503 12.741769,18.534464 19.76964,8.0270556 c 7.90772,-11.823199 25.989632,-9.3262385 30.522212,4.2147564 3.945332,11.786113 -6.1215,23.932882 -18.488739,22.309284 z m 4.507732,-13.396918 c 3.997064,-2.693699 1.099581,-9.078323 -3.494744,-7.701527 -3.547405,1.062497 -4.157275,5.84058 -0.992034,7.770505 1.231235,0.750981 3.318402,0.717603 4.486591,-0.07417 z');
        ctx.fillStyle = "blue";
        ctx.fill(bodyPath);
        ctx.closePath();
        ctx.restore();
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
        let radius = this.humanWidth / 6;
        //ctx.filter = "blur(16px)";// => efekt blur - można pobawić się przestrzenią => "blur(16px)"; //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.arc(0, 0 - this.humanHeight / 2 + radius + radius / 2, radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "white";
        ctx.lineWidth = radius;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
    }
    drawBody(ctx) {
        ctx.beginPath();
        ctx.moveTo(0 - this.humanWidth / 2, 0);
        ctx.lineTo(300, 150);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
        //ctx.lineCap = 'round';
    }
    drawItems() {
    }
    drawTaskItems() {
    }
}

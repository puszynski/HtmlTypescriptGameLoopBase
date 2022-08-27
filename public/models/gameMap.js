export class GameMap {
    draw(ctx) {
        ctx.arc(0 - 2, 0 - 2, 2, 2 * Math.PI, 0);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = '12px serif';
        ctx.fillText('(0,0)', 0 - 13, 0 - 10);
        ctx.closePath();
    }
}

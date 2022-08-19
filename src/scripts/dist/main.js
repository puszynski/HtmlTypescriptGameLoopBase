var GameLooper = /** @class */ (function () {
    function GameLooper() {
        var _this = this;
        this.changePosition = 1;
        this.Render = function () {
            _this.ctx.beginPath();
            _this.changePosition++;
            _this.ctx.rect(20 + _this.changePosition, 40, 50, 50);
            _this.ctx.fillStyle = "#FF0000";
            _this.ctx.fill();
            _this.ctx.closePath();
            _this.ctx.beginPath();
            _this.ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
            _this.ctx.fillStyle = "green";
            _this.ctx.fill();
            _this.ctx.closePath();
            _this.ctx.beginPath();
            _this.ctx.rect(160, 10, 100, 40);
            _this.ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
            _this.ctx.stroke();
            _this.ctx.closePath();
            requestAnimationFrame(_this.Render); //gameLoop
        };
        this.canvas = document.getElementById('gameCanvas');
        ;
        this.ctx = this.canvas.getContext("2d");
        this.Render();
    }
    return GameLooper;
}());
new GameLooper();

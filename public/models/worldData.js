export class WorldData {
    //todo - time of day/night
    //todo - seasons
    constructor() {
        this.year = 0;
        this.month = 1;
        this.day = 1;
        this.hour = 1;
        this.worldStartDate = new Date();
        this.previousFrameDate = new Date();
        this.gameDurationInMS = 0;
        this.lastFrameDurtionMS = 0;
    }
    UpdateWorldTime() {
        let currentDate = new Date();
        this.gameDurationInMS = currentDate.getTime() - this.worldStartDate.getTime();
        this.lastFrameDurtionMS = currentDate.getTime() - this.previousFrameDate.getTime();
        const HoursInMs = 10 * 1000; //10 sec (1 hour in game == 10 sec in real)
        let hours = Math.floor(this.gameDurationInMS / HoursInMs);
        let days = Math.floor(hours / 24);
        let years = Math.floor(days / 365);
        this.hour = hours % 24 + 1;
        this.day = days % 365 + 1;
        this.year = years;
    }
    DisplayData(worldDataDisplayer) {
        worldDataDisplayer.innerHTML = `game time: ${this.SetGameTime()}  <br> real time: ${this.gameDurationInMS} ms ( ${this.ConvertMsToTime()})`;
    }
    ConvertMsToTime() {
        return new Date(this.gameDurationInMS).toISOString().slice(11, 19);
    }
    SetGameTime() {
        return `year ${this.year} day ${this.day} hour ${this.hour}`;
    }
}

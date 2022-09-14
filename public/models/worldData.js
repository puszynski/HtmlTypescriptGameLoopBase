export class WorldData {
    //todo - time of day/night
    //todo - seasons
    constructor() {
        this.year = 0;
        this.day = 1;
        this.hour = 1;
        this.worldStartDate = new Date();
        this.previousFrameDate = new Date();
        this.gameDurationInMS = 0;
        this.lastFrameDurtionMS = 0;
    }
    UpdateWorldTime(currentDate) {
        this.gameDurationInMS = currentDate.getTime() - this.worldStartDate.getTime();
        this.lastFrameDurtionMS = currentDate.getTime() - this.previousFrameDate.getTime();
        //todo ustal ile ma trwać godzina/doba/rok
        //1000ms == 1s
        //in game:
        // a) 1 hour == 1 min? => 1 day == 24 min => 1 year == 365 * 24 min = 6+ days <- dupa, odpada..
        // b) 1 day == 10 min
    }
}

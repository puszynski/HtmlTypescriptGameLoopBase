export class WorldData {
    public year: number; //0-n
    public day: number; //1-365
    public hour: number; //1-24*60 => 1-1440

    private worldStartDate: Date;
    private previousFrameDate: Date;
    
    public gameDurationInMS: number;//all game sync with that.. ?
    //vs
    public lastFrameDurtionMS: number;//i wtedy na podstawie tego liczymy czas i przeliczamy pozycje.. 


    //todo - time of day/night
    //todo - seasons

    public constructor() {
        this.year = 0;
        this.day = 1;
        this.hour = 1;
        this.worldStartDate = new Date();
        this.previousFrameDate = new Date();
        this.gameDurationInMS = 0;
        this.lastFrameDurtionMS = 0;
    }

    public UpdateWorldTime() {
        let currentDate = new Date();
        this.gameDurationInMS = currentDate.getTime() - this.worldStartDate.getTime();
        this.lastFrameDurtionMS = currentDate.getTime() - this.previousFrameDate.getTime();

        //todo ustal ile ma trwać godzina/doba/rok
        //1000ms == 1s

        //in game:
        // a) 1 hour == 1 min? => 1 day == 24 min => 1 year == 365 * 24 min = 6+ days <- dupa, odpada..
        // b) 1 day == 10 min
    }

    public DisplayData(worldDataDisplayer: HTMLElement)
    {
        worldDataDisplayer.innerHTML = "time in game: " + this.gameDurationInMS + " ms (" + this.ConvertMsToTime(this.gameDurationInMS) + ")";
    }

    private ConvertMsToTime(ms: number) : string
    {
        return new Date(this.gameDurationInMS).toISOString().slice(11, 19);
    }
} 
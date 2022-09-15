export class WorldData {
    public year: number; //0-n
    public month: number; //1-12
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
        this.month = 1;
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

        const HoursInMs = 10 * 1000; //10 sec (1 hour in game == 10 sec in real)

        let hours = Math.floor(this.gameDurationInMS / HoursInMs);
        let days = Math.floor(hours / 24);
        let years = Math.floor(days / 365);

        this.hour = hours%24 + 1;
        this.day = days%365 + 1;
        this.year = years;
    }

    public DisplayData(worldDataDisplayer: HTMLElement)
    {
        worldDataDisplayer.innerHTML = `game time: ${this.SetGameTime()}  <br> real time: ${this.gameDurationInMS} ms ( ${this.ConvertMsToTime()})`;
    }

    private ConvertMsToTime() : string
    {
        return new Date(this.gameDurationInMS).toISOString().slice(11, 19);
    }

    private SetGameTime() : string
    {
        return `year ${this.year} day ${this.day} hour ${this.hour}`;
    }
} 
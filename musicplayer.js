class MusicPlayer{
    constructor(musicList){
        this.musicList = musicList;
        this.index = 0;
    }
    getMusic(){
        return this.musicList[this.index];
    }
    next(){
        if(++this.index < this.musicList.length){
            return this.musicList[this.index];
        }
        this.index = 0;
        return this.musicList[this.index];
    }
    previous(){
        if(--this.index >= 0){
            return this.musicList[this.index];
        }
        this.index = this.musicList.length -1;
        return this.musicList[this.index];
    }
}
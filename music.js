class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Nasıl? Ne Zaman?","Hardal", "1.jpeg", "1.mp3"),
    new Music("Babalar Küçük Oğullarına Söylesin","Hardal", "1.jpeg", "1.mp3"),
    new Music("California Dreamin'","The Mamas & The Papas", "1.jpeg", "1.mp3"),
    new Music("Sen","Erkut Taçkın", "1.jpeg", "1.mp3")

];

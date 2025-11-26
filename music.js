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
    new Music("Nasıl? Ne Zaman?","Hardal", "1.jpg", "1.m4a"),
    new Music("Babalar Küçük Oğullarına Söylesin","Hardal", "2.jpg", "2.m4a"),
    new Music("California Dreamin'","The Mamas & The Papas", "3.jpg", "3.m4a"),
    new Music("Mazi Kalbimde Bir Yaradır","Dilek & Kargo", "4.jpg", "4.m4a")

];

// Container and music details
const container = document.querySelector(".container");
const img = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");

// MUsic control buttons
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const audio = document.querySelector("audio");


const player = new MusicPlayer(musicList);


// When the page is loading
window.addEventListener("load", ()=>{
    let music = player.getMusic();
    displayMusic(music);
});
  
// add mp3 and images
function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    img.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
    console.log("AUDIO SRC:"+audio.src);
}
// Play the music
play.addEventListener("click", () => {
        const isMusicPlay = container.classList.contains("playing");
        isMusicPlay ? pauseMusic() : playMusic();
});
// Next msuic
next.addEventListener("click", () => {
        player.next();
        let music = player.getMusic();
        displayMusic(music);
        playMusic();
});
// Prev music
prev.addEventListener("click", () => {
        player.previous();
        let music = player.getMusic();
        displayMusic(music);
        playMusic();
});
// Pause the music
function pauseMusic(){
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}
// Play the music
function playMusic(){
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();

}


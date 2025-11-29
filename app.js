// Container and music details
const container = document.querySelector(".container");
const img = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const ul = document.querySelector("ul");

// MUsic control buttons
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const audio = document.querySelector("audio");

// Times
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");

// Bars
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector(".card-footer .volume-container #volume");
const volumeBar = document.querySelector(".card-footer .volume-container #volume-bar");

const player = new MusicPlayer(musicList);


// When the page is loading
window.addEventListener("load", ()=>{
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlayingNow();
});
  
// add mp3 and images
function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    img.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
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
        isPlayingNow();
});
// Prev music
prev.addEventListener("click", () => {
        player.previous();
        let music = player.getMusic();
        displayMusic(music);
        playMusic();
        isPlayingNow();
});
// Pause the music
function pauseMusic(){
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}
// Play the music
function playMusic(){
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

audio.addEventListener("loadedmetadata", ()=>{
    duration.innerText = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
    volumeBar.value = "100";
});

// change the progress of the music
progressBar.addEventListener("input", ()=> {
    audio.currentTime = progressBar.value;
});
function calculateTime(duration){
    let seconds = Math.round(duration % 60);
    const currentSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let minutes = Math.round(duration / 60);
    return `${minutes}:${currentSeconds}`;
}

// Listen the page
audio.addEventListener("timeupdate", ()=> {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.innerText = calculateTime(progressBar.value);
});

// Volume
volume.addEventListener("click", ()=>{
    let isMuted = volume.classList.contains("muted");
    isMuted ? unmutedAudio(): mutedAudio(); 
});

// mute
function mutedAudio(){
    volume.classList = "fa-solid fa-volume-xmark muted";
    audio.muted = true;
    volumeBar.value = 0;
    audio.volume = 0;
}
// unmute
function unmutedAudio(){
    volume.classList = "fa-solid fa-volume-high";
    audio.muted = false;
    volumeBar.value = 100;
    audio.volume = 1;
}

// Follow the volume bar
volumeBar.addEventListener("input", ()=> {
    console.log("slşdcmds");
    console.log(volumeBar.volume);
    if(volumeBar.value > 0){
        console.log("higher");
        volume.classList = "fa-solid fa-volume-high";
        audio.muted = false;
    }else if(volumeBar.value == 0){
        console.log("lower");
        volume.classList = "fa-solid fa-volume-xmark muted";
        audio.muted = true;
    }
    audio.volume = volumeBar.value / 100;
});

const displayMusicList = (list) => {
    console.log(list);
    for(let i = 0; i < list.length; i++){
        let liTag = `
            <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
                <span>${list[i].getName()} - ${list[i].singer}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
            </li>
        `;
        ul.insertAdjacentHTML("beforeend",liTag);
        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", ()=> {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });
    }
};

const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic( player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll("li")){
        if(li.classList.contains("playing")){
            li.classList.remove("playing");
        }
        if(li.getAttribute("li-index") == player.index){
            li.classList.add("playing");
        }
    }
}

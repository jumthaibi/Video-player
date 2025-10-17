let video = document.getElementById("video");
let next_btn = document.getElementById("next");
let play_btn = document.getElementById("play");
let prev_btn = document.getElementById("prev");
let video_list = ["media/one.mp4","media/two.mp4","media/three.mp4","media/four.mp4","media/five.mp4"];
let current = 0;
let progress = document.getElementById("progress");
let timeUpdate = document.getElementById("time");

play_btn.addEventListener("click",()=>{
    if(video.paused){
        video.play();
        play_btn.src = "btns/pause.jpg";
    }
    else{
        video.pause();
        play_btn.src = "btns/play.jpg";
        video.loop = true;
    }
});

next_btn.addEventListener("click",()=>{
    video.pause();
    play_btn.src = "btns/play.jpg";
    current = (current+1)%video_list.length;
    video.src = video_list[current];
    video.play();
    play_btn.src = "btns/pause.jpg"; 
});

prev_btn.addEventListener("click",()=>{
    video.pause();
    play_btn.src = "btns/play.jpg";
    current = (current-1+video_list.length)%video_list.length;
    video.src = video_list[current];
    video.play();
    play_btn.src = "btns/pause.jpg";
});

progress.addEventListener("input",()=>{
    video.currentTime = progress.value;
});
video.addEventListener("timeupdate",()=>{
    progress.max = video.duration;
    progress.value = video.currentTime;
    let totalSeconds = Math.floor(video.currentTime);
    let minutes = Math.floor(totalSeconds / 60); 
    let seconds = totalSeconds % 60;
    timeUpdate.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    video.loop = true;
});
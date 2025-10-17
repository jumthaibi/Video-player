let videoInput = document.getElementById("videoInput");
let video = document.getElementById("video");
let next_btn = document.getElementById("next");
let current = 0;
let progress = document.getElementById("progress");
let timeUpdate = document.getElementById("time");
let play_btn = document.getElementById("play"); 

videoInput.addEventListener("change",()=>{
    const file = videoInput.files[0];
    if(file){
        let url = URL.createObjectURL(file);
        video.src = url;
        video.play();
        play_btn.src = "btns/pause.jpg";
    }
});




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
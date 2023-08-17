const video = document.getElementById('videoPlayer');
const timeDisplay = document.getElementById('videoTime');

video.onclick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

video.ontimeupdate = () => {
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime - minutes * 60);
  const milliseconds = Math.floor((video.currentTime - minutes * 60 - seconds) * 1000);
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
};

video.onended = () => {
  video.currentTime = 0;
  timeDisplay.textContent = "00:00:000";
};
video.onended

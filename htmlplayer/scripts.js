//get elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreen = player.querySelector('.fullscreen');
const ranges = player.querySelectorAll('.player__slider');



//build functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(scrubTime);
  video.currentTime = scrubTime;
}

function makeFull() {
  //console.log('fullsc');
  //if(!fullbool) {
  //  if (player.requestFullscreen) 
  //    player.requestFullscreen();
  //  else if (player.webkitRequestFullscreen) 
  //    player.webkitRequestFullscreen();
  //  else if (player.msRequestFullScreen) 
  //    player.msRequestFullScreen();
  //} else if(player.exitFullscreen) {
  //  player.exitFullscreen();
  //}
	if (!fullbool) {
		if (player.requestFullscreen) {
			player.requestFullscreen();
		} else if (player.mozRequestFullScreen) {
			player.mozRequestFullScreen();
		} else if (player.webkitRequestFullScreen) {
			player.webkitRequestFullScreen();
		} else if (player.msRequestFullscreen) {
			player.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
  
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateButton() {
  const icon = this.paused ? '???' : '| |'
  toggle.textContent = icon;
}


//event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

fullscreen.addEventListener('click', () => {
  makeFull();
  if(fullbool == false)
    fullbool = true;
  else
    fullbool = false;
  console.log(fullbool);
  });
let mousedown = false;
let fullbool = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

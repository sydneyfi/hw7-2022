var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
	console.log("Volume is " + video.volume * 100 + '%');
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current playback rate: " + video.playbackRate);
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("New playback rate: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current playback rate: " + video.playbackRate);
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New playback rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time: " + video.currentTime);
	if ((video.currentTime + 10) >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("New time: " + video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is: " + video.muted);
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("The value of mute is: " + video.muted);
	}
	// video.muted == false
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("The value of mute is: " + video.muted);
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	console.log('Slider value is: ' + this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log('Style is Old School');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log('Style is Original');
});


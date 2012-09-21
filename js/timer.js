var interval = 1000;
var intervalID, timer,elapsed;
var hh=0, mm=0, ss=0;

$(document).ready( function() {
	timer = document.getElementById('timer');
	initTimer();
});

function initTimer() {
	timer.value = "TIME: 0:00:00";
	elapsed = 0;
}

function startTimer() {
	intervalId = setInterval(function () {
	elapsed = elapsed + interval;

	updateTimer();

	}, interval);
}

function pauseTimer() {
	clearInterval(intervalId);
}
	        
function resetTimer() {
	pauseTimer();
	elapsed = hh = mm = ss = 0;
	initTimer();
}

function updateTimer() {
	var s,m;
	ss += 1;
	s = ss < 10 ? '0' + ss : ss;

	if (ss > 59) {
		ss = 0;
		s = '00';
		mm += 1;
	}
            
	m = mm < 10 ? '0' + mm : mm;
            
	if (mm > 59) {
		mm = 0;
		m = '00';
		hh += 1;
	}        
	timer.value ='TIME: ' + hh + ':' + m + ':' + s;
}
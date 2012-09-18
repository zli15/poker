var SCOREPERCARD = 10;
var score = 0;

$(document).ready ( function() {
	scorer = document.getElementById('scorer');
	initScorer();
});

function initScorer () {
	scorer.value = "SCORE: 0";
	score = 0;
}

function getScore () {
	score += 10;
	scorer.value = "SCORE: "+ score;
}

function resetScorer () {
	initScorer();
}
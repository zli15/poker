var shuffled = false;

var cardArray = ["HRTAce","HRT02","HRT03","HRT04","HRT05","HRT06","HRT07",
				"HRT08","HRT09","HRT10","HRTJack","HRTQueen","HRTKing",
				"DNDAce","DND02","DND03","DND04","DND05","DND06","DND07",
				"DND08","DND09","DND10","DNDJack","DNDQueen","DNDKing",
				"CLBAce","CLB02","CLB03","CLB04","CLB05","CLB06","CLB07",
				"CLB08","CLB09","CLB10","CLBJack","CLBQueen","CLBKing",
				"SPDAce","SPD02","SPD03","SPD04","SPD05","SPD06","SPD07",
				"SPD08","SPD09","SPD10","SPDJack","SPDQueen","SPDKing"];

var c= new Array();

for(var i = 0; i < 7; i++){
	c[i] = new Array();
}

var waitCard = [];
var disCard = [];

function shuffle(){
	var temp;
	var index;

	for (var i = 0; i < cardArray.length; i++) {
		temp = cardArray[i];
		index =i +  Math.floor(Math.random() * Number.MAX_VALUE) % (cardArray.length - i);

		cardArray[i] = cardArray[index];
		cardArray[index] = temp;
	};
}

function assign(){
	var i;
	var j;
	var index = 0;

	for (i = 0; i < 7; i++) {
		for (j = 0; j <= i; j++) {
			c[i][j] = cardArray[index];
			index++;
		};
	};

	for (i = index; i < cardArray.length; i++) {
		waitCard.push(cardArray[i]);
	}
}

function gameInit(){
	var i, j;
	for (i = 0; i < 7; i ++) {
		var ele = document.getElementById("c" + i);
		ele.innerHTML = "";
	}
	shuffle();
	assign();
	
	for (i = 0; i < 7; i++) {
		var ele = document.getElementById("c" + i);
		for (j = 0; j <= i; j++) {
			var t = c[i][j];
			if(i == j){
				ele.innerHTML += '<a id="c'+ String(i) + String(j)+'" draggable="true"><img src="img/'+c[i][j]+'.png" /></a>';
			}else{
				ele.innerHTML += '<a id="c'+ String(i) + String(j)+'" draggable="false"><img src="img/CardBackBlue.png" /></a>'
			}
		};
	};
	
}

//for debug, delete this later

function showCards(){
	var i, j;
	var s = '';

	for (i = 0; i < c.length; i++) {
		s += "c" + i + " : " + c[i].join(",") + "\n";
	};

	s += "Wait List: \n" + waitCard.join(",");

	alert(s);
}
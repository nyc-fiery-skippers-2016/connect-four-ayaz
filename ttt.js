var value1 = 16;
var value2 = 26;
var value3 = 36;
var value4 = 46;
var value5 = 56;
var value6 = 66;
var value7 = 76;

var player = "player1";

var playerCheck = function(value) {
	if(player === "player1"){
		$('.' + value).addClass('red');
		player = "player2";
	} else if (player === "player2"){
		$('.' + value).addClass('yellow');
		player = "player1"
	}
}

var check = function(value) {
	while ($('.' + value).hasClass('red') || $('.' + value).hasClass('yellow')) {
		value--;
	}
	playerCheck(value);
}

$(document).ready(function(){
	$('.player').text(player)


	$('.btn1').on('click', function(event){
		check(value1)
	});
	$('.btn2').on('click', function(event){
		check(value2)
	});
	$('.btn3').on('click', function(event){
		check(value3)
	});
	$('.btn4').on('click', function(event){
		check(value4)
	});
	$('.btn5').on('click', function(event){
		check(value5)
	});
	$('.btn6').on('click', function(event){
		check(value6)
	});
	$('.btn7').on('click', function(event){
	check(value7)
	});
});
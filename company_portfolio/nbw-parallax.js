$(document).ready(function() {

	var $window = $(window);
	var $firstBG = $('#intro');
	var $firstBG_cup = $('#cup');
	var $firstBG_gessetto = $('#gessetto');
	var $firstBG_cofanetto = $('#cofanetto');
	var $secondBG = $('#second');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	var $fifthBG = $('#fifth');
	
	var windowHeight_true = $window.height();
	var windowHeight = 1024;
	$(".height_sensor").css('height',windowHeight_true);
	
	
	$('#intro, #second, #third, #fourth, #fifth').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
	function RepositionNav(){
		var windowHeight = $window.height();
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop});
	}
	
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	

	function Move(){ 
		
		var pos = $window.scrollTop();

		if($firstBG.hasClass("inview")){
			$firstBG_cup.css({'backgroundPosition': newPos(0, 1024, pos, 2350, 0.2)});
			$firstBG_gessetto.css({'backgroundPosition': newPos(0, 1024, pos, 1650, 0.7)});
			$firstBG_cofanetto.css({'backgroundPosition': newPos(0, 1024, pos, 1110, 1.5)});
			$("#nav li").css('background-position','top');
			$("#nav_intro").css('background-position','bottom');
		}
		
		if($secondBG.hasClass("inview")){
			$("#nav li").css('background-position','top');
			$("#nav_about").css('background-position','bottom');
		}
		
		if($thirdBG.hasClass("inview")){
			$("#nav li").css('background-position','top');
			$("#nav_skills").css('background-position','bottom');
		}
		
		if($fourthBG.hasClass("inview")){
			$("#nav li").css('background-position','top');
			$("#nav_portfolio").css('background-position','bottom');
		}
		
		if($fifthBG.hasClass("inview")){
			$("#nav li").css('background-position','top');
			$("#nav_contacts").css('background-position','bottom');
			
		}
			
		RepositionNav();
	}
	
	$window.resize(function(){
		Move();
		RepositionNav();
	});		
	
	$window.bind('scroll', function(){
		Move();
	});
	
});
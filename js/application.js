var time = 250;

var open = function(section_id){
	$('.section.active').each(function(){
		$(this).animate({left: "100%"}, time,function(){
			$(this).css({width: "0", display: "none"});
			$(section_id).css({width: "50%", display: "table"}).animate({left: "50%"}, time).addClass('active');
	}).removeClass('active');
	});
};

$('#f0').click(function(){
	reset(function(){});
	open("#home");
});
$('#f1').click(function(){
	reset(
		function(){
			$('#face_1').animate({
				"height": "100%",
			},time);
			$('#face_2').animate({
				"top": "100%"
			},time);
			$('#face_3').animate({
				"top": "117%"
			},time);
			$('#face_4').animate({
				"top": "146%"
			},time);
			$('#fff').animate({
				"height": "0%"
			},time);
		}
	);
	open("#about");
});
$('#f2').click(function(){
	reset(
		function(){
			$('#face_1').animate({
				"height": "0%"
			},time);
			$('#face_2').animate({
				"height": "100%",
				"top": "0%",
				"backgroundPosition": "0% 0%"
			},time);
			$('#face_3').animate({
				"top": "100%"
			},time);
			$('#face_4').animate({
				"top": "125%"
			},time);
			$('#fff').animate({
				"height": "0%"
			},time);
		}
	);

	open("#work");
});
$('#f3').click(function(){
	reset(
		function(){
			$('#face_1').animate({
				"height": "0%"
			},time);
			$('#face_2').animate({
				"height": "0%",
				"top": "0%"
			},time);
			$('#face_3').animate({
				"height": "100%",
				"top": "0%",
				"backgroundPosition": "0% 0%"
			},time);
			$('#face_4').animate({
				"top": "100%"
			},time);
			$('#fff').animate({
				"height": "0%"
			},time);
		}
	);
	open("#video");
});
$('#f4').click(function(){
	reset(
		function(){
			$('#face_1').animate({
				"height": "0%"
			},time);
			$('#face_2').animate({
				"height": "0%",
				"top": "0"
			},time);
			$('#face_3').animate({
				"height": "0%",
				"top": "0"
			},time);
			$('#face_4').animate({
				"height": "100%",
				"top": "0%",
				"backgroundPosition": "0% 0%"
			},time);
			$('#fff').animate({
				"height": "0%"
			},time);
		}
	);
	open("#contact");
});



var reset = function(callb){
	$('#face_1').animate({
		"height": "29.1666%",
		"top": "0%",
		"backgroundPosition": "0% 0%"
	},time);
	$('#face_2').animate({
		"height": "17.8333%",
		"top": "29.1666%",
		"backgroundPosition": "0% 35%"
	},time);
	$('#face_3').animate({
		"height": "28%",
		"top": "47%",
		"backgroundPosition": "0% 65%"
	},time);
	$('#face_4').animate({
		"height": "25%",
		"top": "74.9%",
		"backgroundPosition": "0% 100%"
	});
	setTimeout(function(){
		$('#fff').animate({
			"height": "0%"
		},time,callb());
	},500);
};
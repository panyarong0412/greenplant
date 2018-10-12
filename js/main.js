
// console.log($(".Categories-center"));
// $(".mouseinout").hover({
// 	function(){
// 		$(".Categories-center").css({
// 			"background":"#ac0",
// 			"color":"white"
// 		});
// 	},
// 	function(){
// 		$(".Categories-center").css({
// 			"background":"white"
			
// 		});
// 	}
// });

$(".mouseinout").mouseenter(function(){
	$(".Categories-center").css({
			"background":"#ac0",
			"color":"white"
		});
	$(".Categories-center>h2").css({
			"color":"white"
		});
	$(".Categories-center>h4").css({
			"color":"white"
		});
});
$(".mouseinout").mouseleave(function(){
	$(".Categories-center").css({
			"background":"white"
		});
});
// $(".menuList")[0].onmouseenter=function(){
//     $(this).children("ul").css({
//         "display":"block"
//     });
// }
$(".menuList").hover(
	function(){
		$(this).children("ul").css({
           "display":"block"
        });
        $(this).children("a").css({
        	"color":"#abd373",
            "border-bottom":"2px solid #abd373",
            "transition":"all 0.1s"
        });
        // $(this).children("a").animate({
        // 	"width":"20px"
        // },400);
	},
	function(){
		$(this).children("ul").css({
        "display":"none"
        });
        $(this).children("a").css({
        	"color":"black",
        	"border-bottom":"none",
        });
	}
	);

$(".foundconnect").hover(
	function(){
		$(this).next("ul").css({
           "display":"block"
        });
	},
	function(){
		$(this).next("ul").css({
        "display":"none"
        });
	}
	);
/*
function goTop(){
    $('#topBtn').onclick=pro;
    function pro(){
        let $num=document.documentElement.scrollTop;
        $num-=$num/100+1;
        document.documentElement.scrollTop=$num;
        timer=setTimeout(pro,3);
        if(document.documentElement.scrollTop==0){
            clearTimeout(timer);
        }
    }
}*/
function gotop(){
	// let timer=setTimeout
     $("#scrolltopBtn").onclick=scroll;
     function scroll(){
     	let $num=document.documentElement.scrollTop;
     	$num-=$num/100+1;
     	document.documentElement.scrollTop=$num;
     	let timer=setTimeout(scroll,3);
     	if(document.documentElement.scrollTop==0){
     		clearTimeout(timer);
     	}

     }
}
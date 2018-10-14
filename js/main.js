// 下拉列表


$(".menuList").hover(
	function(){
        $(this).css({"perspective":"550px"})
		$(this).children("ul").css({
           "display":"block",
           // "transform":"perspective(600px) rotateX(-40deg)",

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
        // $(this).css({"perspective":"500px"});
		$(this).children("ul").css({
        "display":"none",
        // "transform":"perspective(450px) rotateX(-40deg)",
         "transition":"all 0.1s"
        });
        $(this).children("a").css({
        	"color":"black",
        	"border-bottom":"none",
        });
	}
);

//nav功能区
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

//点击回到顶部
function gotop(){
       let $step=document.documentElement.scrollTop;
        if($step>1000){
            $("#scrolltopBtn").css({
                "display":"block"
            }); 
            $("#scrolltopBtn").click=go;
        } 
 }
 function go(){
      // console.log(123);
        $step-=$step/100+1;
      document.documentElement.scrollTop=$step;
      let timer=setTimeout(go,3);
      if(document.documentElement.scrollTop==0){
        clearTimeout(timer);
      }
     }

//固定菜单nav
function headerfixed(){
    let $toplong=document.documentElement.scrollTop;
    if($toplong>0){
        $(".homenav").css({
            // "background":"white",
            "width":"100%",
            "background-color":"rgba(255,255,255,0.8)",
            "position":"fixed",
            "top":0,
            "left":0

        });
    }
}

$(".product-full").each(function(){
    $(this).hover(
        function(){ 
            $(this).children(".addcart").css({
                "display":"block"
            });
              $(this).children(".pirse").css({
                "display":"none"
            });
              $(this).children(".productChioceIcon").css({
                "display":"block"
            });
        },
        function(){ 
            $(this).children(".addcart").css({
                "display":"none"
            });
              $(this).children(".pirse").css({
                "display":"block"
            });
              // console.log($(this).children($(".addcart")))
              $(this).children(".productChioceIcon").css({
                "display":"none"
            });

        }
    );
});
$(function(){
  showList();
  showfound();  
  headerfixed();
  hovershowadd();
  showminiCart();
  gotop();
  $('.cartdetail').hide();
  // $('.search-box').hide();

  showsearch();

  // showcart();
  


});
// 1.下拉列表
function showList(){
  $(".menuList").hover(
	  function(){
        // $(this).css({"perspective":"2000px"})
		  $(this).children("ul").css({"display":"block" });
       // "transform":"perspective(2000px) rotateX(-90deg)"
      $(this).children("a").css({
        	"color":"#abd373",
          "border-bottom":"2px solid #abd373",
          "transition":"all 0.1s"
        });
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
}
//2.nav功能区
function showfound(){
  $(".home-list").hover(
    function(){
      // console.log($(".home-list"));
        // $(this).css({"perspective":"2000px"})
      $(".home-list ul").css({"display":"block" });
       // "transform":"perspective(2000px) rotateX(-90deg)"
      $(".home-list").find("a").css({
          "color":"#abd373",
          "border-bottom":"2px solid #abd373",
          "transition":"all 0.1s"
        });
  },
  function(){
        // $(this).css({"perspective":"500px"});
    $(".home-list ul").css({
        "display":"none",
        // "transform":"perspective(450px) rotateX(-40deg)",
         "transition":"all 0.1s"
        });
       $(".home-list").find("a").css({
          "color":"black",
          "border-bottom":"none",
        });
     }
  );
}
//3.固定菜单nav
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

//
 function showminiCart(){
    $('.cartconnect').hover(
      function() {
        $(this).children('.cartdetail').slideDown(1000);
      }, 
      function() {
        $(this).children('.cartdetail').slideUp(300);
      }
    );
  }
  function showsearch(){
    $('.home-search').click(function(){
      $('.search-box').slideToggle("slow");
    }
    );
  }
  // $("p").slideToggle("slow");
//4.addcart
function hovershowadd(){
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
}
//点击回到顶部

 function gotop(){
    $(window).scroll(function(){
      if($(this).scrollTop()>$(window).height()){
         $("#scrolltopBtn").css({"display":"block" });
        }else{
         $("#scrolltopBtn").css({"display":"none" });
        }
     });
    $("#scrolltopBtn").click(function(){

      $("body,html").animate({
        scrollTop:0
      },1000);
      return false;
    });
 }
// function gotop(){
//        let $step=document.documentElement.scrollTop;
//         if($step>800){
//             $("#scrolltopBtn").css({
//                 "display":"block"
//             }); 
//             $("#scrolltopBtn").click({
//               function(){
//                let timer=setTimeout(go,3)
//               }
//             });
//           } 
//       }
// function go(){
//     $step-=$step/100+1;
//     document.documentElement.scrollTop=$step;
//     let timer=setTimeout(go,3);
//     if(document.documentElement.scrollTop==0){
//     clearTimeout(timer);
// }
//搜索框
// function showSearch(){
//   $("#searchIcon").click({
//        $(".search-box").show("slow");
// });
// }

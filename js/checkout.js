$(function(){
	$(".clickshow1").click(function () {
        $(".login").slideToggle(1000);
    });

    $(".clickshow2").click(function () {
        $(".row1Left").slideToggle("slow");  
    });
    checked();

})
window.onload=function(){
	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
    }
    //下面的select
    $(".select-head")[0].onclick=function(){
    	$(".option")[0].style.display="block";
    	  $(".select-head-item2")[0].style.transform="rotate(-180deg)";
    }
    $(".select-head-item")[0].innerHTML=$(".option-item")[0].innerHTML;
    for(let i=0;i<$(".option-item").length;i++){
        $(".option-item")[i].onclick=function(){
        $(".select-head-item")[0].innerHTML=this.innerHTML;
        $(".option")[0].style.display="none";
        $(".select-head-item2")[0].style.transform="rotate(-360deg)";
        }     
    }
      $(".select-head")[1].onclick=function(){
    	$(".option")[1].style.display="block";
    	$(".select-head-item2")[1].style.transform="rotate(-180deg)";
        $(".select-head-item2")[1].style.transtion="all 0.3";
    }
    $(".select-head-item")[1].innerHTML=$(".option-item")[0].innerHTML;
    for(let i=0;i<$(".option-item").length;i++){
        $(".option-item")[i].onclick=function(){
        $(".select-head-item")[1].innerHTML=this.innerHTML;
        $(".option")[1].style.display="none";
        $(".select-head-item2")[1].style.transform="rotate(-360deg)";
         $(".select-head-item2")[1].style.transtion="all 1s";
        }     
    }
}

 function checked(){
        $("#addChecKed").click(function(){
            let ischecked=this.checked;
            if(ischecked){
            $("#showship").show(1000);
           }else{
            $("#showship").hide(1000);
           }
        });
    	
    }



$(function(){
	$("#Lusername").keyup(function(){
		if(checked($(this).val(),'username')){
			$("#Lusernamep").html("输入正确");
			$("#Lusernamep").css()
			return;
		}else{
			$("#Lusernamep").html("！电话号码有误");
		}
	});
	$("#Lpassword").keyup(function(){
		if(checked($(this).val(),'password')){
			$("#Lpasswordp").html("");
			return;
		}else{
			$("#Lpasswordp").html("！密码长度是6-20位字符，由数字开头，并且要求字母、数字和字符两种以上");
		}
	});
	$("#Rusername").keyup(function(){
		if(checked($(this).val(),'username')){
			$("#Rusernamep").html("输入正确");
			return;
		}else{
			$("#Rusernamep").html("！电话号码有误");
		}
	});
	$("#Rpassword").keyup(function(){
		if(checked($(this).val(),'password')){
			$("#Rpasswordp").html("");
			return;
		}else{
			$("#Rpasswordp").html("！密码长度是6-20位字符，由数字开头，并且要求字母、数字和字符两种以上");
		}
	});

	// $("#username").each(function(){
	// 	$(this).keyup(function(){
	// 		if(checked($(this).val(),'username')){
	// 			$("#usernamep").html("输入正确");
	// 			return;
	// 		}else{
	// 			$("#username").html("！电话号码有误");
	// 		}
	// 	});
	// });
    

});
//注册
function checked(str,type){
	switch(type){
		case 'username':
		var pattern=/^[1](3|5|7|8)[\d]{9}/g ;
		break;
		case "password":
		var pattern=/^[0-9][\w]+[\w-]{4,20}/g;
			// "2":"^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$"，
			// "1": "^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$",
			// "0":"^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$"
	}
	return pattern.test(str);
}

//4位随机验证码
 
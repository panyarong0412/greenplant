<?php
	header("Content-type:text/html; charset=utf-8");
	
	$name=$_POST["username"];
	$userpass=$_POST["userpass"];

	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("mydb1706",$con);
		//1)、查询
		$sqlstr="select * from vip where username='$name'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){		
			//2）、添加	
			$sqlstr="insert into vip values('$name','$userpass')";
			$result = mysql_query($sqlstr,$con);
			if($result==1){
				echo "1";//注册成功；
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败：用户名已经存在，
		}
	}
?>
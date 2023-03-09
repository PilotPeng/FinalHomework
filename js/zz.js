var tel="-1";
var pwd="-1";
var yhm="-1";


function CheckTel() {
	var str=document.getElementById("telphone").value;
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if (myreg.test(str)) {
                return tel="1";
            } else {
           		return tel="-1";
            }
        }
function CheckUsername(){
	var user=document.getElementById("username").value;
	var name=/^[a-zA-Z]{3,8}$/;
	if(name.test(user)){
		return yhm="1";
	}else{
		alert("用户名由3-8位的字母组成！");
		return yhm="-1";	
	}
}
function Checkpwd(){
	var pwd1=document.getElementById("password1").value;
	var pwd2=document.getElementById("password2").value;
	var p=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
	if (p.test(pwd1)) {
		if(pwd1==pwd2){
			return pwd="1"
		}else{
			alert("与上次输入密码不符！");
			return pwd="-1";
		}
	}else{
		alert("密码必须由8-10位的大小写字母和数字组成！");
	}
}

function ClikeRegist(){
	if(tel!="-1"&&yhm!="-1"&&pwd!="-1"){
		// alert("注册成功");
		window.location.href="index.html"
	}else if(tel=="-1"){
		alert("请填写正确的手机号！！！");
	}else if(yhm=="-1"){
		alert("用户名由3-8位的字母组成！！！");
	}else{
		alert("密码必须由8-10位的大小写字母和数字组成！！！");
	}
}

/*
©sunhhjay@gmail.com
*/
$(document).ready(function(){
	$(".toteamIn").click(function(){//团队介绍
		$("#teamIn").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#teamIn").fadeOut();
 	});

 	$(".toachieve").click(function(){//成果展示
		$("#achieve").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#achieve").fadeOut();
 	});

	$(".tonowPro").click(function(){//在做项目
		$("#nowPro").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#nowPro").fadeOut();
 	});

	$(".toproIn").click(function(){//项目介绍
		$("#proIn").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#proIn").fadeOut();
 	});

	$(".tohezuoTeam").click(function(){//合作团队
		$("#hezuoTeam").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#hezuoTeam").fadeOut();
 	});
	$(".tohezuoQy").click(function(){//合作企业
		$("#hezuoQy").fadeIn();
	});
	$(".tiClose").click(function(){
    	$("#hezuoQy").fadeOut();
 	});
});	

function tab(i)
{
 switch(i)
 {
 	case 1:
		document.getElementById("ac1").style.display="block";
		document.getElementById("ac2").style.display="none";
		document.getElementById("ac3").style.display="none";
 	break;
	case 2:
		document.getElementById("ac1").style.display="none";
		document.getElementById("ac2").style.display="block";
		document.getElementById("ac3").style.display="none";
 	break;
 	case 3:
		document.getElementById("ac1").style.display="none";
		document.getElementById("ac2").style.display="none";
		document.getElementById("ac3").style.display="block";
 	break;
 }
}
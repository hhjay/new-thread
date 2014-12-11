/*
©sunhhjay@gmail.com
*/
$(document).ready(function(){
	var showArr = {
		"toteamIn"	:"#teamIn",
		"toachieve"	:"#achieve",
		"tonowPro"	:"#nowPro",
		"toproIn"	:"#proIn",
		"tohezuoQy"	:"#hezuoQy"
	};
	var str = "";
	$(".nav img").click(function(){
		str = $(this).attr('class');
		console.log(showArr[str]);
		$(showArr[str]).fadeIn();
	});

	$(".tiClose").click(function(){
    	console.log($(this).parent().fadeOut());
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
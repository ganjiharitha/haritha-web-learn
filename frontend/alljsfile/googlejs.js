function homepagere(){
	var x = document.getElementById("mysearch").value;
	if(x=="https://haritha-web-learn.herokuapp.com/")
		window.location.href ="https://haritha-web-learn.herokuapp.com/homepage";
	else if(x=="haritha-web-learn")
		window.location.href ="https://haritha-web-learn.herokuapp.com/homepage";
	else
		alert("enter valid search");
}
function googlesear(){
	window.open("https://www.google.co.in/","_black");
}
function googlelucky()
{
    window.open("https://www.google.com/doodles","_blank");
}
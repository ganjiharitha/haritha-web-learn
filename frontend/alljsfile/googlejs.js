function homepagere(){
	var x = document.getElementById("mysearch").value;
	if(x=="https://haritha-web-learn.herokuapp.com/")
		window.location.replace("https://haritha-web-learn.herokuapp.com/homepage");
	else if(x=="haritha-web-learn")
		window.location.replace("https://haritha-web-learn.herokuapp.com/homepage");
	else
		alert("enter valid search");
}
function googlesear(){
	window.open("https://www.google.co.in/","_black");
}
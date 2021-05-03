function homepagere(){
	var x = document.getElementById("mysearch").value;
	if(x=="https://haritha-web-learn.herokuapp.com/")
		window.location.replace("https://haritha-web-learn.herokuapp.com/");
	else if(x=="haritha-web-learn")
		window.location.replace("https://haritha-web-learn.herokuapp.com/");
	else
		alert("enter valid search");
}
function changergb()
{
    r = document.getElementById("redslide").value;
    g = document.getElementById("greenslide").value;
    b = document.getElementById("blueslide").value;
    document.getElementById("valred").innerHTML=r;
    document.getElementById("valblue").innerHTML=b;
    document.getElementById("valgreen").innerHTML=g;
    document.getElementById("printerback").style.backgroundColor= 'RGB(' + r+ ',' + g + ',' + b + ')';
    document.getElementById("rgbtestresult").innerHTML='RGB(' + r+ ',' + g + ',' + b + ')';
    if(r>=140 || g>=140 || b>=140)
       document.getElementById("rgbtestresult").style.color= "black";
    else
        document.getElementById("rgbtestresult").style.color= "white";
}
 function homefun() {
     window.location.replace("https://haritha-web-learn.herokuapp.com/homepage");
     }
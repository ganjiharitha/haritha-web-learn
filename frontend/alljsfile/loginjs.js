function submitfun()
{
    u = document.getElementById("uname").value;
    p = document.getElementById("upass").value;
    if(u=="admin" && p=="admin")
        window.location.href ="https://haritha-web-learn.herokuapp.com/";
    else
    alert("enter valid credentials");
}
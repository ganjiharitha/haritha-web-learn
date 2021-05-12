function textinp()
{
    var input = document.getElementById("myinput");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("subut").click();
    }});
}
function sdata()
{
    alert("you enterd something");
    document.getElementById("myinput").value="";
}
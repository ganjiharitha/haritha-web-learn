
var elements=[];
window.onload=function(){
    if(JSON.parse(localStorage.getItem("todo-elements"))!=null)
    elements=JSON.parse(localStorage.getItem("todo-elements"));
    display();
}
function textinp()
{
    var input = document.getElementById("addtxt");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("subut").click();
    }});
}
function subdata()
{
     var input = document.getElementById("addtxt").value;
    if(input){
        elements.push(input);
        localStorage.setItem("todo-elements",JSON.stringify(elements));
        display();
    }
}
function display(){
    document.querySelector(".itemsoflist").innerHTML="";
    for(var i = 0; i<elements.length;i++)
    {
        document.querySelector(".itemsoflist").innerHTML+="<button class=donebutt onclick=done("+i+")>Done</button>"
        +elements[i]+"<button class=undooit onclick=undoo("+i+")>Not Done</button>"
        +"<button class=delburr onclick=deleteit("+i+")>delete</button>"+"<br>";
        document.getElementById("addtxt").value="";
    }

}
function deleteit(index){
    elements.splice(index,1);
    localStorage.setItem("todo-elements",JSON.stringify(elements));
    display();
}
function done(index){
   elements[index]= "<strike>"+elements[index]+"</strike>";
    localStorage.setItem("todo-elements",JSON.stringify(elements));
   display();
}
function undoo(index){

    if(elements[index].includes("<strike>")){
    elements[index]=elements[index].replace("<strike>","");
    elements[index]=elements[index].replace("</strike>","");
    }
    localStorage.setItem("todo-elements",JSON.stringify(elements));
    display();
}
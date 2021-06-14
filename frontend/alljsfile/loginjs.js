$(document).ready(function() {
  var a=[];
  window.onload=function(){
    //localStorage.clear();
  if(JSON.parse(localStorage.getItem("loged_not"))!=null)
    a=JSON.parse(localStorage.getItem("loged_not"));
    if(a.length>0)
    window.location ="https://haritha-web-learn.herokuapp.com/";
  }
  newTest={"email" : "" , "password" : ""};
  $("#loginto").click(function(){
    newTest.email= $('#uname').val();
    newTest.password= $('#upass').val();
    $.post("/api/login/post",newTest)
    .done(function(data){
      if(data.success==true)
      {
        a.push(data);
        localStorage.setItem("loged_not",JSON.stringify(a));
        console.log(a);
        window.location ="https://haritha-web-learn.herokuapp.com/";
      }
      else{
        alert(data.message);
        $('#uname').val('');
        $('#upass').val('');
      }
    })
  })
})
$(document).ready(function() {
   var a=[];
  window.onload=function(){
  if(JSON.parse(localStorage.getItem("loged_not"))!=null)
    a=JSON.parse(localStorage.getItem("loged_not"));
    console.log(a);
    if(a.length>0){
      $('#homeregb').hide();
      $('#homelogb').hide();
      $('#signout').show();
      $('#weltag').html("Welcome "+a[0].user);
       console.log(a[0].user);
   }
   else{
      $('#homeregb').show();
      $('#homelogb').show();
      $('#signout').hide();
      $('#weltag').html("Welcome User");
   }
  }
  $("#signout").click(function(){
     if(a.glog)
      window.reload();
     localStorage.clear();
     location.reload();
  })
  $("#homeregb").click(function(){
   window.location="https://haritha-web-learn.herokuapp.com/register";
  })
  $("#homelogb").click(function(){
   window.location="https://haritha-web-learn.herokuapp.com/login";
  })
  $("#resumeb").click(function(){
     if(a.length>0)
      window.location="https://haritha-web-learn.herokuapp.com/resume";
      else
      window.location="https://haritha-web-learn.herokuapp.com/login";
  })
  $("#appleb").click(function(){
   if(a.length>0)
   window.location="https://haritha-web-learn.herokuapp.com/apple";
   else
   window.location="https://haritha-web-learn.herokuapp.com/login";

  })
  $("#rgbb").click(function(){
   if(a.length>0)
   window.location="https://haritha-web-learn.herokuapp.com/rgb";
   else
   window.location="https://haritha-web-learn.herokuapp.com/login";
     
})
$("#todob").click(function(){
   if(a.length>0)
      window.location="https://haritha-web-learn.herokuapp.com/todo";
      else
      window.location="https://haritha-web-learn.herokuapp.com/login";
     
})
$("#crudb").click(function(){
   if(a.length>0)
      window.location="https://haritha-web-learn.herokuapp.com/crub";
      else
      window.location="https://haritha-web-learn.herokuapp.com/login";
     
})
$("#tambolab").click(function(){
   if(a.length>0)
      window.location="https://haritha-web-learn.herokuapp.com/tambola";
      else
      window.location="https://haritha-web-learn.herokuapp.com/login";
     
   })

});
window.onbeforeunload = function(e){
   gapi.auth2.getAuthInstance().signOut();
 };
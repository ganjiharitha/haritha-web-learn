$(document).ready(function() {
  var newTest = { "name" : "", "email": "" , "phonenumber" : "" , "password" : ""};
  $("#submt").click(function(){
    
    newTest.name= $('#uname').val();
    newTest.email= $('#ename').val();
    newTest.phonenumber= $('#pnum').val();
    newTest.password= $('#upass').val();
    var repass = $('#upassre').val();
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(newTest.password == repass){
      if(repass.match(passw))
      {
        $.post("/api/reg/post",
        {
          name : newTest.name,
          email : newTest.email,
          phonenumber : newTest.phonenumber,
          password : newTest.password
        })
        $('#uname').val('');
        $('#ename').val('');
        $('#pnum').val('');
        $('#upass').val('');
        $('#upassre').val('');
      }
      else{
        $('#upass').val('');
        $('#upassre').val('');
        alert("password must contaion [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]");
      }

    }
    else{
      alert("password does not match");
      $('#upass').val('');
      $('#upassre').val('');
    }
  })


})
$(document).ready(function(){
    var total=100;
    var arrnum=[];    
    $("#genbutt").click(function(){
        if(arrnum.length>=100)
        alert("yayy you won");
        else{
            var pos = Math.floor(Math.random() * 100) + 1;
            if(arrnum.indexOf(pos)==-1)
                arrnum.push(pos);
            $("#gendis").html(pos);
            $("#"+pos).css("background-color","black");
            continueit();
        }
        
        
    })
    $("#resetbutt").click(function(){
        window.location.reload();
    })


});
function continueit()
{
        setTimeout(
            function() 
            {
                  //do something special
                  $("#genbutt").click();
            }, 1500);

}
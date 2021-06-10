const table = require("../models/regmodel");
module.exports.addnew = function(req,res)
{
    table.findOne({email : req.body.email} , function(err,foundit){
        if(err)
            console.log("error : "+err);
        else
        {
            if(foundit)
            {
                if(foundit.email==req.body.email)
                    console.log("email already existed");
            }
            else
            {
                table.findOne({name : req.body.name} , function(err,foundname){
                    if(err)
                        console.log("error : "+err);
                    else{
                        if(foundname)
                            console.log("username already existed");
                        else
                        {
                            const newTable = new table({
                                name : req.body.name,
                                email :req.body.email,
                                phonenumber : req.body.phonenumber,
                                password : req.body.password  
                            })
                            console.log("Add Successfully")
                            newTable.save();
                        }
                    }
                    
                })
            }

        }
    }) 

}


var jwt = require("jsonwebtoken");
//const cp= require("cookie-parser");
const Centre=require("./authenticate.js");
//const cp= require("cookie-parser");

  //console.log("Hello bera");
  const auth= async (req, res, next)=>{
    
 try{
   const token= req.cookies.JWT;
   const verifyUser= jwt.verify(token,"avikbera23101998abbbbavikbera23101998");
   //console.log("Verification of user  "+verifyUser);
   const user=await Centre.findOne({_id:verifyUser._id});
  //console.log(user);
       next();

  }catch(err){
         console.log(err);
        // res.status(401).send("error occured");
      } 
  }

    module.exports=auth;
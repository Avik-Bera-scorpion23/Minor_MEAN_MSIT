 const dataCentre=require("./model.js");
 const cp= require("cookie-parser");
 const auth=require("./authenticate.js");
const express= require("express");
const app=express();
const bp= require("body-parser");
app.use(cp());
 var corsOpt={ origin:"http://localhost:3001"};
 const cors=require("cors");
  const mongoose= require("mongoose");
 app.use(cors(corsOpt));
 app.use(bp.urlencoded({extended:true}));
 const port= process.env.PORT || 4200;
 app.use(bp.json());
  

 //  Post method to getting data from browser to server    
 app.post("/register",  async (req, res)=>{
         if(req.body.password ===req.body.cpassword ){

                     const indata= new dataCentre({
                             name: req.body.name ,
                             phone: req.body.phone ,
                             email: req.body.email ,
                             gender: req.body.gender ,                            
                             password: req.body.password ,
                             confirmpassword: req.body.cpassword
                                                              });


     const token=await indata.generateAuthToken();                                             
     await indata.save();

            }else{
    res.json({msg:"Enter valid password for registration..."});
 }  
            // console.log(req.body);


});
 

// Login page function................
   app.post("/login", async (req,res)=>{
         
   var userd =await dataCentre.find({email:req.body.email}); 
   //console.log(userd[0]);
   
   var pw=userd[0].password ;
  //console.log(userd[0].password);  console.log(userd[0].name);

   if( pw === req.body.password){

    const token=await userd[0].generateAuthToken();     
    res.cookie("JWT",token, { expires:new Date(Date.now()+5000), httpOnly:true});
      
  await req.cookies; 

 }else{ 
    console.log("user invalid");
    console.log("log in");    }


        });
   
   //Backend data show in frontend......     
app.get("/datab", async(req, res)=>{
 
  var userFront =await dataCentre.find({});
  res.json(userFront);
   
});

// logout page...............
  app.get("/logout",auth, async (req, res)=>{


    try{

      console.log(req.user );
      req.user.tokens=[];
      res.clearCookie("JWT");
      console.log("log out successfully");
      await req.user.save();
       res.json({msg:"You are logged out "}); 
   }catch(err){
     res.status(400).json(err);    }

  });


// This is for 404 Page or invalid url request
 app.use((req, res)=>{
   res.status(400).json({msg:"404 invalid url !!!"}); 
 });

// Server running port at 4200 port number
app.listen(port ,()=>{ console.log("Server smell..."); }); 





 

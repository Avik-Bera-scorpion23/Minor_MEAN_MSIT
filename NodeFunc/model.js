const jwt= require("jsonwebtoken");

const mongoose= require("mongoose");

 let url= "mongodb://localhost:27017/test";

mongoose.connect( url, {
       useNewUrlParser:true, useUnifiedTopology:true    
    }).then( ()=>{
         console.log("Data Info. : Connected Database , it is users collection in test database");
 }).catch((e)=>{ console.log(`Error occured is ${e}`); });

 var tempschema =new mongoose.Schema({
          name:{type:String, trim:true,required:true },
          password:{type:String, trim:true, required:true},
    confirmpassword:{type:String, trim:true,required:true },
          phone:{type:Number, required:true },
          email:{required:true,type:String, unique:true} ,
          gender:{required:true,type:String} ,
          date:{ type:Date, default:Date.now } ,
          tokens:[ {
            token:{ type:String, required:true}     }]
          
          

  });

    tempschema.methods.generateAuthToken = async function(){
         try{
          const token= jwt.sign({_id:this._id.toString()},"avikbera23101998abbbbavikbera23101998" );
          this.tokens= this.tokens.concat({token:token});
                 await this.save();
                 return token; 
             }catch(err){
                console.log("This is an Error here");
                console.log(err);     
            }
       }                 

    
  const dt= new mongoose.model("users", tempschema);

  /*  var getDoc= async ()=>{
    const indata= new dt({ });
    await indata.save();    
}  getDoc();  */ 

   module.exports= dt;






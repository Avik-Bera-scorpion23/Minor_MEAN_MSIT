import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   formd:any={};
   allData:any={};

     username= new FormControl('',[
        Validators.required   
      ]);

     password= new FormControl('',[
      Validators.required, Validators.maxLength(16),
      Validators.minLength(8) 
       ]);

     cpassword= new FormControl('',[
        Validators.required , Validators.maxLength(16),
        Validators.minLength(8)
         ]);

         phn= new FormControl('',[
          Validators.required ,   Validators.maxLength(10),
          Validators.minLength(10)
        ]);

        gender= new FormControl('',[
          Validators.required
        ]);

     mail= new FormControl('',[
          Validators.required   
        ]);

    registerForm:FormGroup= this.builder.group({
      name:this.username,
      password:this.password,
      cpassword:this.cpassword,
      email:this.mail,
      phone:this.phn, 
      gender:this.gender
    });

  constructor( private builder:FormBuilder, private userdata:AppServiceService) { }



  ngOnInit(): void { 
   /* this.userdata.GetBackend().subscribe((node)=>{
      this.allData=node;            
         });*/

  }
 
   submitRegister(){
     this.formd= this.registerForm.value;
     this.userdata.formData(this.formd).subscribe((data)=>{  this.allData=data;   });
     
     this.registerForm.reset();
      }

     
      /*userValue(){
         //const fd:any={this:this.formd};
        this.userdata.formData(this.formd).subscribe((data)=>{
                      
        });  }  */ 




}

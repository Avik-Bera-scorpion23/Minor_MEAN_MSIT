import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login:any={};
  LogD:any={};
  constructor( private Datalogin:AppServiceService , private builder:FormBuilder) { }

  email=new FormControl("");
         password=new FormControl("");
  
  Ln:FormGroup= this.builder.group({
         email:this.email, password:this.password

});


ngOnInit(): void { 
     
        }
  getLogin(data:any){
      
      this.Login= data;
      this.Datalogin.Login(this.Login).subscribe((data)=>{  });

      this.Ln.reset();
     /* this.Datalogin.GetBackend().subscribe((node)=>{
        this.LogD=node;           
           });  */
  }

  

}

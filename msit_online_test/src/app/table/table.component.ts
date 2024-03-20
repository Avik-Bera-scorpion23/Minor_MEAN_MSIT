import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
     Data:any={};

     
  constructor(private tableData:AppServiceService) { }

  ngOnInit(): void {
    
    //  this.tableData.Getdatabase().subscribe((node)=>{
       
    //   // for (let value in node){
    //   //   this.Data=value;
    //   // }

    //   this.Data=node;
    
    
    // });  
    this.func();
  
  }       
  func()
  {
    
     this.Data =[

       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} ,
       { name : "Avinash Bagchi" ,email :"abc@email.com",phone:"128889489649676556" ,gender:"Male"} 

     ]
    
  }   

      

}

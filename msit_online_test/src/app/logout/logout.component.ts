import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
   alldata:any={};
  
  constructor( private out:AppServiceService) { }

  ngOnInit(): void { 
    this.out.GetLogout().subscribe((node)=>{ this.alldata=node; });
  
   }

 
  

}

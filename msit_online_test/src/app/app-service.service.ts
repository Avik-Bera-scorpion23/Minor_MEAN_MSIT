import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';



 const url:any="http://localhost:4200/";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http:HttpClient) { }

  formData(data:any){
    return this.http.post(url+"register", data);
  }
  
  GetBackend(){
     return this.http.get<any>(url+"login");  
    // return this.http.get<any>(url+"login")     
  }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  Login(data:any){
    return this.http.post(url+"login", data);
  }
  GetLogout(){

    return this.http.get<any>(url+"logout");
  }

  Getdatabase(){

    return this.http.get<any>(url+"datab");

  }
}

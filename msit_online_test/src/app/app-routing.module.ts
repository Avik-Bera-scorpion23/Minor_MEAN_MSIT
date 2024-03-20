import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WelcomequizComponent } from './welcomequiz/welcomequiz.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
   {path:'logout', component:LogoutComponent } ,
   {path:'about', component:AboutComponent } ,
   {path:'contact', component:ContactComponent } ,
   {path:'register', component:RegisterComponent } ,
   {path:'welcomeQ', component:WelcomequizComponent } ,
   {path:'exam', component:ExamComponent } ,
   {path:'login', component:LoginComponent } ,
   {path:'table', component:TableComponent },
   {path:'', redirectTo:"about" , pathMatch:"full" } 
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExamComponent } from './exam/exam.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule} from '@angular/common/http';
import { WelcomequizComponent } from './welcomequiz/welcomequiz.component';
import { ChangeBgDirective } from './change-bg.directive';
import { LogoutComponent } from './logout/logout.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ExamComponent,
    ContactComponent,
    WelcomequizComponent,
    ChangeBgDirective,
    LogoutComponent,
    TableComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

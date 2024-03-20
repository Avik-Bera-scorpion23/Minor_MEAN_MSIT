import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcomequiz',
  templateUrl: './welcomequiz.component.html',
  styleUrls: ['./welcomequiz.component.css']
})
export class WelcomequizComponent implements OnInit {



  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }



  

  

}

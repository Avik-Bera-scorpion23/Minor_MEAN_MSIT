import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomequizComponent } from './welcomequiz.component';

describe('WelcomequizComponent', () => {
  let component: WelcomequizComponent;
  let fixture: ComponentFixture<WelcomequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomequizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

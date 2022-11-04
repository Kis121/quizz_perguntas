import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailedComponent } from './question-detailed.component';

describe('QuestionDetailedComponent', () => {
  let component: QuestionDetailedComponent;
  let fixture: ComponentFixture<QuestionDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

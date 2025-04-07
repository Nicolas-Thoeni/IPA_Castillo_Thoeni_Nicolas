import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePartTwoComponent } from './questionnaire-part-two.component';

describe('QuestionnairePartTwoComponent', () => {
  let component: QuestionnairePartTwoComponent;
  let fixture: ComponentFixture<QuestionnairePartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnairePartTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnairePartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

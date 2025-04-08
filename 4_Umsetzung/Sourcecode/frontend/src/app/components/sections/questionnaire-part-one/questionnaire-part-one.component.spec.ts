import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePartOneComponent } from './questionnaire-part-one.component';

describe('QuestionnairePartOneComponent', () => {
  let component: QuestionnairePartOneComponent;
  let fixture: ComponentFixture<QuestionnairePartOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnairePartOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnairePartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

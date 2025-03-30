import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuestionnaireComponent } from './open-questionnaire.component';

describe('OpenQuestionnaireComponent', () => {
  let component: OpenQuestionnaireComponent;
  let fixture: ComponentFixture<OpenQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenQuestionnaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

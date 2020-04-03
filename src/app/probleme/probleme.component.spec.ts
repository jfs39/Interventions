import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return false since name is shorter than 3 characters', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(2));
  expect(zone.valid).toBeFalsy();
  });

  it('should return true if name is longer than 3 characters', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(3));
  expect(zone.valid).toBeTruthy();
  });

  it('should return true if name is longer than 3 characters (200 characters)', () => {
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(200));
  expect(zone.valid).toBeTruthy();
  });

  it('should return false if name does not have any characters', () => {
    let errors= {};
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('');
    errors = zone.errors || {};
  expect(errors['minlength']).toBeTruthy();
  });

  it('should return true if name does not have any characters', () => {
    let errors= {};
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' '.repeat(10));
    errors = zone.errors || {};
  expect(errors['minlength']).toBeTruthy();
  });


});

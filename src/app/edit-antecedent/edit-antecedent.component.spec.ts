import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAntecedentComponent } from './edit-antecedent.component';

describe('EditAntecedentComponent', () => {
  let component: EditAntecedentComponent;
  let fixture: ComponentFixture<EditAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAntecedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSanctionComponent } from './edit-sanction.component';

describe('EditSanctionComponent', () => {
  let component: EditSanctionComponent;
  let fixture: ComponentFixture<EditSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

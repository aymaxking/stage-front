import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionsAddComponent } from './sanctions-add.component';

describe('SanctionsAddComponent', () => {
  let component: SanctionsAddComponent;
  let fixture: ComponentFixture<SanctionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

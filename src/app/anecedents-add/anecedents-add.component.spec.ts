import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecedentsAddComponent } from './anecedents-add.component';

describe('AnecedentsAddComponent', () => {
  let component: AnecedentsAddComponent;
  let fixture: ComponentFixture<AnecedentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnecedentsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnecedentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

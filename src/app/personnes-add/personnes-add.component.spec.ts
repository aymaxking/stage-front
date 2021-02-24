import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesAddComponent } from './personnes-add.component';

describe('PersonnesAddComponent', () => {
  let component: PersonnesAddComponent;
  let fixture: ComponentFixture<PersonnesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReiewComponent } from './add-edit-reiew.component';

describe('AddEditReiewComponent', () => {
  let component: AddEditReiewComponent;
  let fixture: ComponentFixture<AddEditReiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditReiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

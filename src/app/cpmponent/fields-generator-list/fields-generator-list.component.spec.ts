import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsGeneratorListComponent } from './fields-generator-list.component';

describe('FieldsGeneratorListComponent', () => {
  let component: FieldsGeneratorListComponent;
  let fixture: ComponentFixture<FieldsGeneratorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsGeneratorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsGeneratorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

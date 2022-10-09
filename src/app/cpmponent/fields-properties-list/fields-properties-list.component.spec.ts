import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsPropertiesListComponent } from './fields-properties-list.component';

describe('FieldsPropertiesListComponent', () => {
  let component: FieldsPropertiesListComponent;
  let fixture: ComponentFixture<FieldsPropertiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsPropertiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

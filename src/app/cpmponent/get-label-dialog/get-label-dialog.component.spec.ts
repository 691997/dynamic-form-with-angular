import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLabelDialogComponent } from './get-label-dialog.component';

describe('GetLabelDialogComponent', () => {
  let component: GetLabelDialogComponent;
  let fixture: ComponentFixture<GetLabelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLabelDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLabelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

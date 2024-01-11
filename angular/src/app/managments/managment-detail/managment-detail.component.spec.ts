import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentDetailComponent } from './managment-detail.component';

describe('ManagmentDetailComponent', () => {
  let component: ManagmentDetailComponent;
  let fixture: ComponentFixture<ManagmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagmentDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentsComponent } from './managments.component';

describe('ManagmentsComponent', () => {
  let component: ManagmentsComponent;
  let fixture: ComponentFixture<ManagmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentListComponent } from './managment-list.component';

describe('ManagmentListComponent', () => {
  let component: ManagmentListComponent;
  let fixture: ComponentFixture<ManagmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagmentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

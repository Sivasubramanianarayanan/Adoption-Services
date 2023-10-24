import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainapplicationdetailsComponent } from './mainapplicationdetails.component';

describe('MainapplicationdetailsComponent', () => {
  let component: MainapplicationdetailsComponent;
  let fixture: ComponentFixture<MainapplicationdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainapplicationdetailsComponent]
    });
    fixture = TestBed.createComponent(MainapplicationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

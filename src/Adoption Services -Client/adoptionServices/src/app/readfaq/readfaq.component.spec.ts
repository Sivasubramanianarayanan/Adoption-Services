import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfaqComponent } from './readfaq.component';

describe('ReadfaqComponent', () => {
  let component: ReadfaqComponent;
  let fixture: ComponentFixture<ReadfaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadfaqComponent]
    });
    fixture = TestBed.createComponent(ReadfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

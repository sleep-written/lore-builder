import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCardHeaderComponent } from './flex-card-header.component';

describe('FlexCardHeaderComponent', () => {
  let component: FlexCardHeaderComponent;
  let fixture: ComponentFixture<FlexCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

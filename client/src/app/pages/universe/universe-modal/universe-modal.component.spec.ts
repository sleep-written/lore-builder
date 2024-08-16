import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseModalComponent } from './universe-modal.component';

describe('UniverseModalComponent', () => {
  let component: UniverseModalComponent;
  let fixture: ComponentFixture<UniverseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniverseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniverseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
